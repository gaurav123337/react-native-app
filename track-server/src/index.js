require('./models/Users');
require('./models/Track');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes/trackRoutes');
const requireAuth = require('./middlewares/requireAuth');

const app = express();
const PORT = '3000';

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Content-Type', 'application/json');

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT', 'POST', 'PATCH',
'DELETE', 'GET');
    return res.status(200).json({});
  }
  next();
});

app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

const mongoUri = 'mongodb+srv://root:root@cluster0.qoljq.mongodb.net/tracker-server?retryWrites=true&w=majority';
mongoose.connect(mongoUri);
mongoose.connection.on('connected', () => {
  console.log('Connected to mongoose');
});
mongoose.connection.on('error', (err) => {
  console.error('ErrorConnected to mongoose', err);
});

app.get('/', requireAuth, (req, res) => {

  res.send(`Your email: ${req.user.email}`);
});

app.listen(PORT, () => {
  console.log('Server running' + PORT);
})
