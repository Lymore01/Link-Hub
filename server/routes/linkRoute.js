const express = require("express")
const linkRoute = express.Router()
const linkController = require("../controllers/linkController")

linkRoute.get("/all", linkController.getAllLinks)
linkRoute.get("/:id", linkController.getLinkById)
linkRoute.post("/post-link", linkController.postLink)
linkRoute.put("/update/:id", linkController.updateLink)
linkRoute.delete("/:id", linkController.deleteLink)

module.exports = linkRoute;