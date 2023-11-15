import '@/styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import Footer from '@/components/footer';
import ToastProvider from '@/components/ToastProvider';
import Head from 'next/head';
import Header from '@/components/Header';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='theme-color' content='#ffff' />
        <meta
          name='description'
          content="Omnifood is an AI-powered food subscription that will make you eat healthy again, 365 days per year. It's tailored to your personal tastes and nutritional needs."
        />

        <meta name='viewport' content='width=device-width, initial-scale=1.0' />

        <link
          rel='icon'
          href='https://res.cloudinary.com/ibracloud/image/upload/v1666853628/natours/img/favicon_suwibc.png'
        />

        <title>Natours | Exciting tours for adventurous people</title>
      </Head>
      <SessionProvider session={session}>
        <Header />
        <ToastProvider />
        <Component {...pageProps} />
        <Footer />
      </SessionProvider>
    </>
  );
}
