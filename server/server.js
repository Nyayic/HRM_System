const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./db')

//requiring routes

const userRouter = require('./modules/user_module/userRoutes')

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
      console.log('Can not connect to the database' + err)
    }
  )

  //user log in
app.post("api/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.status(400).send([user, "Cannot log in", info]);
    }

    req.login(user, err => {
      res.send("Logged in");
    });
  })(req, res, next);
});

//user log out
app.get("/api/logout", function(req, res) {
  req.logout();

  console.log("logged out");

  return res.send();
});

//central error handling for errors throughout the express app
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
  next();
});
//use routes
app.use('/api/auth', userRouter);

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(userRouter)

app.listen(PORT, function () {
  console.log('Server is running on Port:', PORT)
})