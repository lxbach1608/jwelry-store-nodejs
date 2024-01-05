const ColorSchema = require("../models/Color");
const SizeSchema = require("../models/Size");

class SiteController {
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
