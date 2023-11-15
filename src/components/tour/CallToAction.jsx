import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function CallToAction({ tour }) {
  const [loading, setLoading] = useState(true);

  return (
    <section className='section-cta'>
      <div className='cta'>
        <div className='cta__img cta__img--logo'>
          <Image
            priority
            width={300}
            height={70}
            src='/imgs/logo-white.png'
            alt='logo'
            className={` ${
              loading ? 'blur-2xl grayscale' : 'blur-0 grayscale-0'
            }`}
            onLoad={() => setLoading(false)}
          />
        </div>
        <figure className='cta__img cta__img--1'>
          <Image
            priority
            className={` ${
              loading ? 'blur-2xl grayscale' : 'blur-0 grayscale-0'
            }`}
            onLoad={() => setLoading(false)}
            fill
            src={tour?.images[1]}
            alt='Tour'
          />
        </figure>
        <figure className='cta__img cta__img--2'>
          <Image
            priority
            className={` ${
              loading ? 'blur-2xl grayscale' : 'blur-0 grayscale-0'
            }`}
            onLoad={() => setLoading(false)}
            fill
            src={tour?.images[2]}
            alt='Tour'
          />
        </figure>
        <div className='cta__content'>
          <h2 className='heading-secondary'>What are you waiting for?</h2>
          <p className='cta__text'>
            {tour?.duration} days. 1 adventure. Infinite memories. Make it yours
            today!
          </p>
          <Link href='/checkout' id='book-tour'>
            <span className='btn btn--green span-all-rows'>Book tour now!</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
