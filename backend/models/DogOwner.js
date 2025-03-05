import mongoose from 'mongoose';

const DogSchema = new mongoose.Schema({
  name: String,
  breed: String,
  age: Number,
  weight: String,
  image: String,
});

const DogOwnerSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  dogs: [DogSchema], // Embedded array of dogs
});

const DogOwner = mongoose.model("DogOwner", DogOwnerSchema);

export default DogOwner;
