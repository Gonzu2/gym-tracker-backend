const jwt = require("jsonwebtoken");
const User = require("../models/Users");
const dotenv = require("dotenv").config();

const auth = async (req, res, next) => {
  let token;
  if (
    !req.headers.authorization ||
    !req.headers.authorization.startsWith("Bearer")
  ) {
    return res
      .status(401)
      .json({ message: "Unauthorized, no token or invalid token." });
  }

  token = req.headers.authorization.split(" ")[1];

  try {
    const decodedToken = jwt.verify(token, process.env.JWTSECRET);

    req.user = await User.findOne({ _id: decodedToken.id }).select("-password");

    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: err.message });
  }
};

module.exports = auth;
