const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const mongoose = require("mongoose");
const userModel = require("../models/Users");
const fs = require("fs");
const bcrypt = require("bcrypt");

mongoose
  .connect("mongodb+srv://Gonzu:123dzese123@cluster0.ofwk9mi.mongodb.net/users")
  .catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `./public/images`);
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
});

router.post(
  "/user/createAccount",
  upload.fields([
    { name: "username", maxCount: 1 },
    { name: "password", maxCount: 1 },
    { name: "profilePicture", maxCount: 1 },
  ]),
  async (req, res) => {
    const { username, password } = req.body;
    const profilePicture = req.files["profilePicture"][0];

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      if (!profilePicture) {
        throw new Error(
          "Problem creating account: Profile picture is required"
        );
      }

      const imageBuffer = fs.readFileSync(profilePicture.path);

      try {
        const existingUser = await userModel.findOne({
          name: { $regex: new RegExp(username, "i") },
        });

        if (existingUser) {
          return res.status(202).json({ message: "Username is already taken" });
        }

        // Continue with the registration process

        const newUser = new userModel({
          name: username,
          password: hashedPassword,
          profilePicture: {
            data: imageBuffer,
            contentType: profilePicture.mimetype,
          },
          excersisesImage: null,
        });

        await newUser.save();

        fs.unlinkSync(profilePicture.path);

        return res
          .status(200)
          .json({ message: "Account created successfully" });
      } catch (error) {
        console.error("Error checking username availability:", error);
        return res.status(500).json({ error: "Internal server error" });
      }
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
);

router.post("/user/login", async (req, res) => {});

module.exports = router;
