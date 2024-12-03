import Image from "next/image";
import { client } from "../lib/client";
import HeroBanner from "./components/HeroBanner";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WatchesCarousel from "./components/WatchesCarousel";

export default async function Home() {
  // query to gets newest watches first, and sold ones last
  const watchesQuery =
    '*[_type == "product"] | order(sold asc, _createdAt desc)';
  const watchesData = await client.fetch(watchesQuery);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const aboutQuery = '*[_type == "about"]';
  const aboutData = await client.fetch(aboutQuery);

  return (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}></HeroBanner>
      <About about={aboutData.length && aboutData[0]}></About>
      <WatchesCarousel watches={watchesData.length && watchesData} />
      <Contact></Contact>
    </div>
  );
}
