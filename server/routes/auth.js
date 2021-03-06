var express = require('express');
var router = express.Router();
var authController = require('../controllers/auth');
const auth = require('../middlewares/auth');
const role = require('../middlewares/role');

// patients
router.post('/patient/register', authController.registerPatient);

//doctors,  only authenticated admins should be able to create doctor
router.post('/doctor/register', authController.registerDoctor);


router.post('/login', authController.login);

module.exports = router;
