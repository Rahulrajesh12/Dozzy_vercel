import "@/styles/globals.css";
import Head from "next/head";
import React from 'react';
import Layout from './components/Layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
       <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
