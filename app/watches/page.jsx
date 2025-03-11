import React from "react";
import { client } from "@/lib/client"; // Your Sanity client
import { notFound } from "next/navigation";
import Watches from "../components/Watches";

export const metadata = {
  title: "Produtos | BPM Watches",
  description: "Veja os nossos produtos a venda",
};

export default async function WatchesPage() {
  // const watchesQuery =
  //   '*[_type == "product"] | order(sold asc, _createdAt desc)';
  // const watchesData = await client.fetch(watchesQuery);

  // const bannerQuery = '*[_type == "banner"]';
  // const bannerData = await client.fetch(bannerQuery);

  // const aboutQuery = '*[_type == "about"]';
  // const aboutData = await client.fetch(aboutQuery);
  const watchesQuery =
    '*[_type == "product"] | order(sold asc, _createdAt desc)';
  const watchesData = await client.fetch(watchesQuery);

  return <Watches watches={watchesData} />;
}
