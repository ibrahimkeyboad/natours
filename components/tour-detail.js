import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { getStripe } from '../context/apiSlice';
import PreviewPage from '../pages/checkout';

function TourDetails({ tour, reviews }) {
  // console.log(reviews);
  const date = new Date(tour?.startDates[0]).toLocaleString('en-us', {
    month: 'long',
    year: 'numeric',
  });

  async function stripeHandler() {
    const stripe = await PreviewPage();
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
            <Image layout='fill' priority src={tour.imageCover} alt='tour' />
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
                      layout='fixed'
                      width={35}
                      height={35}
                      src={`/img/users/${guide.photo}`}
                      alt='Lead guide'
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
              className={`picture-box__img picture-box__img--${i + 1}`}
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
                    objectFit='cover'
                    height={45}
                    width={45}
                    src={review.user.photo}
                    alt={review.user.name}
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
            <figure>
              <Image
                width={300}
                height={150}
                src='/img/logo-white.png'
                alt='logo'
              />
            </figure>
          </div>
          <figure className='cta__img cta__img--1'>
            <Image width={150} height={150} src={tour?.images[1]} alt='Tour' />
          </figure>
          <figure className='cta__img cta__img--2'>
            <Image width={150} height={150} src={tour?.images[2]} alt='Tour' />
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
