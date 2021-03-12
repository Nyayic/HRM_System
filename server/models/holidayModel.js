const mongoose= require('mongoose');
const {Schema} = require('mongoose');

const holidaySchema = new Schema({
   holiday_name:{
      type: String,
      required: true,
   },
   holiday_date:{
    type: Date,
    required: true,
 },

},
{timestamps: true});

module.exports = mongoose.model('holiday', holidaySchema);