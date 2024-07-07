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
      
      // Set a cookie with user information
      res.cookie('userInfo', JSON.stringify({
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName
      }), { 
        maxAge: 900000,    // Adjust expiration time
        httpOnly: true,    // Cookie accessible only via HTTP(S)
        secure: false,     // Set to true if using HTTPS
        sameSite: 'strict' // Specify the SameSite attribute
      });
      
      return res.status(200).json({ message: 'Login successful' });
    });
  })(req, res, next);
};

export default login;
