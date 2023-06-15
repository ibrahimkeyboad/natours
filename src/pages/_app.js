import '@/styles/globals.css';
import Header from '@/components/header';
import { SessionProvider } from 'next-auth/react';
import Footer from '@/components/footer';
import ToastProvider from '@/components/ToastProvider';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <SessionProvider session={session}>
        <Header />
        <ToastProvider />
        <Component {...pageProps} />
        <Footer />
      </SessionProvider>
    </>
  );
}
