import Header$ from '@/components/_header';
import Main from '@/components/main';
import dbConnect from '@/db';
import Tour from '@/models/tourModel';

export async function getStaticProps() {
  await dbConnect();
  const data = await Tour.find();

  const tours = JSON.parse(JSON.stringify(data));
  return {
    props: { tours },
  };
}

function HomePage({ tours }) {
  return (
    <>
      <Header$ />
      <Main tours={tours} />
    </>
  );
}

export default HomePage;
