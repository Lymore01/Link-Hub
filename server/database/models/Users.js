const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profile: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserProfile",
    }],
    linkTree: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "LinkTree",
    }],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
