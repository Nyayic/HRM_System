const User = require('./userModel')
const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

//create new user
// exports.signup = (req, res, next) => {

// };

// exports.login = (req, res, next) => {

// };

//get all users
exports.usersList = function(req, res, next){

  User.find({})
  .exec(function (err, usersrequest){
      if(err){
          return next(err);
      }else{
          res.json(usersrequest);
      }
  })
}

//get all hrs
exports.hrList = function(req, res, next){

  User.find({role: "HR"})
  .exec(function (err, hrRequest){
      if(err){
          return next(err);
      }else{
          res.json(hrRequest);
      }
  })
}

//get all employees
exports.employeeList = function(req, res, next){

  User.find({role: "Employee"})
  .exec(function (err, employeeRequest){
      if(err){
          return next(err);
      }else{
          res.json(employeeRequest);
      }
  })
}

//get a single hr 
exports.singlehrRequest = function(req, res, next){

  User.findById({_id: req.params.requestId})
  .exec(function (err, singlehrRequest){
      if(err){
          return next(err);
      }else{
          res.json(singlehrRequest);
      }
  })
}

//get a single employee
exports.singleEmployeeRequest = function(req, res, next){

  User.findById({_id: req.params.requestId})
  .exec(function (err, singleEmployeeRequest){
      if(err){
          return next(err);
      }else{
          res.json(singleEmployeeRequest);
      }
  })
}