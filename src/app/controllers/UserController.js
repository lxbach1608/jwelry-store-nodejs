const UserSchema = require("../models/User");
const InformationSchema = require("../models/Information");

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

  // [GET] /users/:email/information
  async information(req, res) {
    const information = await InformationSchema.findOne({
      username: req.param,
    });

    res.json({ data: information });
  }

  // [POST] /users/store
  store(req, res) {
    const user = new UserSchema(req.body);
    user.save();

    res.status(201).json({ status: "create successfully" });
  }
}

module.exports = new UserController();
