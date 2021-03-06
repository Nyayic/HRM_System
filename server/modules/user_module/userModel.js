//requiring dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
mongoose.set('useCreateIndex', true);

//cretae new user
// exports.signup = (req, res, next) => {
//   bcrypt.hash(req.body.password, 10).then(
//     (hash) => {
//       const user = new User({
//         email: req.body.email,
//         password: hash
//       });
//       user.save().then(
//         () => {
//           res.status(201).json({
//             message: 'User added successfully!'
//           });
//         }
//       ).catch(
//         (error) => {
//           res.status(500).json({
//             error: error
//           });
//         }
//       );
//     }
//   );
// };

// //main users schema
// const usersSchema = new Schema({
//     name: {
//         type: String,
//         required: true,
//         unique : true
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true
//     },
//     role: {
//         type: String, 
//         HR: {type: Schema.ObjectId, ref: 'HR'},
//         Employee: {type: Schema.ObjectId, ref: 'Employee'}
//     }
// },
// {
//     timestamps: true
// });

//employee schema specific for eployee role
const employeeSchema = new Schema({ 
    role: {
        type: String
    }
});

//hr Schema specific for hr role
const hrSchema = new Schema({
    role: {
        type: String
    }
});

//making sure that the user trying to log in has the correct credentials
usersSchema.methods.isValidPassword = async function(password){
    //const user = this;
    const salt = await bcrypt.genSalt(10);
        var hashPassword = await bcrypt.hash(password, salt);
          password = hashPassword;

    //Hashes the password sent by the user for login and checks if the hashed password stored in the 
    //database matches the one sent. Returns true if it does else false.
    const compare = await compare(password, user.password);
    return compare;
  }

//users model, developers model, projectManagers model
const User = mongoose.model('User', usersSchema, 'users');
User.HR = mongoose.model('HR', hrSchema, 'users');
User.Employee = mongoose.model('Employee', employeeSchema, 'users');

module.exports = User;