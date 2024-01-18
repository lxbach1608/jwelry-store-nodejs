module.exports = {
  multipleMongooseToObject: function (mongooses) {
    return mongooses.map((item) => item.toObject());
  },

  mongoosesToObject: function (mongoose) {
    return mongoose ? mongoose.toObject() : "";
  },
};
