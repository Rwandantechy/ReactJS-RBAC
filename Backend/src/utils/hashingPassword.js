const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = process.env;
// hash the password
exports.hashPassword = async (password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, parseInt(SALT_ROUNDS));
    return hashedPassword;
  } catch (error) {
    console.error(error);
  }
};

//compare the password with the hashed password
exports.comparePassword = async (password, hashedPassword) => {
  try {
    const isPasswordValid = await bcrypt.compare(password, hashedPassword);
    return isPasswordValid;
  } catch (error) {
    console.error(error);
  }
};
