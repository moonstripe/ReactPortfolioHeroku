const router = require('express').Router();
const contactRoutes = require('./contactRoutes');
const writingRoutes = require('./writingRoutes')

// Setup your routes for /api/something here
// This line of code makes it so that /api/fweets is prepended to fweetRoutes
// example route.use('/myRoute', myRoutes);

// // This line of code makes it so that /api/logins is prepended to loginRoutes
router.use('/contact', contactRoutes);
router.use('/writing', writingRoutes);
// // This line of code makes it so that /api/users is prepended to userRoutes
// router.use('/users', userRoutes);

module.exports = router;
