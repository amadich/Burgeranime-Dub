const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const mongoose = require('./models/c_db.js');

// models
const UserModel = require("./models/CreateUser.js");
const Register = require("./models/posts/register.js");
const Login = require("./models/posts/login.js");
const uploadanimeimg = require("./models/posts/uploadanimeimg.js");
const anime = require("./models/posts/anime.js");
const getanimes = require("./models/gets/getanimes.js");
const getseries = require("./models/gets/getseries.js");
const addeps = require("./models/posts/addeps.js");
const geteps = require("./models/gets/geteps.js");
const changeAvatar = require("./models/posts/changeAvatar.js");


app.use(express.json());
app.use(cors());
app.use(express.static("public"));

// gets

getanimes(app);
getseries(app);
geteps(app);
// posts
changeAvatar(app);
// Animes
uploadanimeimg(app);
addeps(app);
anime(app);

// Users
Register(app);
Login(app)
app.listen(PORT , () => {console.log(`Process Starting Port : ${PORT}`);})