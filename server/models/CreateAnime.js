const {Schema , model} = require("mongoose");

const AnimeSchema = Schema({
   title: {type: String},
   disc: {type: String},
   img1: {type: String},
   img2: {type: String},
   eps: {type: Object}
})
const animeModel = model("animes",AnimeSchema);
module.exports = animeModel;