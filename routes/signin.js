const router = require('express').Router();

const signinController = require('../controllers/signinController');

const verifyLoggedOut = require('../middlewares/verifyLoggedOut');


router.get('/',verifyLoggedOut, signinController.getSignin);

router.post('/', signinController.postSignin);

module.exports = router;
