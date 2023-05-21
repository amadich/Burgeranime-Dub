const animeModel = require("../CreateAnime");

const getseries = (app) => {
  app.get("/getseries", async (req, res) => {
    try {
      const { serieID } = req.query;
      console.log(serieID);
      const anime = await animeModel.findOne({ _id: serieID });

      if (!anime) {
        return res.status(404).json({ error: "Anime not found" });
      }

      res.status(200).json({ anime });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
};

module.exports = getseries;
