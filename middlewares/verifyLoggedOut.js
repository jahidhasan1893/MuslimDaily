require('dotenv').config();

const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY;



const verifyLoggedOut = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    console.log('token not found');
    next();
  } else {
    jwt.verify(token, secretKey, (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        next();
      } else {
        res.redirect('/');
      }
    });
  }
};


module.exports = verifyLoggedOut;