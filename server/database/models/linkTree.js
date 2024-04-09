const mongoose = require('mongoose');

const linkTreeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  links:[
    {type: mongoose.Schema.Types.ObjectId, ref: 'Link', required: true }
  ],
}, { timestamps: true });

const LinkTree = mongoose.model('LinkTree', linkTreeSchema);

module.exports = LinkTree;