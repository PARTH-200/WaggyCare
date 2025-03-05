import express from 'express'; // Use this line for ES modules
import DogWalker from '../models/DogWalker.js';

const router = express.Router(); // This is now correctly initialized

// Create Dog Walker
router.post('/', async (req, res) => {
  try {
    const walker = req.body
    //const newWalker = new DogWalker(req.body);
    const savedWalker = await DogWalker.create(walker)
    console.log("Status",savedWalker)
    res.status(201).json(savedWalker);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get All Dog Walkers
router.get('/', async (req, res) => {
  try {
    const walkers = await DogWalker.find();
    res.status(200).json(walkers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get Single Dog Walker by ID
router.get('/:id', async (req, res) => {
  try {
    const walker = await DogWalker.findById(req.params.id);
    if (!walker) return res.status(404).json({ message: 'Walker not found' });
    res.status(200).json(walker);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update Dog Walker
// router.put('/:id', async (req, res) => {
//   try {
//     const updatedWalker = await DogWalker.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.status(200).json(updatedWalker);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// Update Dog Walker Profile
router.put('/:id', async (req, res) => {
  try {
      const updatedWalker = await DogWalker.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedWalker);
  } catch (error) {
      res.status(500).json({ error: "Error updating profile" });
  }
});


// Delete Dog Walker
router.delete('/:id', async (req, res) => {
  try {
    await DogWalker.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Dog walker deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
