const UserSchema = require("../models/User");
const RoleSchema = require("../models/Role");
const InformationSchema = require("../models/Information");
const jwt = require("../middlewares/JWTMiddleware");

class UserController {
  // [POST] /users/user
  async index(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserSchema.findOne({
      email,
      password,
    });

    if (user) {
      res.status(200).json({ data: "đăng nhập thành công" });
    } else {
      res.status(401).json({ data: "đăng nhập thất bại" });
    }
  }

  // [POST] /users/store
  store(req, res) {
    const user = new UserSchema(req.body);
    user.save();

    res.status(201).json({ status: "create successfully" });
  }

  // [GET] /users/information
  async information(req, res) {
    const token = req.cookies.jwt;

    const data = jwt.verify(token);

    if (data) {
      res.json({ data: information });
    } else {
      res.json({ data: null });
    }
  }
}

module.exports = new UserController();
