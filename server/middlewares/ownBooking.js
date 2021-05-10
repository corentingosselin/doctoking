const Booking = require('../models').Booking;

exports.checkOwn = async (req, res, next) => {
    Booking.findByPk(req.params.id)
            .then(booking => {
                if (!booking) {
                     return res.status(404).send({
                        error: 'Booking not found',
                    });
                }
                if (booking.patientId === req.userId
                    || booking.doctorId === req.userId
                    || req.user.role === 'admin') {
                    req.booking = booking;
                    next();
                } else res.send(401, { error: 'UnAuthorized!' });
            });
}

