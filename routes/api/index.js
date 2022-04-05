const router = require('express').Router();
const thoughtRoutes = require('./thought-routes');
const userRoutes = require('./user-routes');



router.use('/User', userRoutes);
router.use('./Thought', thoughtRoutes);


module.exports = router