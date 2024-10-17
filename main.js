import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
  credentials: true
}));

app.get('/load', (req, res) => {
  res.send('Gm class!');
});

app.listen(3000, () => {
  console.log('Started at 3000');
});