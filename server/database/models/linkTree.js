const mongoose = require('mongoose');

const linkTreeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
}, { timestamps: true });

const LinkTree = mongoose.model('LinkTree', linkTreeSchema);

module.exports = LinkTree;