const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = mongoose.model("User");

module.export = (req, res, next) => {
  const { authorization } = req.headers;
  // authorization === "Bearer asdfdgksdsfdgbnkm"
  if (!authorization) {
    return res.status(401).send({ error: "You must be logged in" });
  }

  const token = authorization.replace("Bearer", "");
};
