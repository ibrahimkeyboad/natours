import Image from 'next/image';
import React, { useState } from 'react';

function Pictures({ tour }) {
  const [loading, setLoading] = useState(true);

  return (
    <section className='section-pictures'>
      {tour?.images?.map((img, i) => (
        <div key={img} className='picture-box'>
          <Image
            className={` picture-box__img picture-box__img--${i + 1} ${
              loading ? 'blur-2xl grayscale' : 'blur-0 grayscale-0'
            }`}
            src={img}
            priority
            width={800}
            height={600}
            alt={''}
            onLoad={() => setLoading(false)}
          />
        </div>
      ))}
    </section>
  );
}

export default Pictures;
