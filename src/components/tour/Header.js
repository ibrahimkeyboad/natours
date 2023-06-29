import Image from 'next/image';
import { useState } from 'react';

function HeaderTour({ tour }) {
  const [loading, setLoading] = useState(true);

  return (
    <section className='section-header'>
      <div className='header__hero'>
        <div className='header__hero-overlay'></div>
        <figure className='header__hero-img'>
          <Image
            fill
            priority
            src={tour.imageCover}
            alt='tour'
            className={` ${
              loading ? 'blur-2xl grayscale' : 'blur-0 grayscale-0'
            }`}
            onLoadingComplete={() => setLoading(false)}
          />
        </figure>
      </div>

      <div className='heading-box'>
        <h1 className='heading-primary'>
          <span>
            {tour?.name} <br />
            Tour
          </span>
        </h1>
        <div className='heading-box__group'>
          <div className='heading-box__detail'>
            <svg className='heading-box__icon'>
              <use xlinkHref='/img/icons.svg#icon-clock'></use>
            </svg>
            <span className='heading-box__text'>{tour?.duration} days</span>
          </div>
          <div className='heading-box__detail'>
            <svg className='heading-box__icon'>
              <use xlinkHref='/img/icons.svg#icon-map-pin'></use>
            </svg>
            <span className='heading-box__text'>
              {tour?.startLocation.description}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeaderTour;
