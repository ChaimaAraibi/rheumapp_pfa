const Doctor = require("./../models/doctorModel");
const jwt = require("jsonwebtoken");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");

const signToken = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  const newDoctor = await Doctor.create(req.body);
  const token = signToken(newDoctor._id);
  res.status(201).json({
    status: "success",
    token,
    data: {
      doctor: newDoctor,
    },
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const mail = req.query.mail;
  const cin = req.query.cin;
  // 1) Check if mail & password exists
  if (!mail || !cin) {
    return next(new AppError("Please provide email && cin", 400));
  }
  // 2) Check if user exists && password is correct
  const doctor = await Doctor.findOne({ mail }).select("+cin");
  if (!doctor || !(await doctor.correctCin(cin, doctor.cin))) {
    return next(new AppError("incorrect email or cin", 401));
  }
  // 3) If everything ok, send token to client
  const token = signToken(doctor._id);
  res.status(200).json({
    status: "success",
    token,
  });
});
