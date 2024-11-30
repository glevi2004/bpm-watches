import { client } from "@/lib/client"; // Your Sanity client
import { notFound } from "next/navigation";
import Watch from "@/app/components/Watch";

export default async function WatchPage({ params }) {
  const { slug } = params; // capture slug from the URL

  const watchQuery = `*[_type == "product" && slug.current == $slug][0]`;

  const watchData = await client.fetch(watchQuery, { slug }); // Pass slug to the query

  // If no watch is found, return a 404 page
  if (!watchData) {
    return notFound();
  }

  console.log(watchData);
  return (
    <div>
      {/* 1st section */}
      <Watch watch={watchData} />
    </div>
  );
}
