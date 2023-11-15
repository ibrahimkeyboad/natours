import Image from 'next/image';
import { useState } from 'react';

function DescriptionTour({ tour }) {
  const [loading, setLoading] = useState(true);
  const date = new Date(tour.startDates[0]).toLocaleString('en-us', {
    month: 'long',
    year: 'numeric',
  });

  const items = tour?.description.split('\n');

  return (
    <section className='section-description'>
      <div className='overview-box'>
        <div>
          <div className='overview-box__group'>
            <h2 className='heading-secondary ma-bt-lg'>Quick facts</h2>
            <div className='overview-box__detail'>
              <svg className='overview-box__icon'>
                <use xlinkHref='/img/icons.svg#icon-calendar'></use>
              </svg>
              <span className='overview-box__label'>Next date</span>
              <span className='overview-box__text'>{date}</span>
            </div>
            <div className='overview-box__detail'>
              <svg className='overview-box__icon'>
                <use xlinkHref='/img/icons.svg#icon-trending-up'></use>
              </svg>
              <span className='overview-box__label'>{tour?.difficulty}</span>
              <span className='overview-box__text'>Medium</span>
            </div>
            <div className='overview-box__detail'>
              <svg className='overview-box__icon'>
                <use xlinkHref='/img/icons.svg#icon-user'></use>
              </svg>
              <span className='overview-box__label'>Participants</span>
              <span className='overview-box__text'>
                {tour?.maxGroupSize} people
              </span>
            </div>
            <div className='overview-box__detail'>
              <svg className='overview-box__icon'>
                <use xlinkHref='/img/icons.svg#icon-star'></use>
              </svg>
              <span className='overview-box__label'>Rating</span>
              <span className='overview-box__text'>
                {tour?.ratingsAverage} / 5
              </span>
            </div>
          </div>

          <div className='overview-box__group'>
            <h2 className='heading-secondary ma-bt-lg'>Your tour guides</h2>

            {tour?.guides?.map((guide) => (
              <div key={guide.name} className='overview-box__detail'>
                <figure className='overview-box__img'>
                  <Image
                    fill
                    priority
                    src={guide.photo}
                    alt='Lead guide'
                    className={` ${
                      loading ? 'blur-2xl grayscale' : 'blur-0 grayscale-0'
                    }`}
                    onLoad={() => setLoading(false)}
                  />
                </figure>
                <span className='overview-box__label'>
                  {guide.role === 'lead-guide' ? 'Lead guid' : 'Tour guide'}
                </span>
                <span className='overview-box__text'>{guide.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='description-box'>
        <h2 className='heading-secondary ma-bt-lg'>About {tour?.name} tour</h2>
        {items?.map((item) => (
          <p key={item} className='description__text'>
            {item}
          </p>
        ))}
      </div>
    </section>
  );
}

export default DescriptionTour;
