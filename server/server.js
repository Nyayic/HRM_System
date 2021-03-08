const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./db')

// import  routes
const userRouter = require('./routes/userRoutes')
const employeeRouter = require('./routes/employeeRoutes')

const PORT = 4000

//mongoose.Promise = global.Promise;
mongoose
  .connect(config.DB, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  })
  .then(
    () => {
      console.log('Database is connected')
    },
    err => {
      console.log('Can not connect to the database' + err
  )}
)

//use imports
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(userRouter)
app.use(employeeRouter)

//port listening
app.listen(PORT, function () {
  console.log('Server is running on Port:', PORT)
})