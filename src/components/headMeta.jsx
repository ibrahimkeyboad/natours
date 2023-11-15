import Head from 'next/head';

function headMeta({ title, description }) {
  return (
    <Head>
      <title>{title || 'Natours'}</title>
      {description && <meta name='description' content={description} />}
    </Head>
  );
}

export default headMeta;
