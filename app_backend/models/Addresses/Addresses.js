const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  address_id: { type: String, required: true, unique: true },
  address_line: { type: String, required: true, unique: true },
  tehsil: { type: String, required: true, unique: true },
  district: { type: String, required: true, unique: true },
  po_number: { type: String, required: true, unique: true },
  city: { type: String, required: true, unique: true },
  state: { type: String, required: true, unique: true },
  zipcode: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: true },
  owner: { type: String, required: true, unique: true },
  updatedBy: { type: String, required: true, unique: true },
});

const Addressess = mongoose.model("addressess", UserSchema);
// Addressess.createIndexes();
module.exports = Addressess;
