const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  name: { type: String, required: true, unique: true },
  gst_number: { type: String, required: true, unique: true },
  phones: { type: Array, required: true, unique: true },
  address_id: { type: String, required: true, unique: true },
  pan_card: { type: String, required: true, unique: true },
  code: { type: String, required: true, unique: true },
  party_types: { type: Array, required: true, unique: true },
  updatedBy: { type: String, required: true, unique: true },
});

const Party = mongoose.model("party", UserSchema);
// Party.createIndexes();
module.exports = Party;
