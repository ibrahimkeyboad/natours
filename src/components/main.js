import React from 'react';
import TourList from './tour-list';

function Main({ tours }) {
  return (
    <main className='main'>
      <div className='card-container'>
        {tours?.map((tour) => (
          <TourList key={tour._id} tour={tour} />
        ))}
      </div>
    </main>
  );
}

export default Main;
