import express from 'express';
import connectDB from './config/dbConfig.js';
import signup from './routes/signup.js';
import login from './routes/login.js';
import cors from 'cors';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import passport from 'passport';
import User from './models/user.js';
import cookieParser from 'cookie-parser';
import logout from './routes/logout.js';

const PORT = 5000;
const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true // This is crucial to allow cookies to be sent in CORS requests
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Connect to MongoDB
connectDB();

app.use(session({
  secret: 'our yummy recipe',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: 'mongodb://127.0.0.1:27017/yum-yam' }),
  cookie: {
    secure: false, // Set to true if using HTTPS
    httpOnly: true, // Ensure the cookie is accessible only by the web server
    maxAge: 1000 * 60 * 60 * 24, // 1 day
    sameSite: 'lax', // To help prevent CSRF attacks
  }
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use('/signup', signup);
app.use('/login', login);
app.use('/logout', logout);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
