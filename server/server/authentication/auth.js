const jwt = require('jsonwebtoken');

require('dotenv').config();

const authenticate = (req, res, next) => {
  
  const token = req.header('auth_token');
  if(!token) return res.status(401).send({error: 'Access Denied'});

  try {
    const verified = jwt.verify(token, process.env.JWT_TOKEN);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).send({error: 'Invalid Token'});
  }

}

module.exports = authenticate;