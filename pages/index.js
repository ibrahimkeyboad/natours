import React from 'react';
import Main from '../components/main';
import Header$ from '../components/_header';
import { getTours } from '../context/apiSlice';
import wrapper from '../context/store';

function HomePage({ tours }) {
  // console.log(tours);
  return (
    <>
      <Header$ />
      <Main tours={tours} />
    </>
  );
}

export default HomePage;

export const getStaticProps = wrapper.getStaticProps(
  (store) => async (context) => {
    const response = await store.dispatch(getTours.initiate());
    // console.log('data', response.data);
    return {
      props: response.data,
    };
  }
);
