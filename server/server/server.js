const express =  require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoute = require('./routes/user');
const profileRoute = require('./routes/profile');
const verify = require('./authentication/auth');

require('dotenv').config();

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());
app.use('/user', userRoute);
app.use('/resume', verify, profileRoute);

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};

const mongodbURI = `mongodb+srv://${process.env.USER}:${process.env.MONGODB_PASSWORD}@netjobs.jglqn.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`

mongoose.connect(mongodbURI, options);
mongoose.connection.on('connected', () => {
  console.log('connected to DB');
});

mongoose.connection.on('error', err => {
  console.log(`Error: ${err}`);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started on ${PORT}`));