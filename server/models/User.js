const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  // bcrypt = require('bcrypt'),
  SALT_WORK_FACTOR = 10;

const UserSchema = new Schema({
  fullName: {
    type: String,
  },
  name: {
    type: String,
    required: true,
    index: { unique: true },
  },
  email: {
    type: String,
    required: true,
    index: { unique: true },
  },
  password: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Not Verified", "Verified", "Deactivated"],
  },
});

module.exports = mongoose.model("User", UserSchema);
