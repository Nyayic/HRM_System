const mongoose= require('mongoose');
const {Schema} = require('mongoose');

const designationSchema = new Schema({
   designation_name:{
      type: String,
      required: true,
   },
   department_name:{
       type: String,
       required: true,
       ref: 'Department'
   }

},
{timestamps: true});

module.exports = mongoose.model('Designation', designationSchema);