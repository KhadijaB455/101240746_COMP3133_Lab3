
const Restaurant = require('../models/restaurant');

const getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getRestaurantsByCuisine = async (req, res) => {
  const cuisine = req.params.cuisine;

  try {
    const restaurants = await Restaurant.find({ cuisine });
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getRestaurantsWithSorting = async (req, res) => {
  const sortBy = req.query.sortBy || 'ASC';

  try {
    const sortOrder = sortBy === 'DESC' ? -1 : 1;
    const restaurants = await Restaurant.find().sort({ restaurant_id: sortOrder });
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getDelicatessenRestaurants = async (req, res) => {
    try {
      const restaurants = await Restaurant.find({
        cuisine: 'Delicatessen',
        city: { $ne: 'Brooklyn' },
      })
        .select({ cuisines: 1, name: 1, city: 1, _id: 0 })
        .sort({ name: 'asc' }); 
  
      res.json(restaurants);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  

module.exports = {
  getAllRestaurants,
  getRestaurantsByCuisine,
  getRestaurantsWithSorting,
  getDelicatessenRestaurants
};
