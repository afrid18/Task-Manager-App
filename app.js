import express from "express";
import logger from 'morgan';
import tasks from "./routes/tasks.js";
import connectDB from "./db/connect.js";
import dotenv from "dotenv";
import notFound from "./middleware/not-found.js";
const app = express();
app.use(logger('dev'));


// configuration
dotenv.config();

// Middleware
app.use(express.static('./public'));
app.use(express.json());


// Routes
app.use('/api/v1/tasks', tasks);

// server starting
const PORT = process.env.PORT || 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () =>
      console.log(`Listening on port ${PORT}`))
  } catch (error) {
    console.log(error);
  }
}

// Starting the server
start();
