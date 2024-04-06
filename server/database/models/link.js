
// Hello there senior dev
const mongoose = require("mongoose");

const linkSchema = new mongoose.Schema(
  {
    linkTreeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "LinkTree",
      required: true,
    },
    title: { type: String, required: true },
    url: { type: String, required: true },
  },
  { timestamps: true }
);

const Link = mongoose.model("Link", linkSchema);
module.exports = Link;
