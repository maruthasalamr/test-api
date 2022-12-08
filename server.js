const express = require("express");
const bodyParser= require('body-parser');
const mongoose = require("mongoose");
const dbConfig = require("./config/db.config");
require('dotenv').config()

const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(express.json({ limit: '2048mb', extended: true }));
app.use(express.urlencoded({extended:true, limit:'150mb'})); 

mongoose.Promise = global.Promise;

mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch(err => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });


  require("./app/routes/routes.js")(app);

// listen for requests
app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});