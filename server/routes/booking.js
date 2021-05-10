const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/booking');
const auth = require('../middlewares/auth');
const role = require('../middlewares/role');
const ownBooking = require('../middlewares/ownBooking');

//booking by id, admin can do everything 

// get specific booking
router.get('/:id', auth, role.checkRole(['any']), ownBooking.checkOwn,  bookingController.getBookingById);
// create booking
router.post('/', auth, role.checkRole(['any']),  bookingController.createBooking);
//delete booking
router.delete('/:id', auth, role.checkRole(['any']), ownBooking.checkOwn,  bookingController.deleteBookingById);

module.exports = router;