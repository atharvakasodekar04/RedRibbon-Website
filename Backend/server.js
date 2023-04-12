

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();
const PORT = "https://redribbon-backend.onrender.com";

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://atharvakasodekar:Atharvak123@cluster0.o3vlyyi.mongodb.net/Redribbon", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Successfully connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB", error);
  });


app.get('/api', require('./routes/index.js'))
// app.get('/api', require('./routes/index.js'))
app.use('/api', require('./routes/index.js'))

app.get('/', (req, res) => {
  res.send("hello world")
})
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
