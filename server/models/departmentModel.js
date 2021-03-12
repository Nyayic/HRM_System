const mongoose= require('mongoose');
const {Schema} = require('mongoose');

const departmentSchema = new Schema({
   department_name:{
      type: String,
      required: true,
   },

},
{timestamps: true});

module.exports = mongoose.model('Department', departmentSchema);