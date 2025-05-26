const express = require("express");
const router = express.Router();
const projectControllers = require("../controllers/project-controller");

// @desc    Create a new project
router.post("/projects", projectControllers.createProject);

// @desc    Get all projects
router.get("/projects", projectControllers.getProject);

// @desc    Get projects detail
router.get("/projects/:id", projectControllers.getProjectDetail);

// @desc    Update a project
router.put("/:id", projectControllers.updateProject);

// @desc    Delete a project
router.delete("/:id", projectControllers.deleteProject);

module.exports = router;
