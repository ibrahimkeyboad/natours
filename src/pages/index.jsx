import Main from '@/components/main';
import dbConnect from '@/db';
import Tour from '@/models/tourModel';

export async function getStaticProps() {
  try {
    dbConnect();
    const data = await Tour.find();

    const tours = JSON.parse(JSON.stringify(data));

    return {
      props: { tours },
    };
  } catch (err) {
    return {
      props: {
        errorMessage: 'Fail connect to database',
        products: [],
      },
    };
  }
}

function HomePage({ tours, errorMessage }) {
  if (errorMessage) {
    return (
      <div style={{ maxWidth: '40%', margin: '4rem auto' }}>
        <h2
          style={{ color: '#fff', padding: '20px' }}
          className='heading-secondary--error'>
          <p>Error 500 </p>
          <p>{errorMessage}</p>
        </h2>
      </div>
    );
  }

  return (
    <>
      <Main tours={tours} />
    </>
  );
}

export default HomePage;
