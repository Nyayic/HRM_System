const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        trim: true
    },
    last_name: {
        type: String,
        required: true,
        trim: true
    },
    user_name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    employee_id: {
        type: String,
        required: true,
        trim: true
    },
    joining_date: {
        type: String,
        required: true,
        trim: true
    },
    phone_number: {
        type: String,
        trim: true
    },
    qualification: {
        type: String,
        required: true,
        trim: true
    },
    department: {
        type: String,
        required: true,
        trim: true
    },
    designation: {
        type: String,
        required: true,
        trim: true
    },
 
});

const Employee = mongoose.model('Employee', employeeSchema)

module.exports = Employee;