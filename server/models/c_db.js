const mongoose = require('mongoose');
const url_db = `mongodb+srv://amadich:Sxzv1bcL4ZqWkkTh@myburger.ak3ck8o.mongodb.net/burger`;
const url_db_local = `mongodb://127.0.0.1:27017/burger`;
// Connect to MongoDB
mongoose.connect(url_db_local, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

module.exports = mongoose;
