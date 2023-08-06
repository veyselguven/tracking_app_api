const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);

const mongoUri =
  "mongodb+srv://vgbasbaydar:veyselguven@cluster0.p1dlz3l.mongodb.net/";

mongoose.connect(mongoUri);

mongoose.connection.on("connected", () => {
  console.log("Connected to mongo instance");
});

mongoose.connection.on("error", (err) => {
  console.log("Error connection to mongo", err);
});

app.get("/", (req, res) => {
  res.send("Hi thereeee!");
});

app.listen(3000, () => {
  console.log("Listening on 3000");
});
