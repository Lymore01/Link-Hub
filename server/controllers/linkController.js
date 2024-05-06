const linkModel = require("../database/models/link");
const bcrypt = require("bcryptjs");

// GET ALL LINKS
exports.getAllLinks = async (req, res) => {
  try {
    const links = await linkModel.find({});
    res.status(200).json(links);
  } catch (error) {
    res.status(400).json({ message: "Server error" });
    console.error(error);
  }
};

// GET LINK BY ID
exports.getLinkById = async (req, res) => {
  try {
    const link = await linkModel.findById(req.params.id);
    res.status(200).json(link);
  } catch (error) {
    res.status(400).json({ message: "Server error" });
    console.error(error);
  }
};

// POST
exports.postLink = async (req, res) => {
  const link = new linkModel({
    type: req.body.type,
    url: req.body.url,
  });
  try {
    const links = await link.save();
    res.status(201).json(links);
  } catch (error) {
    res.status(400).json({ message: "Server error" });
    console.error(error);
  }
};

// UPDATE
exports.updateLink = async (req, res) => {
  try {
    const link = await linkModel.findById(req.params.id, {
        $set:{
            title: req.body.titleEdit,
            url: req.body.urlEdit
        }
    });
    res.status(200).json(link);
  } catch (error) {
    res.status(400).json({ message: "Server error" });
    console.error(error);
  }
};

// DELETE
exports.deleteLink = async (req, res) => {
  try {
    const link = await linkModel.findByIdAndDelete(req.params.id);
    res.status(200).json(link);
  } catch (error) {
    res.status(400).json({ message: "Server error" });
    console.error(error);
  }
};
