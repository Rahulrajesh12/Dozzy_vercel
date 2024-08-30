import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Head from "next/head";
import dynamic from 'next/dynamic';

const HomeBanner = dynamic(() => import('./components/HomeBanner.js/HomeBanner'));
const FarmStarts = dynamic(() => import('./components/FarmStarts/FarmStarts'));
const FarmProductLPage = dynamic(() => import('./components/FarmProductLPage/FarmProductLPage'));
const CareGuests = dynamic(() => import('./components/CareGuests/CareGuests'));

export default function Home() {
  return (
    <div className="text-black font-poppins">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Zero Deposit & unlimited guests - Dozzy farmhouse rentals</title>
        <meta name="description" content="Enjoy the great outdoors with no deposit, unlimited guests, and luxurious farmhouse rentals. Perfect for relaxation, parties, and weddings. Book now and enjoy your privacy in nature's luxury." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Zero Deposit & unlimited guests - Dozzy farmhouse rentals" />
        <meta property="og:description" content="Enjoy the great outdoors with no deposit, unlimited guests, and luxurious farmhouse rentals. Perfect for relaxation, parties, and weddings. Book now and enjoy your privacy in nature's luxury. " />
      </Head>
      <HomeBanner />
      <FarmStarts />
      <FarmProductLPage />
      <CareGuests />
    </div>
  );
}
