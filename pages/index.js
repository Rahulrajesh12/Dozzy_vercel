import { Inter } from "next/font/google";
import HomeBanner from "./components/HomeBanner.js/HomeBanner";
import FarmStarts from "./components/FarmStarts/FarmStarts";
import FarmProductLPage from "./components/FarmProductLPage/FarmProductLPage";
import CareGuests from "./components/CareGuests/CareGuests";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <div className="">
      <HomeBanner/>
      <FarmStarts/>
      <FarmProductLPage/>
      <CareGuests/>
    </div>
  );
}
