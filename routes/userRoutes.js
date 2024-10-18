const express = require("express");
const {
  loginController,
  registerController,
  authController,
} = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware.js");

const router = express.Router();

//   register route
router.post("/register", registerController);

//   login route
router.post("/login", loginController);

//  auth
router.post("/get-user-data", authMiddleware,authController);

module.exports = router;
