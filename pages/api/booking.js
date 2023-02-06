const Tour = require('../../models/tourModel');

async function handler(req, res) {
  const tour = await Tour.findById(req.params.tourId);
}
