import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "m30f78uq",
  dataset: "production",
  apiVersion: "2024-11-17",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

// const builder = imageUrlBuilder(client);

export const urlFor = (source) => imageUrlBuilder(client).image(source);
