import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from "./routes/index"

const app = express();
const port = 8080;

const url = 'mongodb://127.0.0.1:27017/todomern';

app.use(cors());
app.use(routes)

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
