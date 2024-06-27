const router = require('express').Router();

const signupController = require('../controllers/signupController');

const verifyLoggedOut = require('../middlewares/verifyLoggedOut');


router.get('/',verifyLoggedOut, signupController.getSignup);

router.post('/', signupController.postSignup);

module.exports = router;