const {Schema , model} = require("mongoose");

const UserSchema = Schema({
   name : {type : String},
   email : {type : String},
   pwd : {type: String},
   ranks: {type : Object}
})

const UserModel = model("users",UserSchema);
module.exports = UserModel;