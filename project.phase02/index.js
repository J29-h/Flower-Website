const express = require('express');
const bodyParser = require('body-parser');
const planetRoutes = require('./routes/planetRoutes');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 7500;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use(planetRoutes);
app.get('/login', (req, res) => {
  const loginPath = path.join(__dirname, 'public', 'login.html');
  res.sendFile(loginPath);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
