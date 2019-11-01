const express =  require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoute = require('./routes/user');
const profileRoute = require('./routes/profile');
const verify = require('./authentication/auth');

require('dotenv').config();

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use('/user', userRoute);
app.use('/cv', verify, profileRoute);

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};

mongoose.connect(process.env.MONGODB_URI, options, () => console.log('Connected to DB'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server Started'));