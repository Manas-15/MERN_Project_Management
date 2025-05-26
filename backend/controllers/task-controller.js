const Task = require("../models/task-model");

const createTask = async (req, res) => {
  try {
    const { project_id, task_title, start_date, end_date } = req.body;

    const taskExist = await Task.findOne({ task_title });

    if (taskExist) {
      return res.status(400).json({ msg: "Task already exist" });
    }

    const data = await Task.create({
      project_id,
      task_title,
      start_date,
      end_date,
    });

    res.status(200).json({ data });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getTask = async (req, res) => {
  try {
    const { project_id } = req.query;
    const tasks = project_id
      ? await Task.find({ project_id })
      : await Task.find();
    res.status(200).send({ data: tasks });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const getTaskDetail = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }
    res.status(200).json({ data: task });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // return updated document
    );
    res.json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createTask,
  getTask,
  getTaskDetail,
  updateTask,
  deleteTask,
};
