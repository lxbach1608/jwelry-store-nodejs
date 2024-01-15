const jwt = require("../middlewares/JWTMiddleware");

const ColorSchema = require("../models/Color");
const SizeSchema = require("../models/Size");
const UserSchema = require("../models/User");
const InformationSchema = require("../models/Information");

const { mongoosesToObject } = require("../../utils/mongoose");

class SiteController {
  // [GET] /
  home(req, res) {
    res.render("home");
  }

  // [GET] /profile
  profile(req, res) {
    res.render("profile");
  }

  // [GET] /sites/colors
  async getColors(req, res, next) {
    const instance = await ColorSchema.find();

    res.json({ data: instance });
  }

  // [GET] /sites/sizes
  async getSizes(req, res, next) {
    const instance = await SizeSchema.find();

    res.json({ data: instance });
  }

  // [POST] /login
  async login(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserSchema.findOne({
      email,
      password,
    });

    if (user) {
      const information = await InformationSchema.findOne({
        email,
      });

      let data = {
        ...mongoosesToObject(information),
        roles: [1, 2, 3],
      };

      const token = jwt.create(data);

      res.cookie("jwt", token, {
        httpOnly: true,
        maxAge: +process.env.COOKIE_MAX_AGE,
      });

      res.status(200).json({ jwt: token, data });
    } else {
      res.status(400).json({
        data: "Account not found",
      });
    }
  }

  // [POST] sites/color
  storeColor(req, res, next) {
    const Color = new ColorSchema(req.body);
    Color.save();

    res.json("save");
  }

  // [POST] sites/size
  storeSize(req, res, next) {
    const Size = new SizeSchema(req.body);
    Size.save();

    res.json("save");
  }
}

module.exports = new SiteController();
