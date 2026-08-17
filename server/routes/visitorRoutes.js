const express = require("express");
const Visitor = require("../models/Visitor");

const router = express.Router();

// GET current visitor count
router.get("/count", async (req, res) => {
  try {
    let visitor = await Visitor.findOne();

    if (!visitor) {
      visitor = await Visitor.create({
        count: 0,
      });
    }

    res.json({
      count: visitor.count,
    });
  } catch (error) {
    console.error("COUNT ERROR:", error);

    res.status(500).json({
      message: "Failed to get visitor count",
    });
  }
});

// POST a new visit
router.post("/visit", async (req, res) => {
  try {
    let visitor = await Visitor.findOne();

    if (!visitor) {
      visitor = await Visitor.create({
        count: 1,
      });
    } else {
      visitor.count += 1;
      await visitor.save();
    }

    res.json({
      count: visitor.count,
    });
  } catch (error) {
    console.error("VISIT ERROR:", error);

    res.status(500).json({
      message: "Failed to record visitor",
    });
  }
});

module.exports = router;