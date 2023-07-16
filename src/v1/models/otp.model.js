const mongoose = require("mongoose");

const optSchema = new mongoose.Schema(
  {
    email: String,
    otp: String,
    create: { type: Date, default: Date.now, index: { expires: 20 } },
  },
  { collection: "otp" }
);

module.exports = model("otp", optSchema);
