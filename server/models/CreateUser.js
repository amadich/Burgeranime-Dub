const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  name: { type: String },
  email: { type: String },
  pwd: { type: String },
  avatar: { type: String },
  ranks: { type: Object }
});

const UserModel = model("User", UserSchema);

module.exports = UserModel;
