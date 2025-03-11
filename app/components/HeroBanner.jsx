import { urlFor } from "../../lib/client";
import Image from "next/image";

const HeroBanner = ({ heroBanner }) => {
  // Ensure you extract the asset reference correctly
  const imageAsset = heroBanner?.image?.[0]?.asset?._ref;

  return (
    <>
      <div className="w-full h-[calc(100vh-6rem)] flex flex-col md:flex-row">
        {/* Left: Text */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center">
          <div className="text-left">
            <h1 className="mt-24 mb-4 md:mt-0 ml-8 text-3xl md:text-5xl lg:text-6xl font-bold text-white">
              <span className="block text-[#83ab92]">
                {heroBanner.upperText}
              </span>
              <span className="block">{heroBanner.lowerText}</span>
            </h1>
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/2 h-full relative">
          <Image
            src={urlFor({ _type: "image", asset: { _ref: imageAsset } }).url()}
            alt="Hero Banner"
            fill
            style={{ objectFit: "cover" }} // ensure it fills the parent container
            className="transform max-w-none w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
