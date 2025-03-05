import mongoose from 'mongoose';

const dogWalkerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  photo: { type: String, default: '/images/default.jpg' },
  bio: { type: String, required: true },
  experience: { type: Number, required: true }, // 🔥 Fixed: Changed to Number
  certifications: { type: String, required: true },
  pricing: { type: String, required: true },
  availability: { type: String, required: true },
  rating: { type: Number, default: 0 },
  specialties: [{ type: String }]
}, { timestamps: true });

const DogWalker = mongoose.model('DogWalker', dogWalkerSchema);
export default DogWalker;
