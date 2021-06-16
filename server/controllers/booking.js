const Booking = require('../models').Booking;
const User = require('../models').User;
const Slot = require('../models').Slot;
const nodemailer = require("nodemailer");

const models = require('../models');

const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const sequelize = require('../models/index').sequelize;
const days = ['6', '0', '1', '2', '3', '4', '5'];

const transporter = nodemailer.createTransport({
    host: 'maildev',
    port: 25,
    // We add this setting to tell nodemailer the host isn't secure during dev:
    ignoreTLS: true
});



module.exports = {
    getBookingById: function (req, res) {
        return res.status(200).send(req.booking);
    },
    getBookingByPatientId(req, res) {
        return Booking.findAll({
            where: {
                patientId: req.userId
            },
            include: [
                {
                    attributes: ['slot'],
                    model: models.Slot,
                    as: 'Slot',
                    include: [
                        {
                            model: models.Availability,
                            as: 'Availability'
                        }
                    ]
                },
                {
                    attributes: ['last_name', 'first_name', 'gender', 'city', 'address', 'phone'],
                    model: models.User,
                    as: 'doctorBooking',
                    where: {
                        role: 'doctor',
                    },
                    include: [
                        {
                            as: 'titles',
                            attributes: ['name'],
                            model: models.Title,
                            through: { attributes: [] }
                        }
                    ]
                }
            ]
        }).then((bookings) => { res.status(201).send(bookings) })
            .catch((error) => {
                console.log(error);
                res.status(500).send({ error: 'Please try this later' });
            });
    },
    getBookingByDoctorId(req, res) {
        return Booking.findAll({
            where: {
                doctorId: req.userId
            },
            include: [
                {
                    attributes: ['slot'],
                    model: models.Slot,
                    as: 'Slot',
                    include: [
                        {
                            model: models.Availability,
                            as: 'Availability'
                        }
                    ]
                },
                {
                    attributes: ['last_name', 'first_name', 'gender', 'city', 'address', 'phone'],
                    model: models.User,
                    as: 'patientBooking',
                    where: {
                        role: 'patient',
                    }
                }
            ]
        }).then((bookings) => { res.status(201).send(bookings) })
            .catch((error) => {
                console.log(error);
                res.status(500).send({ error: 'Please try this later' });
            });
    },
    async deleteBookingById(req, res) {
        return Booking
            .destroy({
                where: { id: req.params.id }
            })
            .then(async (booking) => {

                transporter.sendMail({
                    from: '"doctoking 👑" <no-reply@doctoking.com>',
                    to: req.user.email,
                    subject: "Booking cancel confirmation ✔", // Subject line
                    text: "Date " + booking.start + " \n lol", // plain text body
                });

                return res.status(200).send({ message: 'Booking is cancelled' });
            }).catch((error) => {
                res.status(400).send(error);
                throw error;
            });

    },
    async createBooking(req, res) {
        const error = { error: 'UnAuthorized!' };

        //a user cannot be patient and doctor 
        if (req.body.patientId === req.body.doctorId) return res.status(405).send(error);

        const user = await User.findByPk(req.userId);
        if (!user) return res.status(405).send(error);

        if (user.role === 'doctor') {
            if (user.id !== req.body.doctorId) return res.status(405).send(error);
            //check if patient id exists
            if (!User.findByPk(req.body.patientId)) return res.status(404).send({ error: 'Patient not found' });
        } else if (user.role === 'patient') {
            if (user.id !== req.body.patientId) return res.status(405).send(error);
            if (!User.findByPk(req.body.doctorId)) return res.status(404).send({ error: 'Doctor not found' });
        } else if (user.role === 'admin') {
            if (!User.findByPk(req.body.patientId)) return res.status(404).send({ error: 'Patient not found' });
            if (!User.findByPk(req.body.doctorId)) return res.status(404).send({ error: 'Doctor not found' });
        }
        const bookingDate = new Date(req.body.start);
        //change response with Invalid Request Error later
        if (!bookingDate) return res.status(400).send({ error: 'Invalid Date Request' });
        const slotValid = await Slot.findAll({
            where: {
                id: req.body.slotId
            },
            include: [
                {
                    as: 'Availability',
                    model: models.Availability,
                    required: true,
                    where: {
                        doctorId: req.body.doctorId,
                    }
                }
            ]
        });
        //change response with Invalid Request Error later
        if (slotValid.length <= 0) return res.status(400).send({ error: 'Invalid Slot, not found or does not correspond with the doctor or slot does not correspond with the day' });
        const existingBooking = await Booking.findOne({
            where: {
                slotId: req.body.slotId,
                //slot: req.body.slot,
                start: bookingDate
            }
        });


        //change response with Invalid Request Error later
        if (existingBooking !== null) {
            return res.status(400).send({ error: 'Doctor not available for this date and time' });
        }

        const existingBookingOther = await Booking.findOne({
            where: {
                patientId: user.id,
                start: bookingDate
            }, include: [
                {
                    as: 'Slot',
                    model: models.Slot,
                    required: true,
                    where: {
                        slot: req.body.slot,
                    }
                }
            ]
        });

        if (existingBookingOther !== null) {
            return res.status(400).send({ error: 'Vous avez déjà un rendez-vous à cette date et horaire' });
        }



        return Booking
            .create({
                start: req.body.start,
                doctorId: req.body.doctorId,
                slotId: req.body.slotId,
                patientId: req.body.patientId,
                description: req.body.description
            })
            .then(async (booking) => {
                //send confirmation email     
                await transporter.sendMail({
                    from: '"doctoking 👑" <no-reply@doctoking.com>',
                    to: user.email,
                    subject: "Your booking is confirmed ✔", // Subject line
                    text: "Date " + booking.start + " \n lol", // plain text body
                });

                const doctor = await User.findByPk(req.body.doctorId);
                const doctorTitles = await models.DoctorTitle.findOne({ where: { doctorId: req.body.doctorId } });

                const title = await models.Title.findByPk(doctorTitles.titleId);
                const slot = await Slot.findByPk(req.body.slotId);
                const availability = await models.Availability.findByPk(slot.availabilityId);


                const date = new Date(booking.start + " " + availability.time_start);
                let totalMinutes = date.getHours() * 60 + date.getMinutes();
                totalMinutes += (slot.slot) * 30;
                let hours = Math.floor(totalMinutes / 60);
                let minutes = totalMinutes % 60;
                if (hours < 10) { hours = "0" + hours; }
                if (minutes < 10) { minutes = "0" + minutes; }
                const time = (hours + ':' + minutes + ':00').slice(0, -3);

                const response = {
                    id: booking.id,
                    doctor: {
                        last_name: doctor.last_name,
                        first_name: doctor.first_name,
                        city: doctor.city,
                        address: doctor.address,
                        phone: doctor.phone,
                        gender: doctor.gender,
                        title: title.name
                    },
                    date: new Date(booking.start).toLocaleDateString(),
                    time: time
                };
                console.log(response);

                res.status(201).send(response);
            }).catch((error) => {
                console.log(error);
                res.status(400).send({ error: 'Invalid Booking Request' })
            });


    },
};