import Header$ from '@/components/_header';
import TourDetails from '@/components/tour-detail';
import connetDB from '@/db';
import Review from '@/models/reviewModel';
import Tour from '@/models/tourModel';

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
  const data = await Tour.findOne({ slug: params.slug });
  const reviews = await Review.findById({ _id: data.id });

  return {
    props: {
      tour: JSON.parse(JSON.stringify(data)),
      reviews: JSON.parse(JSON.stringify(reviews)),
    },

    revalidate: 10,
  };
}

function TourPage({ tour, reviews }) {
  console.log(tour);
  return (
    <>
      <Header$ title={tour.name} description={tour.description} />
      <TourDetails tour={tour} reviews={reviews} />
    </>
  );
}

export default TourPage;
