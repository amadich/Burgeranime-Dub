const mongoose = require('mongoose');
const url_db = process.env.MONGO_NET;
// Connect to MongoDB
mongoose.connect(url_db, {
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
