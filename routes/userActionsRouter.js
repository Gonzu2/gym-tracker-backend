const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const userModel = require("../models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
const auth = require("../middleware/auth");

function assignToken(id) {
  return jwt.sign({ id }, process.env.JWTSECRET, { expiresIn: "1d" });
}

mongoose
  .connect("mongodb+srv://Gonzu:123dzese123@cluster0.ofwk9mi.mongodb.net/users")
  .catch((err) => console.log(err));

router.post("/createAccount", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
      const existingUser = await userModel.findOne({ name: username });

      if (existingUser) {
        return res.status(202).json({ message: "Username is already taken" });
      }

      const newUser = new userModel({
        name: username,
        password: hashedPassword,
        excersisesImage: null,
      });

      await newUser.save();

      return res.status(200).json({
        message: "Account created successfully",
        user: {
          name: newUser.name,
          id: newUser._id,
          token: assignToken(newUser._id),
        },
      });
    } catch (error) {
      console.error("Error checking username availability:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await userModel.findOne({ name: username });
    if (!user) {
      return res.status(401).json({ message: "Cannot find user" });
    }

    if (await bcrypt.compare(password, user.password)) {
      return res.status(200).json({
        message: "Successfully logged in",
        user: { name: user.name, id: user._id, token: assignToken(user._id) },
      });
    } else {
      return res.status(401).json({ message: "Invalid input" });
    }
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/getUser", auth, async (req, res) => {
  res.status(200).json({ user: req.user });
});

module.exports = router;
