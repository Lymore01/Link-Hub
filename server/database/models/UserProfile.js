const mongoose = require("mongoose");

const userProfileSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, default: "Linky", unique: false },
    bio: { type: String, required: true },
    socialMedia: { type: Array, required: false, default:"Whatsapp" },
    photo:{
      type:String
    },
    user: {
      type: String,
      required:true
    },
  },
  { timestamps: true }
);

const UserProfile = mongoose.model("UserProfile", userProfileSchema);

module.exports = UserProfile;
