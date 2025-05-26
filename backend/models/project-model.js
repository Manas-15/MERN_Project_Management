const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    start_date: {
      type: Date,
      required: true,
    },
    end_date: {
      type: Date,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt
    toJSON: { virtuals: true }, // Include virtuals in response
    toObject: { virtuals: true },
  }
);
// Define virtual populate for related tasks
projectSchema.virtual("tasklists", {
  ref: "Task", // The model to use
  localField: "_id", // Field on Project model
  foreignField: "project_id", // Field on Task model
});

// Virtual for task count
projectSchema.virtual("taskCount", {
  ref: "Task",
  localField: "_id",
  foreignField: "project_id",
  count: true, // This tells Mongoose to return a count instead of documents
});

module.exports = mongoose.model("Project", projectSchema);
