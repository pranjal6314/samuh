const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  truck_id: { type: String, required: true, unique: true },
  driver_id: { type: String, required: true, unique: true },
  expense_details: { type: String, required: true, unique: true },
  items: { type: Array, required: true, unique: true },
  total_amount: { type: Number, required: true, unique: true },
  date: { type: Date, required: true, unique: true },
  comments: { type: String, required: true, unique: true },
  status: { type: String, required: true, unique: true },
  updatedBy: { type: String, required: true, unique: true },
});
const Expenses = mongoose.model("expenses", UserSchema);
// Expenses.createIndexes();
module.exports = Expenses;
