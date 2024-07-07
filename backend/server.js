import express from 'express';
import connectDB from './config/dbConfig.js'; // Corrected the path here
import signup from './routes/signup.js';
import cors from 'cors';

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies


const PORT = 5000;


// Connect to database
connectDB();

// Use routes
app.use('/signup', signup);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
