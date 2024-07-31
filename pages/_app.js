// import "@/styles/globals.css";

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

import "@/styles/globals.css";
import Head from "next/head";
import React from 'react';
import Layout from './components/Layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
    
    <Layout>
       <Head>
        {/* <link rel="icon" href="/sdcnew.png" /> */}
        {/* <link rel="canonical" href="https://selfdrivecarshyderabad.com/"/> */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        /> 
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
