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

      return res.status(200).json({
        message: 'Login successful',
        isAuthenticated: true,
        sessionID: req.sessionID // Optionally include session ID in the response
      });
    });
  })(req, res, next);
};

export default login;
