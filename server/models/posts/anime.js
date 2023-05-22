const animeModel = require("../CreateAnime");

const anime = (app) => {
   app.post("/createanime" , async (req, res) => {
      const { title, disc, img1, img2 } = req.body;

      const checkanime = await animeModel.findOne({ title });
      if (checkanime) {
         res.json({ mssg: "This Title already exists, please choose another one!",ok:0 });
      } else {
         // Code for creating the anime goes here
         const myanime = await new animeModel({
            title,
            disc,
            img1,
            img2,
            eps: [
              {
                title: "No, Episodes Now!",
                nbrps: 1,
                epsimage: "demo-image.jpg",
                epsurl : ""
              }
            ]
          }).save();
          
          
          
          
         res.status(200).json({mssg: "ANIME CREATE SUCCESSFUL!!",ok:1});
      }
   });
};

module.exports = anime;
