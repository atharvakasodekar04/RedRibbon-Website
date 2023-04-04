

const mongoose = require("mongoose");

const formDataSchema = new mongoose.Schema({
  name: String,
  mobile: String,
  email: String,
  aadhaar: String,
  city: String,
  bloodGroup: String,
 
});

const FormData = mongoose.model("FormData", formDataSchema);

module.exports = FormData;