/** @type {import('next').NextConfig} */
// next.config.mjs

export default {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/m30f78uq/production/**",
      },
    ],
  },
};
