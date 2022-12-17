const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  gst_number: { type: String, required: true },
  name: { type: String, required: true },
  address: { type: String, required: true },
});

const Profile = mongoose.model("profile", UserSchema);
module.exports = Profile;
