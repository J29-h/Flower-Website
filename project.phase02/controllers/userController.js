const userModel = require('../models/userModel');

// Login
async function login(req, res) {
  const { username, password } = req.body;

  try {
    const user = await userModel.findOne(username, password);

    if (user) {
      res.redirect('/home.html');
    } else {
      res.redirect('/?registerStatus=error&message=Invalid username or password');
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
}

// Register
async function register(req, res) {
  username=req.body.regUsername;
  password=req.body.regPassword;
  try {
    // Check if the username already exists
    const existingUser = await userModel.checkUsernameExists(username);

    if (existingUser) {
      // Redirect to login page with error message
      return res.redirect('/?registerStatus=error&message=Username already exists');
    } else {
      await userModel.create(username, password);

      return res.redirect('/?registerStatus=success&message=Registration successful');
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
}
module.exports = {
  login,
  register,
};
