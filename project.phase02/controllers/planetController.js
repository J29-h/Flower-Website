const planetModel = require('../models/planetModel');

const planetController = {
  addPlanet: async (req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    console.log(req.file);
    const image = req.file ? req.file.originalname : null;
    console.log(image);
    
    try {
      const newPlanetId = await planetModel.addPlanetToDB(name, description, price, image);
      console.log(`New planet added with ID: ${newPlanetId}`);
      res.status(201).json({ id: newPlanetId });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getPlants: async (req, res) => {
    try {
      const plants = await planetModel.getPlantsFromDB();
  
      if (!plants) {
        console.error('Plants not found');
        if (res) {
          res.status(404).json({ error: 'No plants found' });
        } else {
          console.error('Error: res is undefined');
        }
      } else {
        console.log('Sending plants:', plants);
        if (res) {
          res.json(plants);
        } else {
          console.error('Error: res is undefined');
        }
      }
    } catch (error) {
      console.error(error);
      if (res && res.status) {
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        console.error('Error: res or res.status is undefined');
      }
    }
  },
  
  

};

module.exports = planetController;
