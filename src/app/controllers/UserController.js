const UserSchema = require("../models/User");
const RoleSchema = require("../models/Role");
const InformationSchema = require("../models/Information");
const jwt = require("../middlewares/JWTMiddleware");

const { mongoosesToObject } = require("../../utils/mongoose");

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

  // [put] /users/information/:email/update
  async updateInformation(req, res) {
    const email = req.params;

    const result = await InformationSchema.findOneAndUpdate(email, req.body, {
      new: true,
    });

    const data = mongoosesToObject(result);

    delete data._id;

    const token = jwt.create(data);

    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: +process.env.COOKIE_MAX_AGE,
    });

    res.status(200).json({ data });
  }
}

module.exports = new UserController();
