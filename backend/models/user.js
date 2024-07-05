import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, // Ensures email uniqueness
    trim: true, // Removes leading/trailing whitespaces
    lowercase: true // Converts email to lowercase
  },
  password: {
    type: String,
    required: true,
    minlength: 6 // Enforces password length requirement
  },
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
  },
  // You can add additional fields like profile picture, bio, etc.
});

// Hash password before saving the user
userSchema.pre('save', async function (next) {
  const user = this;
  if (!user.isModified('password')) return next(); // Skip hashing if password hasn't changed

  try {
    const salt = await bcrypt.genSalt(10); // Generate a salt for password hashing
    const hash = await bcrypt.hash(user.password, salt); // Hash the password using the salt
    user.password = hash;
    next();
  } catch (err) {
    return next(err); // Pass any errors to the error handler
  }
});

const User = mongoose.model('User', userSchema);

export default User;

