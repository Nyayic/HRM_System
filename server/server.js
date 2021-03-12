const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./db')

// import  routes
const userRouter = require('./routes/userRoutes')
const employeeRouter = require('./routes/employeeRoutes')
const departmentRouter = require('./routes/departmentRoutes')
const holidayRouter = require('./routes/holidayRoutes')
const designationRouter = require('./routes/designationRoutes')
const empleaveRouter = require('./routes/empleaveRoutes')
const leavetypeRouter = require('./routes/leavetypeRoutes')

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

//use routes imported
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(userRouter)
app.use(employeeRouter)
app.use(departmentRouter)
app.use(holidayRouter)
app.use(designationRouter)
app.use(empleaveRouter)
app.use(leavetypeRouter)

//port listening
app.listen(PORT, function () {
  console.log('Server is running on Port:', PORT)
})