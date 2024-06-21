const express = require('express');
const router = express.Router();
const planetController = require('../controllers/planetController');
const contactController = require('../controllers/contactController');
const userController = require('../controllers/userController');

const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: path.join(__dirname, '../public/uploads/'),
  filename: (req, file, cb) => {
    const originalname = file.originalname;
    cb(null, originalname);
  },
});


const upload = multer({ storage: storage });

router.post('/add', upload.single('image_plant'), planetController.addPlanet);


router.get('/plants', planetController.getPlants);


router.get('/home', async (req, res) => {
  try {
    const plants = await planetController.getPlants();
    res.render('home.html', { plants });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
router.get('/messages', contactController.getAllMessages);
router.get('/msg', async (req, res) => {
  try {
    const messages = await contactController.getAllMessages();
    const filePath = path.join(__dirname, '../public', 'mesaages.html'); 
    res.sendFile(filePath);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});




router.post('/contact', contactController.submitContactForm, (req, res) => {
  
  const indexPath = path.join(__dirname, '../public', 'contact.html');
  res.sendFile(indexPath);
});

router.get('/addplant', (req, res) => {
  const indexPath = path.join(__dirname, '../public', 'add.html');
  res.sendFile(indexPath);
});


router.post('/login', userController.login);
router.post('/register', userController.register);
module.exports = router;
