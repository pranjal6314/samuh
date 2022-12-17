const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  Gaadi_number: { type: String, required: true, unique: true },
  size: { type: Number, required: true },
  owner: { type: String, required: true, unique: true },
  updatedBy: { type: String, required: true, unique: true },
});

const Truck = mongoose.model("truck", UserSchema);
// Truck.createIndexes();
module.exports = Truck;
