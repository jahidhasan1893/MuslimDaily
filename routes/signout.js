const router = require('express').Router();

const signoutController = require('../controllers/signoutController');

const verifyLoggedOut = require('../middlewares/verifyLoggedOut');


router.get('/', signoutController.getSignout);


module.exports = router;