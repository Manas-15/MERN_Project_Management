const Project = require("../models/project-model");

const createProject = async (req, res) => {
  try {
    const { title, start_date, end_date } = req.body;

    const projectExist = await Project.findOne({ title });

    if (projectExist) {
      return res.status(400).json({ msg: "Project already exist" });
    }

    const data = await Project.create({
      title,
      start_date,
      end_date,
    });

    res.status(200).json({ data });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getProject = async (req, res) => {
  try {
    const projects = await Project.find()
      .populate("tasklists")
      .populate("taskCount");
    res.status(200).json({ data: projects });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const getProjectDetail = async (req, res) => {
  try {
    const projects = await Project.findById(req.params.id);
    res.status(200).send({ data: projects });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // return updated document
    );
    res.json(project);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteProject = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: "Project deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createProject,
  getProject,
  getProjectDetail,
  updateProject,
  deleteProject,
};
