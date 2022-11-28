const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const UserSchema = new Schema({
  fullName: {
    type: String,
    default: null,
  },
  name: {
    type: String,
    required: true,
    unique: true,
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
  token: {
    type: String,
  },
  createdAt: {
    type: String,
  },
  lastLoggedIn: {
    type: String,
  },
});

module.exports = mongoose.model("User", UserSchema);
