const animeModel = require("../CreateAnime");

const getanimes = (app) => {
   app.get("/getanimes" , async (req,res) => {

      const mycatalog = await animeModel.find();
      res.status(200).json({mycatalog});
      
   })
}

module.exports = getanimes;