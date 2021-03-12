const mongoose= require('mongoose');
const {Schema} = require('mongoose');

const leavetypeSchema = new Schema({
   leavetype:{
      type: String,
      required: true,
   },
   number_of_days:{
       type: String,
       required: true,
   }

},
{timestamps: true});

module.exports = mongoose.model('Leave Type', leavetypeSchema);