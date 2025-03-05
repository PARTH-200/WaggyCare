import express from 'express';
import DogOwner from '../models/DogOwner.js';

const router = express.Router();

// POST: Add a new dog owner
router.post("/", async (req, res) => {
  try {
    const newOwner = new DogOwner(req.body);
    const savedOwner = await newOwner.save();
    res.status(201).json(savedOwner);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET: Fetch all dog owners
router.get("/", async (req, res) => {
  try {
    const owners = await DogOwner.find();
    res.status(200).json(owners);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
