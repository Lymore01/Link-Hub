const express = require("express")
const linkTreeRoute = express.Router()
const linkTreeController = require("../controllers/linkTreeController")

linkTreeRoute.get("/all", linkTreeController.getAllLinkTrees)
linkTreeRoute.get("/:id", linkTreeController.getLinkTreeById)
linkTreeRoute.post("/post-link", linkTreeController.postLinkTree)
linkTreeRoute.put("/update/:id", linkTreeController.updateLinkTree)
linkTreeRoute.delete("/:id", linkTreeController.deleteLinkTree)