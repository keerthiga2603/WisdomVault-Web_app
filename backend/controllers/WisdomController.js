const Wisdom = require("../models/Wisdom");

// CREATE
exports.createWisdom = async (req, res) => {
  try {
    const newWisdom = new Wisdom(req.body);
    const saved = await newWisdom.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET ALL
exports.getAllWisdom = async (req, res) => {
  try {
    const data = await Wisdom.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET BY ID
exports.getWisdomById = async (req, res) => {
  try {
    const item = await Wisdom.findById(req.params.id);
    if (!item) return res.status(404).json({ message: "Not found" });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE
exports.updateWisdom = async (req, res) => {
  try {
    const updated = await Wisdom.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE
exports.deleteWisdom = async (req, res) => {
  try {
    await Wisdom.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};