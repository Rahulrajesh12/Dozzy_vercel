import { Inter } from "next/font/google";
import HomeBanner from "./components/HomeBanner.js/HomeBanner";
import FarmStarts from "./components/FarmStarts/FarmStarts";
import FarmProductLPage from "./components/FarmProductLPage/FarmProductLPage";
import CareGuests from "./components/CareGuests/CareGuests";
const inter = Inter({ subsets: ["latin"] });
import Head from "next/head";
export default function Home() {
  return (
    <div className="text-black">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HomeBanner />
      <FarmStarts />
      <FarmProductLPage />
      <CareGuests />
    </div>
  );
}
