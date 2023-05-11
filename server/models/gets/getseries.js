const animeModel = require("../CreateAnime");

const getseries = (app) => {
   app.get("/getseries" , async (req, res) => {
         const { serieID }  = req.query;
         console.log(serieID);
         const anime = await animeModel.findOne({_id:serieID});
         res.status(200).json({anime});
   })
}
module.exports = getseries;