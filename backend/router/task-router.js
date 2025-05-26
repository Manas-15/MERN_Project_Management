const express = require("express");
const router = express.Router();
const taskControllers = require("../controllers/task-controller");

// @desc    Create a new task
router.post("/tasks", taskControllers.createTask);

// @desc    Get all tasks
router.get("/tasks", taskControllers.getTask);

// @desc    Get tasks detail
router.get("/tasks/:id", taskControllers.getTaskDetail);

// @desc    Update a task
router.put("/:id", taskControllers.updateTask);

// @desc    Delete a task
router.delete("/:id", taskControllers.deleteTask);

module.exports = router;
