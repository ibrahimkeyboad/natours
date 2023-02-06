// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const Tour = require('../../../models/tourModel');
const connetDB = require('../../../utils/dbConnect');

export default async function handler(req, res) {
  try {
    connetDB();
    const tours = await Tour.find();
    // console.log(tours);

    res.status(200).send({ tours });
  } catch (error) {
    console.error(error.message);
  }
}
