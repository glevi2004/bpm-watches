import React from "react";
import { client } from "@/lib/client"; // Your Sanity client
import { notFound } from "next/navigation";
import Watches from "../components/Watches";

export default async function WatchesPage() {
  const watchesQuery = '*[_type == "product"]';
  const watchesData = await client.fetch(watchesQuery);

  return <Watches watches={watchesData} />;
}
