const linkTreeModel = require("../database/models/linkTree");
const bcrypt = require("bcryptjs");

// GET ALL LINKS
exports.getAllLinkTrees = async (req, res) => {
  try {
    const linkTree = await linkTreeModel.find({});
    res.status(200).json(linkTree);
  } catch (error) {
    res.status(400).json({ message: "Server error" });
    console.error(error);
  }
};

// GET LINK BY ID
exports.getLinkTreeById = async (req, res) => {
  try {
    const linkTree = await linkTreeModel.findById(req.params.id);
    res.status(200).json(linkTree);
  } catch (error) {
    res.status(400).json({ message: "Server error" });
    console.error(error);
  }
};

// POST
exports.postLinkTree = async (req, res) => {
  const linkTree = new linkTreeModel({
    title: req.body.type,
  });
  try {
    const link_Tree = await linkTree.save();
    res.status(201).json(link_Tree);
  } catch (error) {
    res.status(400).json({ message: "Server error" });
    console.error(error);
  }
};

// UPDATE
exports.updateLinkTree = async (req, res) => {
  try {
    const linkTree = await linkTreeModel.findById(req.params.id, {
        $set:{
            title: req.body.titleEdit,
        }
    });
    res.status(200).json(linkTree);
  } catch (error) {
    res.status(400).json({ message: "Server error" });
    console.error(error);
  }
};

// DELETE
exports.deleteLinkTree = async (req, res) => {
  try {
    const linkTree = await linkTreeModel.findByIdAndDelete(req.params.id);
    res.status(200).json(linkTree);
  } catch (error) {
    res.status(400).json({ message: "Server error" });
    console.error(error);
  }
};
