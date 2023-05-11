const multer = require('multer');
const path = require('path');

const uploadanimeimg = (app) => {
  const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, 'public/catalog/uploads/'); // directory where uploaded files will be stored
    },
    filename: function(req, file, cb) {
      const extension = path.extname(file.originalname);
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, uniqueSuffix + extension); // unique file name with original extension
    }
  });

  const fileFilter = function(req, file, cb) {
    const allowedExtensions = ['.jpg', '.jpeg', '.png'];
    const fileExtension = path.extname(file.originalname).toLowerCase();
    if (allowedExtensions.includes(fileExtension)) {
      cb(null, true); // accept the file
    } else {
      cb({ message: 'Invalid file type. Only .jpg, .jpeg, and .png files are allowed.' }, false); // reject the file
    }
  };

  // Create a Multer instance with the updated storage configuration and file filter
  const upload = multer({
    storage: storage,
    fileFilter: function(req, file, cb) {
      const allowedMimeTypes = ['image/jpeg', 'image/png'];
      if (allowedMimeTypes.includes(file.mimetype)) {
        cb(null, true); // accept the file
      } else {
        cb(new Error('Invalid file type. Only JPEG and PNG images are allowed.'), false); // reject the file
      }
    }
  });
  

  app.post('/uploadanimeimg', upload.fields([{ name: 'file1' }, { name: 'file2' }]), function(req, res) {
    // Check if any Multer error occurred during file upload
    if (req.fileValidationError) {
      return res.status(400).json({ error: req.fileValidationError });
    }

    // Retrieve the names of the uploaded files and send them back in the response
    const uploadedFiles = req.files;
    const file1Name = uploadedFiles['file1'][0].filename;
    const file2Name = uploadedFiles['file2'][0].filename;
    res.json({ file1Name, file2Name, ...req.body });
  });
};

module.exports = uploadanimeimg;
