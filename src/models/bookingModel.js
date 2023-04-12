import { Schema, models, model } from 'mongoose';

const bookingSchema = new Schema(
  {
    tour: {
      type: Schema.Types.ObjectId,
      ref: 'Tour',
      required: [true, 'Booking must have a tour'],
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Booking must have belong to a user'],
    },
    price: {
      type: Number,
      required: [true, 'Booking must have a price'],
    },
    paid: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

bookingSchema.pre(/^find/, function (next) {
  this.populate('user').populate({
    path: 'tour',
    select: 'name',
  });
});

const Booking = models.Booking || model('Booking', bookingSchema);

export default Booking;
