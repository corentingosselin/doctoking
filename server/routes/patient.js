const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/booking');
const doctorController = require('../controllers/doctor');

const auth = require('../middlewares/auth');
const role = require('../middlewares/role');


// /api/patient/booking

// get bookings by patient
router.get('/bookings', auth, role.checkRole(['patient']), bookingController.getBookingByPatientId);

//get doctors
router.get('/search/:page', doctorController.getDoctors);

//get availabilities
router.get('/availabilities/:doctorId', doctorController.getAvailabilities);



module.exports = router;