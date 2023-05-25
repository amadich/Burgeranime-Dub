const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../CreateUser');

const Login = (app) => {
  app.post('/signin', async (req, res) => {
    try {
      const { email, pwd } = req.body;
      const user = await UserModel.findOne({ email });
      console.log(pwd);
      if (!user) {
        return res.json({ message: 'Email not found', ok: 0 });
      }

      const isPasswordValid = await bcrypt.compare(pwd, user.pwd);

      if (!isPasswordValid) {
        return res.json({ message: 'Incorrect email or password', ok: 0 });
      }

      const token = jwt.sign({ User : user, ok: 1 }, 'shhh');

      const decoded = jwt.verify(token, 'shhh');
      console.log(decoded);

      res.json({ token, user, ok: 1 });
    } catch (error) {
      console.log('Error in Signin Post', error);
      res.status(500).json({ message: 'An error occurred. Please try again later.', ok: 0 });
    }
  });
};

module.exports = Login;
