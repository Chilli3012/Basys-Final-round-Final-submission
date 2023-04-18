const express = require('express');
const app = express();
const connectDB = require('./db/connect.js');
const dotenv = require('dotenv')
const emrRoute = require('./routes/emr.js')
const cors = require('cors')
dotenv.config()


// middleware
app.use(cors());
app.use(express.json());




// routes


app.use('/emr',emrRoute)




const port = process.env.PORT || 3000;

const start = async () => {
  try {
    console.log(process.env.DATABASE_URL)
    await connectDB(process.env.DATABASE_URL);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();