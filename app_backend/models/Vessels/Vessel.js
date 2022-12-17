const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  name: { type: String, required: true },
  beNumber: { type: String, required: true },
  biltyGatepassDetails: { type: String, required: true },
  owner: { type: String, required: true },
  updatedBy: { type: String, required: true },
});
const Vessel = mongoose.model("vessels", UserSchema);
module.exports = Vessel;
