const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  // 2.	Gate pass number
  // 3.	E-way bill and assign to challan
  // 4.	Truck number
  // a.	Select truck from options
  // 5.	Goods []
  // a.	Good_id - good name, hsn code, default price.
  // b.	Good quantity
  // c.	good_price
  // 6.	Transporter
  // a.	Select a party
  // 7.	Weight - enter manually
  // 8.	E-Way bill no - enter manually for now
  // 9.	Vessel name - select vessel id
  // 10.	Driver name - select driver id
  // 11.	Entry bill no - enter manually
  // 12.	updatedBy - userId

  e_way_bill: { type: String, required: true, unique: true },
  truck_number: { type: String, required: true, unique: true },
  goods: { type: Array, required: true, unique: true },
  transporter: { type: String, required: true, unique: true },
  weight: { type: Number, required: true, unique: true },
  vessel_name: { type: String, required: true, unique: true },
  driver_name: { type: String, required: true, unique: true },
  entry_bill_no: { type: String, required: true, unique: true },
  updatedBy: { type: String, required: true, unique: true },
});

const Challan = mongoose.model("challan", UserSchema);
// Challan.createIndexes();
module.exports = Challan;
