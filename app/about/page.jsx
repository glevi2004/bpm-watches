import React from "react";
import About from "../components/About";
import { client } from "../../lib/client";

export default async function Page() {
  const aboutQuery = '*[_type == "about"]';
  const aboutData = await client.fetch(aboutQuery);
  return <About about={aboutData.length && aboutData[0]}></About>;
}
