
const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');

router.get('/', restaurantController.getAllRestaurants);
router.get('/cuisine/:cuisine', restaurantController.getRestaurantsByCuisine);
router.get('/sort', restaurantController.getRestaurantsWithSorting);
router.get('/Delicatessen', restaurantController.getDelicatessenRestaurants);

module.exports = router;


