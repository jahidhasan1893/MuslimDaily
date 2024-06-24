require('dotenv').config();

module.exports.getSignin = (req, res) => {
    res.render('adminAuth');
};

module.exports.postSignin = async (req, res) => {
    const { username, password } = req.body;

    try {
        if (username && password && username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
            return res.status(201).json({ success: 'Admin login successful'});
        } else {
            return res.status(400).json({ error: 'incorrect username or password' });
        }
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ error: 'An error occurred during sign-in' });
    }
};