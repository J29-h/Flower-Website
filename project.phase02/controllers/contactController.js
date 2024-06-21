const contactModel = require('../models/contactModel');

const path = require('path');


const contactController = {
  submitContactForm: async (req, res) => {
    const { name, email, subject, message } = req.body;
console.log(req.body);
    try {
      const newContactId = await contactModel.submitContactForm(name, email, subject, message);
      console.log(`New contact form submitted with ID: ${newContactId}`);
    res.redirect('/contact.html');

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
   getAllMessages: async (req, res) => {
    try {
      const messages = await contactModel.getAllMessages();

      if (!messages) {
        console.error('Messages not found');
        if (res && res.status) {
          res.status(404).json({ error: 'No messages found' });
        } else {
          console.error('Error: res or res.status is undefined');
        }
      } else {
        console.log('Sending messages:', messages);
        if (res) {
          res.json({ messages });
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

module.exports = contactController;
