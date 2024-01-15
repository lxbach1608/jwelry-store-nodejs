const jwt = require("jsonwebtoken");
require("dotenv").config();

const create = (data) => {
  const payload = data;
  const secret = process.env.JWT_SECRET;
  const expiresIn = process.env.JWT_EXPIRATION;

  const token = jwt.sign({ data: payload }, secret, {
    expiresIn: "1h",
  });

  return token;
};

const verify = (token) => {
  const secret = process.env.JWT_SECRET;

  let decoded = null;

  try {
    decoded = jwt.verify(token, secret);
  } catch (err) {
    console.log("JWT =>>> ", err);
  }

  return decoded;
};

// [GET] /checkExistCookie
const checkExistCookie = (req, res, next) => {
  const token = req.cookies.jwt;

  const data = verify(token);

  res.status(200).json({
    data,
  });
};

// [GET] /logout
const logout = (req, res) => {
  res.clearCookie("jwt");
  res.end();
};

module.exports = { create, verify, checkExistCookie, logout };
