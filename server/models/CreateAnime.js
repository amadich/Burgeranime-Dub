const { Schema, model } = require("mongoose");

const EpisodeSchema = Schema({
  title: { type: String },
  nbrps: { type: Number },
  epsimage: { type: String },
  epsurl : {type:String}
});

const AnimeSchema = Schema({
  title: { type: String },
  disc: { type: String },
  img1: { type: String },
  img2: { type: String },
  eps: [EpisodeSchema]
});

const AnimeModel = model("animes", AnimeSchema);

module.exports = AnimeModel;
