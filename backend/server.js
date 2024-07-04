import express from 'express';
import connectDB from './config/dbConfig.js'



const app = express();
const PORT = 5000;

// Connect to database
connectDB();


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
