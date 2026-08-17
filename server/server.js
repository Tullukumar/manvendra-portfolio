const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

/* =========================
    MIDDLEWARE
========================= */

app.use(cors());
app.use(express.json());

const visitorRoutes = require("./routes/visitorRoutes");

app.use("/api/visitors", visitorRoutes);




/* =========================
   MONGODB CONNECTION
========================= */

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
  });


/* =========================
    TEST ROUTE
========================= */

app.get("/", (req, res) => {
  res.json({
    message: "Portfolio Visitor API is running 🚀",
  });
});


/* =========================
    START SERVER
========================= */

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});