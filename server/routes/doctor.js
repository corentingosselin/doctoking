const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/booking');
const doctorController = require('../controllers/doctor');

const auth = require('../middlewares/auth');
const role = require('../middlewares/role');



// get bookings your own if your are doctor 
router.get('/bookings', auth, role.checkRole(['doctor']), bookingController.getBookingByDoctorId);


module.exports = router;