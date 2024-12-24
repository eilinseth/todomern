import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const port = 8080;

const url = 'mongodb://localhost:27017/todolist';

app.use(cors());

mongoose
  .connect(url)
  .then(() => {
    app.listen(port, () => {
      console.info(`app is listening to port ${port}`);
    });
  })
  .catch((error) => {
    throw error;
  });
