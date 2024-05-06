// handle all imports
const express = require("express");
const userRoute = express.Router();
const passport = require("../authentication/passport");
const authenticateUser = require("../middlewares/authenticateUser");
const userController = require("../controllers/userController");

// middlewares

userRoute.use(passport.initialize());
userRoute.use(passport.session());

userRoute.get("/all", userController.getAllUsers);
userRoute.get("/:id", userController.getUserById);
userRoute.post("/post-user", userController.postUser);
userRoute.post(
  "/login",
  authenticateUser,
  passport.authenticate("local"),
  userController.loginUser
);
userRoute.get("/profile", userController.getUserProfile);
userRoute.get("/profile/:id", userController.getUserProfileByUserId);
userRoute.post("/post-profile", userController.postUserProfile);

module.exports = userRoute;
