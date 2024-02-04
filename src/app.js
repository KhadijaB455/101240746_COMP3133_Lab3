
const express = require('express');
const mongoose = require('mongoose');
const restaurantRoutes = require('./routes/restaurants');

const app = express();
const PORT = 3000;


const DB_CONNECTION_STRING = "";//Empty because of github repo
mongoose.connect(DB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.use(express.json());


app.use('/restaurants', restaurantRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


