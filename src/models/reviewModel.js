import mongoose from 'mongoose';

const { model, models, Schema } = mongoose;

const reviewSchema = new Schema(
  {
    review: {
      type: String,
      required: [true, 'Review must have content'],
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },

    tour: {
      type: Schema.Types.ObjectId,
      ref: 'Tour',
      required: [true, 'Review must be belong to a tour'],
    },
    user: {
      type: Schema.ObjectId,
      ref: 'User',
      required: [true, 'Review must belong to a user'],
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'tour',
    select: 'name',
  }).populate({
    path: 'user',
    select: 'name photo',
  });
  this.populate({
    path: 'user',
    select: 'name photo',
  });
  next();
});

const Review = models.Review || model('Review', reviewSchema);

export default Review;
