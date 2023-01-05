const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },

  price: {
    type: String,
    required: true,
  },

  address: {
    type: { String },
    required: true,
  },

  products: {
    type: [String],
    required: true,
  },
});

module.exports = mongoose.model("Order", orderSchema);
