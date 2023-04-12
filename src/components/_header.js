import Head from 'next/head';

function Header$({ title, description }) {
  return (
    <Head>
      <title>{title || 'Natours'}</title>
      {description && <meta name='description' content={description} />}
    </Head>
  );
}

export default Header$;
