import React from "react";
import About from "../components/About";
import { client } from "../../lib/client";

export const metadata = {
  title: "Sobre | BPM Watches",
  description: "Veja mais sobre a nossa história",
};

export default async function Page() {
  const aboutQuery = '*[_type == "about"]';
  const aboutData = await client.fetch(aboutQuery);
  return <About about={aboutData.length && aboutData[0]}></About>;
}
