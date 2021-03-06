const jwt = require('jsonwebtoken')
const Employee = require('../models/employeeModel/employeeModel')

const auth = async (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '')
  const data = jwt.verify(token, 'WinterIsHere2020')
  try {
    const employee = await Employee.findOne({
      _id: data._id,
      email: data.email
    })
    if (!employee) {
      throw new Error('Employee profile not found')
    }
    req.employee = employee
    req.token = token
    next()
  } catch (error) {
    res.status(401).send({ error: 'Not authorized to access this resource' })
  }
}
module.exports = auth;