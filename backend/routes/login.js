import passport from 'passport';


const login = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }

      // Set secure cookie (if using HTTPS) and httpOnly for security
      res.cookie('user', JSON.stringify({
        email: user.email,
        name: user.firstName + user.lastName,
      }), {
        maxAge: 1000 * 60 * 60 * 24, // 1 day
        httpOnly: true,
        secure: false // Set to true if using HTTPS (recommended)
      });

      return res.status(200).json({
        message: 'Login successful',
        isAuthenticated: true
      });
    });
  })(req, res, next);
};

// ... other routes and app.listen

export default login;