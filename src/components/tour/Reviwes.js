import Image from 'next/image';
import React, { useState } from 'react';

function Reviwes({ reviews }) {
  const [loading, setLoading] = useState(true);

  return (
    <section className='section-reviews'>
      <div className='reviews'>
        {reviews?.map((review) => (
          <div key={review._id} className='reviews__card'>
            <div className='reviews__avatar'>
              <figure className='reviews__avatar-img'>
                <Image
                  priority
                  height={45}
                  width={45}
                  src={review.user.photo}
                  alt={review.user.name}
                  className={` ${
                    loading ? 'blur-2xl grayscale' : 'blur-0 grayscale-0'
                  }`}
                  onLoadingComplete={() => setLoading(false)}
                />
              </figure>
              <h6 className='reviews__user'>{review.user.name}</h6>
            </div>
            <p className='reviews__text'>{review.review}</p>
            <div className='reviews__rating'>
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className={`reviews__star reviews__star--${
                    review.rating >= star ? 'active' : 'inactive'
                  }`}>
                  <use xlinkHref='/img/icons.svg#icon-star'></use>
                </svg>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviwes;
