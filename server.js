const express = require('express');

const app = express();

const path = require('path');

const ejs = require('ejs');

const cookieParser = require('cookie-parser');

const verifyToken = require('./middlewares/verifyToken');

const getUser = require('./middlewares/getUser');

const PORT = process.env.PORT || 3000;


// Connect to the database
const connectDB = require('./config/db');
connectDB();


// set templat engine

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');


// use middlewares

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(cookieParser());


//routes

app.get('/', verifyToken, (req, res) => {
    res.render('home');
});
app.get('/quran', (req, res)=>{
    res.render('quran');
})
app.use('/signup', require('./routes/signup'));
app.use('/signin', require('./routes/signin'));
app.use('/signout', require('./routes/signout'));
app.use('/admin',require('./routes/adminAuth'));



app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});

