
require('dotenv').config(); 
require('express-async-errors');
const express = require('express');
const app = express();

const cors= require('cors')
const connectToMongo = require('./db/connectdb.js')
const Studentrouter = require('./routes/StrudentRouter.js')
const notFound = require('./middleware/NotFound.js')
const errorhandler = require('./middleware/ErrorHandler.js');
const cookieParser = require('cookie-parser');
const adminrouter = require('./routes/adminRoutes.js');
const jobsroute = require('./routes/jobsRoutes.js')



const port = 8000;

app.use(cors());
app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));

app.get("/", (req, res) => {
  res.json("hello world");
});

app.use('/api/v1',Studentrouter); 
app.use('/api/v1',adminrouter); 
app.use('/api/v1/jobs',jobsroute)



app.use(notFound);
app.use(errorhandler);


const start = async () => {
  try {
    await connectToMongo(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Your app is running on ${port}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
