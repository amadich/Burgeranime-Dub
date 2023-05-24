const animeModel = require("../CreateAnime");

const geteps = (app) => {
   app.get( "/geteps" , async (req , res) => {
      try {
         const { serieID, epsID } = req.query;
         console.log("Serie Id :  ",serieID);
         console.log("EPS ID  : ",epsID);
         const animeSchema = await animeModel.findOne({ _id: serieID });

         if (!animeSchema) {
            res.json({ message: "Not Found This Anime" });
            return;
         }

         // Find the desired episode within the eps array
         const desiredEpisode = await animeSchema.eps.find((episode) => episode._id.toString() === epsID);

         if (desiredEpisode) {
            // Desired episode found
            console.log(desiredEpisode.title);
            res.json({ episode: desiredEpisode, animeSchema });
         } else {
            // Desired episode not found
            res.json({ message: "Episode not found" });
         }
      } catch (error) {
         console.log(error);
      }
   });
};

module.exports = geteps;
