const mongoose = require('mongoose');
const url_db_local = `mongodb://127.0.0.1:27017`;
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
