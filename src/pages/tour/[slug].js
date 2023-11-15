import TourDetails from '@/components/TourDetail';
import HeadMeta from '@/components/headMeta';
import connetDB from '@/db';
import Review from '@/models/reviewModel';
import Tour from '@/models/tourModel';
import dynamic from 'next/dynamic';

export async function getStaticPaths() {
  await connetDB();

  const datas = await Tour.find({});

  const paths = datas.map((item) => ({ params: { slug: item.slug } }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  await connetDB();

  const data = await Tour.findOne({ slug: params.slug });
  const reviews = await Review.find({ tour: data.id });

  return {
    props: {
      tour: JSON.parse(JSON.stringify(data)),
      reviews: JSON.parse(JSON.stringify(reviews)),
    },

    revalidate: 10,
  };
}

function TourPage({ tour, reviews }) {
  return (
    <>
      <HeadMeta
        title={`Natours | ${tour.name}`}
        description={tour.description}
      />
      <TourDetails tour={tour} reviews={reviews} />
    </>
  );
}

export default TourPage;
