import express from "express";
import cors from "cors";
import connectToMongo from "./db/connectdb.js";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json("hello world");
});

const start = async () => {
  try {
    await connectToMongo(
      "mongodb+srv://DevDynamos:Adnan123456@cluster0.dvldvzp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    app.listen(port, () => {
      console.log(`Your app is running on ${port}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
