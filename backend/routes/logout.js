const logout = (req, res) => {
  req.logout((err) => {
    if (err) {
      console.error('Error logging out:', err);
      return res.status(500).json({ message: 'Error logging out' });
    }

    req.session.destroy((err) => {
      if (err) {
        console.error('Error destroying session:', err);
        return res.status(500).json({ message: 'Error destroying session' });
      }

      res.clearCookie('connect.sid', { path: '/' });

      return res.status(200).json({ message: 'Logout successful' });
    });
  });
};

export default logout;
