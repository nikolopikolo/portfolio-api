const express = require("express");
const { user, projects, skills } = require("./data/portfolioData");

const app = express();
const PORT = process.env.PORT || 3000;

// Endpoint 1: Get user profile information
app.get("/api/user", (req, res) => {
  res.status(200).json({
    status: "success",
    data: user,
  });
});

// Endpoint 2: Get list of portfolio projects
app.get("/api/projects", (req, res) => {
  res.status(200).json({
    status: "success",
    count: projects.length,
    data: projects,
  });
});

// Endpoint 3: Get list of skills and proficiency levels
app.get("/api/skills", (req, res) => {
  res.status(200).json({
    status: "success",
    count: skills.length,
    data: skills,
  });
});

// Handle 404 errors for any unknown routes
app.use((req, res) => {
  res.status(404).json({
    status: "error",
    message: `Route ${req.originalUrl} not found`,
  });
});

// Global error-handling middleware for unexpected server errors
app.use((err, req, res, next) => {
  console.error("Server error:", err.message);
  res.status(err.statusCode || 500).json({
    status: "error",
    message: err.message || "Internal Server Error",
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Portfolio API server is running at http://localhost:${PORT}`);
});
