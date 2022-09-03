import express from "express";
import logger from 'morgan';
import tasks from "./routes/tasks.js";
const app = express();
app.use(logger('dev'));



app.use('/api/v1/tasks', tasks);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
