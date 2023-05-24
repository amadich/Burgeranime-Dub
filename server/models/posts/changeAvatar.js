const UserModel = require("../CreateUser");
const multer = require('multer');
const path = require('path');
const jwt = require("jsonwebtoken");
const changeAvatar = (app) => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/catalog/uploads/avatars/');
    },
    filename: function (req, file, cb) {
      const extension = path.extname(file.originalname);
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, uniqueSuffix + extension);
    }
  });

  const fileFilter = function (req, file, cb) {
    const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
    const fileExtension = path.extname(file.originalname).toLowerCase();
    if (allowedExtensions.includes(fileExtension)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only .jpg, .jpeg, .gif, and .png files are allowed.'), false);
    }
  };

  const upload = multer({
    storage: storage,
    fileFilter: fileFilter
  });

  app.post('/changeavatar', upload.single('file1'), async function (req, res) {
    try {
      console.log('Change Avatar endpoint accessed');
      console.log('req.file:', req.file);
      console.log('req.body:', req.body);

      const uploadedFile = req.file;
      const { email } = req.body;

      if (!uploadedFile || !email) {
        return res.status(400).json({ error: 'Missing file or email data', ok: 0 });
      }

      const user = await UserModel.findOne({ email });

      if (!user) {
        return res.status(404).json({ error: 'User not found', ok: 0 });
      }

      user.avatar = uploadedFile.filename;

      await user.save();

      const token = jwt.sign({User : user},"shhh");

      res.json({ token , user, message: 'Avatar uploaded successfully', ok: 1 });
    } catch (error) {
      console.error('Error uploading avatar:', error);
      res.status(500).json({ error: 'Internal server error', ok: 0 });
    }
  });
};

module.exports = changeAvatar;
