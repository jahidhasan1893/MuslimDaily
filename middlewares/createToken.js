const jwt = require('jsonwebtoken');

const secretKey = process.env.SECRET_KEY;


const maxAge = 2629746000;

const createToken = (id)=>{
    return jwt.sign({id}, secretKey,{
        expiresIn: maxAge
    })
};

module.exports = createToken;