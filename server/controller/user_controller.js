const User = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { resgisterValid, loginValid } = require('../validation/user_validation');

require('dotenv').config();

const registerUser = async (req, res) => {
  const { error } = resgisterValid(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const emailExists = await User.findOne({email: req.body.email});
  if(emailExists) return res.status(400).send('Email Already Exists');

  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(req.body.password, salt);

  try{
    const person = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPass,
      sex: req.body.sex,
      dob: req.body.dob
    });
    const user = await person.save();
    return res.status(200).send({_id: user._id});
  }catch(err){
    res.status(500).send(err);
  }

}

const loginUser = async (req, res) => {
  const { error } = loginValid(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = await User.findOne({email: req.body.email});
  if(!user) return res.status(400).send('Email or Password is invalid');

  const validPass = await bcrypt.compare(req.body.password, user.password);
  if(!validPass) return res.status(400).send('Email or Password is invalid');

  const token = jwt.sign({_id: user._id}, process.env.JWT_TOKEN);
  res.header('auth-token', token).status(200).send("Check Header for 'auth-token'");
}

module.exports = { registerUser, loginUser };

// const registerUser = async (info) => {

//   const exists = await User.findOne({email: info.email});
//   if(exists) return { exists };

//   const salt = await bcrypt.genSalt(10);
//   const hashedPass = await bcrypt.hash(info.password, salt);

//   try{
//     const person = new User({
//       name: info.name,
//       email: info.email,
//       password: hashedPass,
//       sex: info.sex,
//       dob: info.dob
//     });
//     const user = await person.save();
//     return { user };
//   }catch(err){
//     return { err };
//   }
  
// };

// const loginUser = async info => {

//   const user = await User.findOne({email: info.email});
//   if(!user) return { err: 'Email not found' };

//   const validPass = await bcrypt.compare(info.password, user.password);
//   if(!validPass) return { err: 'password dont match' };

//   const auth_token = jwt.sign({_id: user._id}, process.env.JWT_TOKEN);
//   return { auth_token };

// }