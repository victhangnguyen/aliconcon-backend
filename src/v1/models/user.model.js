const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userId: { type: Number, required: true },
    email: String,
    username: String,
  },
  {
    collection: "user",
    timestamps: true,
  }
);

const User = mongoose.model("users", userSchema);
export default User;
