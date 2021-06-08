const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');


const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const patientRouter = require('./routes/patient');
const bookingRouter = require('./routes/booking');
const doctorRouter = require('./routes/doctor');

const nodemailer = require("nodemailer");


const app = express();


// database
const db = require("./models");
db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });     

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/', indexRouter);
app.use('/api/auth', authRouter);
app.use('/api/patient', patientRouter);
app.use('/api/booking', bookingRouter);
app.use('/api/doctor', doctorRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

let transporter = nodemailer.createTransport({
  service: 'mailhog',
  port: 1025
  //auth: {
      //user: process.env.EMAIL_USERNAME,
      //pass: process.env.EMAIL_PASSWORD
  //}
});

let sendMail = (mailOptions)=>{
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
      return console.log(error);
  }
});
};

module.exports = { app };
