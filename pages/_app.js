import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import Footer from '../components/footer';
import Header from '../components/header';
import wrapper from '../context/store';
import '../css/style.css';

function MyApp({ Component, ...rest }) {
  const {
    store,
    props: { session, ...pageProps },
  } = wrapper.useWrappedStore(rest);
  console.log(pageProps);
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Header />
        <Component {...pageProps.pageProps} />
        <Footer />
      </Provider>
    </SessionProvider>
  );
}

// MyApp.getInitialProps = wrapper.getInitialAppProps(
//   (store) =>
//     async ({ ctx }) => {
//       const { token } = ctx?.req?.cookies;
//       const response = await store.dispatch(logUser.initiate());
//       console.log(response);
//     }
// );

export default MyApp;
