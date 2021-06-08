const User = require('../models').User;
const Slot = require('../models').Slot;

const models = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
module.exports = {

    list(req, res) {
        return User.findAll({
            where: {
                role: 'doctor'
            }
        }).then((users) => res.status(200).send(users))
            .catch((error) => res.status(400).send(error));
    },
    //get calendar of doctor availability
    getAvailabilities(req, res) {
        // 5 jours
        return Slot.findAll({
            attributes: ['id', 'slot'],
            include: [
                {
                    attributes: ['start'],
                    model: models.Booking,
                    as: 'Booking',
                },
                {
                    attributes: ['day', 'time_start', 'time_end'],
                    model: models.Availability,
                    as: 'Availability',
                    where: {
                        doctorId: req.params.doctorId
                    }
                },
            ],
        }).then((slots) => {

            //auto time calculus
            for (var i = 0; i < slots.length; i++) {
                const date = new Date("1970-01-01 " + slots[i].Availability.time_start);
                let totalMinutes = date.getHours() * 60 + date.getMinutes();
                totalMinutes += (slots[i].slot) * 30;

                let hours = Math.floor(totalMinutes / 60);
                let minutes = totalMinutes % 60;
                if (hours < 10) { hours = "0" + hours; }
                if (minutes < 10) { minutes = "0" + minutes; }
                const time = hours + ':' + minutes + ':00';
                slots[i].setDataValue('period', time);
            }
            res.status(200).send(slots);

        });


    },

    //get doctors by name or speciality, and by city
    getDoctors(req, res) {
        const itemPerPage = 10;
        const offset = itemPerPage * (parseInt(req.params.page) - 1);
        let whereStatement = {};
        if (req.query.title)
            whereStatement.name = req.query.title;

        return User.findAll(
            {
                attributes: ['id', 'first_name', 'last_name', 'city', 'phone','address','gender'],
                offset: offset,
                limit: itemPerPage,
                include: [
                    {
                        as: 'titles',
                        attributes: ['id', 'name'],
                        model: models.Title,
                        through: { attributes: [] },
                        where: whereStatement
                    }
                ],
                where: {
                    role: 'doctor',
                    city: req.query.city,
                },
            }).then((doctors) => res.status(200).send(doctors))
            .catch((error) => {
                res.status(400).send({ error: 'Invalid Doctor Request' });
                throw error;
            });
    }

};