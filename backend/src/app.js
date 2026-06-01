require("dotenv").config();

const express = require("express");
const cors = require("cors");

const taskRoutes = require("./routes/taskRoutes");

const authRoutes = require("./routes/authRoutes");



const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Primetrade API Running",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});