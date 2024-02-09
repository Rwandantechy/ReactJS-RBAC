const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { hashPassword, comparePassword } = require("../utils/hashingPassword");
const { generateAuthToken, verifyAuthToken } = require("../utils/jwtAuth");
exports.register = async (req, res) => {
  try {
    // Destructure required fields from request body
    const { email, username, password, confirmPassword } = req.body;

    // Check if any field is empty
    if (!email || !username || !password || !confirmPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if username is at least 6 characters long
    if (username.length < 6) {
      return res
        .status(400)
        .json({ message: "Username must be at least 6 characters long" });
    }

    // Check if password is at least 6 characters long
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters long" });
    }

    // Check if password and confirmPassword match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // Check if user already exists with the given email
    const existingUserByEmail = await User.findOne({ email });
    if (existingUserByEmail) {
      return res
        .status(400)
        .json({ message: "User with this email already exists" });
    }

    // Check if the username already exists
    const existingUserByUsername = await User.findOne({ username });
    if (existingUserByUsername) {
      return res.status(400).json({ message: "Username already exists" });
    }

    // Hash the password
    const hashedPassword = await hashPassword(password);

    // Create a new user
    const newUser = new User({
      email,
      username,
      password: hashedPassword,
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    res.status(201).json({ message: "User has been created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }

    const isPasswordValid = await comparePassword(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const userData = {
      id: user._id,
      email: user.email,
      username: user.username,
      role: user.role,
    };

    const token = generateAuthToken(userData);
    return res.status(200).json({ role: user.role.toString(), token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
