const mongoose = require("mongoose"),
  { Schema } = mongoose;

const EmployesSchema = new Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  office: { type: String, required: true },
  salary: { type: Number, required: true }
});

module.exports = mongoose.model("Employee", EmployesSchema);
