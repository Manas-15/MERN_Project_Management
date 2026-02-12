const express = require("express");
const router = express.Router();
const projectControllers = require("../controllers/project-controller");
const authMiddleware = require("../middleware/auth-middleware");

// @desc    Create a new project
router.post("/projects", authMiddleware, projectControllers.createProject);

// @desc    Get all projects
router.get("/projects", authMiddleware, projectControllers.getProject);

// @desc    Get projects detail
router.get("/projects/:id", authMiddleware, projectControllers.getProjectDetail);

// @desc    Update a project
router.put("/projects/:id", authMiddleware, projectControllers.updateProject);

// @desc    Delete a project
router.delete("/projects/:id", authMiddleware, projectControllers.deleteProject);

module.exports = router;
