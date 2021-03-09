const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const config = require("./db");
const winston = require("./config/winston");

// import  routes
const mainRouter = require("./routes");

const PORT = 4000;

//mongoose.Promise = global.Promise;
mongoose
  .connect(config.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log("Database is connected");
    },
    (err) => {
      console.log("Cannot connect to the database" + err);
    }
  );

//use imports
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("combined", { stream: winston.stream }));
app.use(mainRouter);

//port listening
app.listen(PORT, function () {
  console.log("Server is running on Port:", PORT);
});
