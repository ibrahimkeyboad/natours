import React from 'react';
import TourDetails from '../../components/tour-detail';
import Header$ from '../../components/_header';
import { getTour } from '../../context/apiSlice';
import wrapper from '../../context/store';

function TourPage(tour) {
  // console.log(tour);
  return (
    <>
      <Header$ title={tour.name} description={tour.description} />
      <TourDetails tour={tour} />
    </>
  );
}

export default TourPage;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const { slug } = context.params;
    // console.log(slug);
    const response = await store.dispatch(getTour.initiate(slug));
    // console.log(response.data);
    const { data } = response;

    const tour = { ...data.tour, reviews: data.reviews };
    return {
      props: tour,
    };
  }
);
