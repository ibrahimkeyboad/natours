import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { IoTrash } from 'react-icons/io5';

function TourList({ tour }) {
  const [loading, setLoading] = useState(true);
  return (
    <div className='card'>
      <div className='card__header'>
        <div className='card__picture'>
          <div className='card__picture-overlay'>&nbsp;</div>
          <Image
            src={tour.imageCover}
            priority
            alt={tour?.name}
            height={500}
            width={500}
            className={`card__picture-img ${
              loading ? 'blur-2xl grayscale' : 'blur-0 grayscale-0'
            }`}
            onLoadingComplete={() => setLoading(false)}
          />
        </div>
        <h3 className='heading-tertirary'>
          <span>{tour?.name}</span>
        </h3>
      </div>
      <div className='card__details'>
        <h4 className='card__sub-heading'>
          {tour?.difficulty} {tour?.duration}-day tour
        </h4>
        <p className='card__text'>{tour.summary}</p>
        <div className='card__data'>
          <svg className='card__icon'>
            <use xlinkHref='/img/icons.svg#icon-map-pin'></use>
          </svg>
          <span>{tour?.startLocation?.description}</span>
        </div>
        <div className='card__data'>
          <svg className='card__icon'>
            <use xlinkHref='/img/icons.svg#icon-calendar'></use>
          </svg>
          <span>
            {new Date(tour?.startDates[0]).toLocaleString('en-US', {
              month: 'long',
              year: 'numeric',
            })}
          </span>
        </div>
        <div className='card__data'>
          <svg className='card__icon'>
            <use xlinkHref='/img/icons.svg#icon-flag'></use>
          </svg>
          <span>{tour?.locations?.length} stops</span>
        </div>
        <div className='card__data'>
          <svg className='card__icon'>
            <use xlinkHref='/img/icons.svg#icon-user'></use>
          </svg>
          <span>{tour?.maxGroupSize} people</span>
        </div>
      </div>
      <div className='card__footer'>
        <p>
          <span className='card__footer-value'>${tour?.price}</span>
          <span className='card__footer-text'> per person</span>
        </p>
        <p className='card__ratings'>
          <span className='card__footer-value'>{tour?.ratingsAverage} </span>
          <span className='card__footer-text'>
            rating ({tour?.ratingsQuantity})
          </span>
        </p>
        <Link href={`tour/${tour?.slug}`} className='btn btn--green btn--small'>
          Details
        </Link>
      </div>
      {/* {icon === 'yes' && (
        <IoTrash onClick={() => deleteHandler(tour?._id)} className='delete' />
      )} */}
    </div>
  );
}

export default TourList;
