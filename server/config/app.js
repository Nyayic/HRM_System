require("dotenv").config();

// GET environment variables and freeze to prevent value edit
module.exports = Object.freeze({
  SECRET: process.env.HASH_SECRET,
  FRONT_END_BASE_URL: process.env.FRONT_END_BASE_URL || "http://127.0.0.1:3000",

  PASSWORD_EXPIRES_IN: process.env.PASSWORD_EXPIRES_IN || 10, // Default value of 10 Mins expiry
  PASSWORD_SALT_ROUNDS: process.env.PASSWORD_SALT_ROUNDS,
});
