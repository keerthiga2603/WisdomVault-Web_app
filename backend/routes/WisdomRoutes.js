const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const Wisdom = require("../models/Wisdom"); // ✅ ADD THIS


const {
  createWisdom,
  getAllWisdom,
  getWisdomById,
  updateWisdom,
  deleteWisdom,
} = require("../controllers/wisdomController");

// ✅ SEARCH ROUTE MUST COME BEFORE :id
router.get("/search", async (req, res) => {
  const query = req.query.q || "";

  try {
    const results = await Wisdom.find({
      status: "approved",
      description: { $regex: query, $options: "i" }
    });

    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/", upload.single("audio"), async (req, res) => {
  try {
    const newData = {
      ...req.body,
      audio: req.file ? `/uploads/${req.file.filename}` : null,
    };

    const wisdom = new Wisdom(newData);
    await wisdom.save();

    res.json(wisdom);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.get("/", getAllWisdom);

// ⚠️ KEEP THIS LAST
router.get("/:id", getWisdomById);

router.put("/:id", updateWisdom);
router.delete("/:id", deleteWisdom);

module.exports = router;