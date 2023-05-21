const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../CreateUser");

const Login = (app) => {
   app.post('/signin' , async (req,res) => {
      
      try {
         const {email,pwd} = req.body;
         const User = await UserModel.findOne({email});
         !User && res.json({message: "Not Found This Email!",ok:0});
         const checkpwd = await bcrypt.compare(pwd,User.pwd);
         !checkpwd && res.json({message: "Email Or Password Incorrect",ok:4});

         token = jwt.sign({User,ok:1},"shhh");

         const decoded = jwt.verify(token, "shhh");
         // 'decoded' now contains the decoded payload of the JWT token
         console.log(decoded);

         res.json({token,User,ok:1});
      } catch (error) {
         console.log("Error in Signin Post",error);
      }

   })
}
module.exports  = Login