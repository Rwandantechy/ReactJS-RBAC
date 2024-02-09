const express = require('express');
const checkRole = require('./middleware/checkRole');
const router = express.Router();

const morgan = require('morgan');
// Middleware for logging requests (verbose mode)
router.use(morgan('dev'));

// Routes
router.use('/api/auth', require('./routes/authRoutes'));
router.get('/api/admin', checkRole('admin'), (req, res) => {
    res.json({ message: 'Welcome, admin!' });
});

module.exports = router;

