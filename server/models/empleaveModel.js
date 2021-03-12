const mongoose= require('mongoose');
const {Schema} = require('mongoose');

const leaveSchema = new Schema({
   leave_type:{
      type: String,
      required: true,
   },
   from_date:{
    type: String,
    required: true,
 },
    to_date:{
    type: String,
    required: true,
 },
    number_of_days:{
    type: String,
    required: true,
 },
    remaining_leaves:{
    type: String,
    required: true,
 },
    leave_reason:{
    type: String,
    required: true,
 },

},
{timestamps: true});

module.exports = mongoose.model('Leave', leaveSchema);