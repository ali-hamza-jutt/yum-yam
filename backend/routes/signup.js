import User from '../models/user.js';
import passport from 'passport';

const signup = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  if (!email || !password || !firstName || !lastName) {
    return res.status(400).json({ message: 'Please provide all required fields' });
  }

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    const newUser = new User({ email, firstName, lastName });

    User.register(newUser, password, (err, user) => {
      if (err) {
        return res.status(500).json({ message: 'Error registering user' });
      }

      passport.authenticate('local')(req, res, () => {
        req.session.user = {
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
        };
        res.status(201).json({
          isAuthenticated: true,
          user: req.session.user,
        });
      });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating user' });
  }
};

export default signup;

