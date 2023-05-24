const multer = require('multer');
const path = require('path');
const Anime = require("../CreateAnime");

const addeps = (app) => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/catalog/uploads/eps/'); // directory where uploaded files will be stored
    },
    filename: function (req, file, cb) {
      const extension = path.extname(file.originalname);
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, uniqueSuffix + extension); // unique file name with original extension
    }
  });

  const fileFilter = function (req, file, cb) {
    const allowedExtensions = ['.jpg', '.jpeg', '.png'];
    const fileExtension = path.extname(file.originalname).toLowerCase();
    if (allowedExtensions.includes(fileExtension)) {
      cb(null, true); // accept the file
    } else {
      cb(
        { message: 'Invalid file type. Only .jpg, .jpeg, and .png files are allowed.' },
        false
      ); // reject the file
    }
  };

  // Create a Multer instance with the updated storage configuration and file filter
  const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
      const allowedMimeTypes = ['image/jpeg', 'image/png'];
      if (allowedMimeTypes.includes(file.mimetype)) {
        cb(null, true); // accept the file!
      } else {
        cb(
          new Error('Invalid file type. Only JPEG and PNG images are allowed.'),
          false
        ); // reject the file
      }
    }
  });


  app.post('/addeps', upload.single('file1'), async function (req, res) {
          // Check if any Multer error occurred during file upload
          if (req.fileValidationError) {
            return res.status(400).json({ error: req.fileValidationError });
          }
        
          try {
            // Retrieve the name of the uploaded file and other form data
            const uploadedFile = req.file;
            const { title, nbeps , epsurl } = req.body;
        
            // Find the anime based on the title
            const anime = await Anime.findOne({ title });
        
            if (!anime) {
              return res.status(404).json({ error: 'Anime not found' , ok:0 });
            }
        
            // Create the episode object
            const episode = {
              title,
              nbrps: nbeps,
              epsimage: uploadedFile.filename,
              epsurl
            };
        
            // Check if the anime already has an "eps" field
            if (!anime.eps) {
              anime.eps = {}; // Initialize the "eps" field as an empty object if it doesn't exist
            }
        
            // Assign the episode to the corresponding key in the "eps" field
            anime.eps[nbeps] = episode;
        
            // Save the updated anime
            await anime.save();
        
            res.json({ episode, message: 'Episode added successfully' , ok : 1 });
          } catch (error) {
            // Handle the error as needed
            res.status(500).json({ error: 'Internal server error' , ok : 0 });
          }
    });
  

};

module.exports = addeps;
