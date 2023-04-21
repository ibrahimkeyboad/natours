import '@/styles/globals.css';
import Header from '@/components/header';
import { SessionProvider } from 'next-auth/react';
import Footer from '@/components/footer';

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </SessionProvider>
  );
}
