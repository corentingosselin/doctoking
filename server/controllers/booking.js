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
    async getBookingByPatientId(req, res) {

        const booking = await Slot.findAll({
            where: {
                patientId: req.userId
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

        const booking = Booking.findAll({
            where: { patientId: req.userId }
        }).then((bookings) => { res.status(201).send(bookings) })
            .catch((error) => res.status(500).send({ error: 'Please try this later' }));
    },
    getBookingByDoctorId: function (req, res) {
        return Booking.findAll({
            where: { doctorId: req.userId }
        }).then((bookings) => { res.status(201).send(bookings) })
            .catch((error) => res.status(500).send({ error: 'Please try this later' }));
    },
    async deleteBookingById(req, res) {
        return Booking
            .destroy({
                where: { patientId: req.params.id }
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
        const dayId = bookingDate.getDay();
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
                start: bookingDate
            }
        });
        //change response with Invalid Request Error later
        if (existingBooking !== null) {
            return res.status(400).send({ error: 'Doctor not available for this date and time' });
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
                res.status(201).send(booking);
            }).catch((error) => {
                console.log(error);
                res.status(400).send({ error: 'Invalid Booking Request' })
            });


    },
};