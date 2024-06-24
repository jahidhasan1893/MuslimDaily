const User = require('../models/user');
const handleErrors = require('../middlewares/handleErrors');
const createToken = require('../middlewares/createToken');

const maxAge = 2629746000;


module.exports.getSignup = (req, res)=>{
    res.render('signup');
};

module.exports.postSignup = async (req, res)=>{
    const { username, password } = req.body;

    try{
        const user = await User.create({ username, password });
        try{
            console.log(user);
            const token = createToken(user._id);
            res.cookie('token', token, {maxAge: maxAge});
            res.status(201).json({ user: user._id });
        }catch(err){
            console.log(err);
        }
    }catch(err){
        const errors = handleErrors(err);
        console.log(errors);
        res.status(400).json(errors);
    }
};
