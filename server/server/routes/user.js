const express = require('express');
const router = express.Router();

const { registerUser, loginUser } = require('../controller/user_controller');

router.post('/register', (req, res) => registerUser(req, res));
router.post('/login', (req, res) => loginUser(req, res));

module.exports = router;

// const { resgisterValid, loginValid } = require('../validation/user_validation');

// router.post('/register', async (req, res) => {
  
//   const { error } = resgisterValid(req.body);
//   if(error) return res.status(400).send(error.details[0].message);

//   const { user, exists, err } = await registerUser(req.body);

//   if(exists) return res.status(400).send('User Already Exists');
//   if(err) return res.status(400).send(err);

//   res.status(200).send(user);

// });

// router.post('/login', async (req, res) => {

//   const { error } = loginValid(req.body);
//   if(error) return res.status(400).send(error.details[0].message);

//   const { err, auth_token } = await loginUser(req.body);

//   if(err) return res.status(400).send(err);

//   res.header({auth_token}).status(200).send('Logged In');

// });
