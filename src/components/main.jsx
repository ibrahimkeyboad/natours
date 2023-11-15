import React from 'react';
import TourList from './TourList.jsx';

function Main({ tours }) {
  return (
    <main className=' main py-10 lg:py-20 px-6'>
      <div className='card-container gap-8 md:gap-16 lg:20 xl:gap-32 px-10 md:grid-cols-2 lg:grid-cols-3'>
        {tours?.map((tour) => (
          <TourList key={tour._id} tour={tour} />
        ))}
      </div>
    </main>
  );
}

export default Main;
