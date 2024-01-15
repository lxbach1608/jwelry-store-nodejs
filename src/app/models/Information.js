const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Information = new Schema({
  email: { type: String },
  firstName: { type: String, default: "" },
  lastName: { type: String, default: "" },
  phoneNumber: { type: String, default: "" },
  addressLine: { type: String, default: "" },
  city: { type: String, default: "" },
  country: { type: String, default: "" },
});

module.exports = mongoose.model("Information", Information);
