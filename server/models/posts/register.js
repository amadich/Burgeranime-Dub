const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../CreateUser");

const Register = (app) => {
   app.post("/createuser" , async (req,res) => {
      
      try {
         const {name,email,pwd} = req.body;
         const Users = await UserModel.findOne({email});
         Users ? res.json({message:  'This Email exist ,Choise another one!',ok: 0}) : keyme = "next";

         if (keyme == "next") {
            const hashpwd = await bcrypt.hashSync(pwd,10);
            const Account = new UserModel({name,email,pwd:hashpwd, avatar : "demo.png" , ranks: {vip: 0 , admin : 0 , demo : 1}});
            await Account.save();

            

            const User = {
               
               email : email,
               name : name,
               avatar : "demo.png",
               ranks: {vip: 0 , admin : 0 , demo : 1}
               
            };

            const token = jwt.sign({User,ok:1},"shhh");

            res.json({token,User,ok:1});
         }

      } catch (error) {
         console.log( "Error IN Register POST : ",error);
      }

   })
}
module.exports = Register;