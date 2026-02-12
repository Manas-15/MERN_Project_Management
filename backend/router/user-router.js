const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/user-controller");

//Create a new user
router.post("/users", userControllers.createUser);

//Get all users
router.get("/users", userControllers.getUser);

//Update a user
router.put("/:id", userControllers.updateUser);

//Delete a user
router.delete("/:id", userControllers.deleteUser);

module.exports = router;
