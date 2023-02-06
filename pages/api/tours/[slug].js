// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const Tour = require('../../../models/tourModel');
const Review = require('../../../models/reviewModel');
const connetDB = require('../../../utils/dbConnect');

export default async function handler(req, res) {
  try {
    const { slug } = req.query;
    // console.log(slug);
    connetDB();
    const tour = await Tour.findOne({ slug });
    // const reviews = await Review.find();
    const reviews = await Review.find({ tour: tour._id });
    console.log(reviews.length);

    res.status(200).json({ tour, reviews });
  } catch (error) {
    console.error(error.message);
  }
}
