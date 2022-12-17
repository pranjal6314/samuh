const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  liscence: { type: String, required: true },
  updatedBy: { type: String, required: true },
});

const Drivers = mongoose.model("drivers", UserSchema);
// Drivers.createIndexes();
module.exports = Drivers;
