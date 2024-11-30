import { urlFor } from "../../lib/client";
import Image from "next/image";

const HeroBanner = ({ heroBanner }) => {
  // Ensure you extract the asset reference correctly
  const imageAsset = heroBanner?.image?.[0]?.asset?._ref;

  return (
    <>
      <div className="w-full h-[calc(100vh-6rem)] relative flex items-center justify-center overflow-hidden">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 z-20">
          <span className="block text-[#c6c6c6]">{heroBanner.upperText}</span>
          <span className="block text-white">{heroBanner.lowerText}</span>
        </h1>
        <div className="absolute left-0 bottom-0 h-1/2 w-2/3 md:w-1/2 bg-gray-400">
          <Image
            src={urlFor({ _type: "image", asset: { _ref: imageAsset } }).url()}
            alt="Hero Banner"
            layout="fill" // ensure it fills parent containder
            className="transform max-w-none w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
};
export default HeroBanner;
