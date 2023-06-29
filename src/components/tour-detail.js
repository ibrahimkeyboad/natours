import HeaderTour from './tour/Header';
import DescriptionTour from './tour/Description';
import Pictures from './tour/Pictures';
import Reviwes from './tour/Reviwes';
import CallToAction from './tour/CallToAction';

function TourDetails({ tour, reviews }) {
  async function stripeHandler() {
    // const stripe = await PreviewPage();
    const body = {
      name: tour.name,
      price: tour.price,
      id: tour._id,
    };
    const response = axios.post('/api/stripe', JSON.stringify(body));
  }

  console.log(reviews);

  return (
    <>
      <HeaderTour tour={tour} />
      <DescriptionTour tour={tour} />
      <Pictures tour={tour} />
      <Reviwes reviews={reviews} />
      <CallToAction tour={tour} />
    </>
  );
}

export default TourDetails;
