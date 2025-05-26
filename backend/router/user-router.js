const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/user-controller");

router.get("/", userControllers.home);

// @desc    Create a new user or signup
router.post("/signup", userControllers.signup);

// @desc    Login a user
router.post("/login", userControllers.login);

// @desc    Get all users
router.get("/users", userControllers.getUser);

// @desc    Update a user
router.put("/:id", userControllers.updateUser);

// @desc    Delete a user
router.delete("/:id", userControllers.deleteUser);

module.exports = router;
