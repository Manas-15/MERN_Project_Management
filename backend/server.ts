require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const app = express();

// Middleware
app.use(express.json());

// All Routes
app.use("/api/v1", require("./router/auth-router"));
app.use("/api/v1", require("./router/user-router"));
app.use("/api/v1", require("./router/otp-router"));
app.use("/api/v1", require("./router/project-router"));
app.use("/api/v1", require("./router/task-router"));

const PORT = process.env.PORT || 5000;

// Connect Database
connectDB().then(() => {
  app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`)
  );
});
