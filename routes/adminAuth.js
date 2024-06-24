const router = require('express').Router();

const adminAuthController = require('../controllers/adminAuthController')


router.get('/', adminAuthController.getSignin);

router.post('/', adminAuthController.postSignin);

router.get('/dashboard', (req, res)=>{
    res.render('admin')
})


module.exports = router;
