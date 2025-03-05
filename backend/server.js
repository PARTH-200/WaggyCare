import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import dogWalkerRoutes from './routes/dogWalkerRoutes.js'; // Existing dog walker routes


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/dogwalkers', dogWalkerRoutes); // Existing route

// MongoDB Connection
console.log(process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB Connection Error:', err));

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
