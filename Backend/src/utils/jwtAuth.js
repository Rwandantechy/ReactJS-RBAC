const jwt = require("jsonwebtoken");
const process = require("process");

// Helper function to generate JWT tokens with user data
const generateAuthToken = (input) => {
  const secretKey = process.env.JWT_SECRET;
  const expiresIn = process.env.JWT_EXPIRES_IN;

  return jwt.sign({ input }, secretKey, {
    expiresIn,
    algorithm: "HS256",
  });
};

// Helper function to verify JWT tokens
const verifyAuthToken = (token) => {
  try {
    const secretKey = process.env.JWT_SECRET;

    // Check if the token has Bearer at the start, and remove it if present
    if (token.startsWith("Bearer ")) {
      token = token.slice(7).trim();
    } else {
      token = token.trim();
    }

    // Verify the token
    const decoded = jwt.verify(token, secretKey, { algorithm: "HS256" });

    // Check if the decoded token is null or undefined
    if (!decoded) {
      throw new Error("Token verification failed");
    }

    // Check if the token has expired
    if (decoded.exp) {
      const currentTimestamp = Math.floor(Date.now() / 1000);
      if (decoded.exp < currentTimestamp) {
        throw new Error("Token has expired");
      }
    }

    return decoded;
  } catch (error) {
    throw new Error("Token verification failed");
  }
};

// Export the helper functions
module.exports = {
  generateAuthToken,
  verifyAuthToken,
};
