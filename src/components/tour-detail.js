import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

function TourDetails({ tour, reviews }) {
  const [loading, setLoading] = useState(true);

  const date = new Date(tour.startDates[0]).toLocaleString('en-us', {
    month: 'long',
    year: 'numeric',
  });

  async function stripeHandler() {
    // const stripe = await PreviewPage();
    const body = {
      name: tour.name,
      price: tour.price,
      id: tour._id,
    };
    const response = axios.post('/api/stripe', JSON.stringify(body));
  }

  const items = tour?.description.split('\n');
  return (
    <>
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
                      width={35}
                      height={35}
                      src={guide.photo}
                      alt='Lead guide'
                      className={` ${
                        loading ? 'blur-2xl grayscale' : 'blur-0 grayscale-0'
                      }`}
                      onLoadingComplete={() => setLoading(false)}
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
          <h2 className='heading-secondary ma-bt-lg'>
            About {tour?.name} tour
          </h2>
          {items?.map((item) => (
            <p key={item} className='description__text'>
              {item}
            </p>
          ))}
        </div>
      </section>
      <section className='section-pictures'>
        {tour?.images?.map((img, i) => (
          <div key={img} className='picture-box'>
            <Image
              priority
              height={1000}
              width={1000}
              src={img}
              alt={''}
              className={` picture-box__img picture-box__img--${i + 1} ${
                loading ? 'blur-2xl grayscale' : 'blur-0 grayscale-0'
              }`}
              onLoadingComplete={() => setLoading(false)}
            />
          </div>
        ))}
      </section>
      <section className='section-reviews'>
        <div className='reviews'>
          {tour?.reviews?.map((review) => (
            <div key={review._id} className='reviews__card'>
              <div className='reviews__avatar'>
                <figure className='reviews__avatar-img'>
                  <Image
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
      <section className='section-cta'>
        <div className='cta'>
          <div className='cta__img cta__img--logo'>
            <Image
              width={300}
              height={70}
              src='/imgs/logo-white.png'
              alt='logo'
              className={` ${
                loading ? 'blur-2xl grayscale' : 'blur-0 grayscale-0'
              }`}
              onLoadingComplete={() => setLoading(false)}
            />
          </div>
          <figure className='cta__img cta__img--1'>
            <Image
              className={` ${
                loading ? 'blur-2xl grayscale' : 'blur-0 grayscale-0'
              }`}
              onLoadingComplete={() => setLoading(false)}
              width={150}
              height={150}
              src={tour?.images[1]}
              alt='Tour'
            />
          </figure>
          <figure className='cta__img cta__img--2'>
            <Image
              className={` ${
                loading ? 'blur-2xl grayscale' : 'blur-0 grayscale-0'
              }`}
              onLoadingComplete={() => setLoading(false)}
              width={150}
              height={150}
              src={tour?.images[2]}
              alt='Tour'
            />
          </figure>
          <div className='cta__content'>
            <h2 className='heading-secondary'>What are you waiting for?</h2>
            <p className='cta__text'>
              {tour?.duration} days. 1 adventure. Infinite memories. Make it
              yours today!
            </p>
            <Link href='/checkout' id='book-tour'>
              <span className='btn btn--green span-all-rows'>
                Book tour now!
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default TourDetails;
