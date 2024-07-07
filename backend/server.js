import express from 'express';
import connectDB from './config/dbConfig.js';
import signup from './routes/signup.js';
import login from './routes/login.js';
import cors from 'cors';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import passport from 'passport';
import User from './models/user.js';

const PORT = 5000;
const app = express();

app.use(cors({ origin: 'http://localhost:3000', credentials: true })); // Enable credentials for CORS
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
connectDB();

app.use(session({
  secret: 'our yummy recipe',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: 'mongodb://127.0.0.1:27017/yum-yam' }), // Use default options for MongoStore
  cookie: { secure: false }
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use('/signup', signup);
app.use('/login', login);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
