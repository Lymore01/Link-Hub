const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  bio:{type:String, required:true},
  profile:{type:String, required:true},
  socialMedia:{type:Array, required:true},
  linkTree:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"LinkTree"
  }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;