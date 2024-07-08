const logout=(req, res) => {
  req.logout(); // Passport's logout function
  req.session.destroy((err) => {
    if (err) {
      console.error('Error destroying session:', err);
      return res.status(500).json({ message: 'Server error' });
    }
    res.clearCookie('user'); // Clear the user cookie
    res.json({ message: 'Logout successful' });
  });
}

export default logout;
