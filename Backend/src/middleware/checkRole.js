const jwt = require('jsonwebtoken');
const { verifyAuthToken} = require('../utils/jwtAuth');

const checkRole = (role) => {
  return (req, res, next) => {
    try {
      const token = req.cookies.token || req.headers.authorization;
      if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      const decoded = verifyAuthToken(token);
      
      if (decoded.input.role !== role) {
        return res.status(403).json({ message: "Forbidden" });
      }
      next();
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
}

module.exports = checkRole;
