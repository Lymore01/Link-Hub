const userModel = require("../database/models/Users");
const userProfileModel = require("../database/models/UserProfile")
const bcrypt = require("bcryptjs");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find({}).populate("profile")
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ message: "Server error" });
    console.error(error);
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id).populate("profile")
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: "Server error" });
    console.error(error);
  }
};

exports.postUser = async (req, res) => {
  const user = new userModel({
    email: req.body.email,
    password: await bcrypt.hash(req.body.password, 10),
    // profile:"6615995b8618b4252bab30da"
  });
  try {
    const users = await user.save();
    res.status(201).json(users);
  } catch (error) {
    res.status(400).json({ message: "Server error" });
    console.error(error);
  }
};

exports.loginUser = async (req, res) => {
  try {
    res.status(201).json({
      message: "User logged in successfully!",
      user: req.user,
      session: req.session.id,
    });
  } catch (error) {
    res.json({ message: "You must login!" });
  }
};

exports.getUserProfile = async(req,res) => {
  try {
    const profile = await userProfileModel.find({})
    res.status(200).json(profile);
  } catch (error) {
    res.status(400).json({ message: "Server error" });
    console.error(error);
  }
}

exports.getUserProfileByUserId = async(req,res) => {
  try {
    const profile = await userProfileModel.find({
      user: req.params.id
    })
    res.status(200).json(profile);
  } catch (error) {
    res.status(400).json({ message: "Server error" });
    console.error(error);
  }
}

exports.postUserProfile = async(req,res) => {
  const profile = new userProfileModel({
    username: req.body.username,
    bio: req.body.bio,
    socialMedia: req.body.socialMedia,
    photo:req.body.profile,
    user:req.body.user
  });
  try {
    const profiles = await profile.save();
    res.status(201).json(profiles);
  } catch (error) {
    res.status(400).json({ message: "Server error" });
    console.error(error);
  }
}