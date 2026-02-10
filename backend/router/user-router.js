const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/user-controller");

router.get("/", userControllers.home);

router.post("/signup", userControllers.createUser);
router.post("/login", userControllers.loginUser);

// @desc    Create a new user
router.post("/users", userControllers.createUser);

// @desc    Get all users
router.get("/users", userControllers.getUser);

// @desc    Update a user
router.put("/:id", userControllers.updateUser);

// @desc    Delete a user
router.delete("/:id", userControllers.deleteUser);

module.exports = router;
