const userModel = require("../database/models/Users");
const bcrypt = require("bcryptjs");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find({})
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ message: "Server error" });
    console.error(error);
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id)
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
