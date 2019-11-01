const User = require('../model/User');
const cValid = require('../validation/cValidation');

const updateDetails = async (req, res) => {

  const user = await User.findById(req.user._id);

  if(!user) return res.status(404).send('user not found');

  const { error } = cValid(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    user.cv = req.body;
    const result = await user.save();
    res.send(result.cv);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }

}

const deleteResume = async (req, res) => {

  if(!user) return res.status(404).send('user not found');

  try {
    user.cv = req.body;
    const result = await user.save();
    res.send(result.cv);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }

}

const userDetails = async (req, res) => {

  if(!User.findById(req.user)) return res.status(404).send('user not found');
  
  try {
    const {name, email, sex, dob, cv} = await User.findById(req.user._id);
    res.status(200).send({name, email, sex, dob, cv});
    // res.status(200).send(cv);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }

}

module.exports = { userDetails, updateDetails, deleteResume };