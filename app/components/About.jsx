import React from "react";
import { urlFor } from "../../lib/client";
import Image from "next/image";

const About = ({ about }) => {
  const imageAsset = about?.image?.[0]?.asset?._ref;

  return (
    <div id="about">
      {/* About Section */}
      <div className="w-full md:h-screen flex items-center justify-center h-[1100px] flex-wrap">
        <div className="w-[80vw] flex justify-center flex-col max-w-[1100px]">
          {/* Divisor */}
          {/* <div className="mb-6 block h-0 border-t border-2 border-primary w-1/3"></div> */}

          <div className="flex flex-col md:flex-row justify-between gap-14 flex-wrap">
            <div className=" text-white leading-loose flex-1">
              {/* Divisor */}
              <div className="w-1/3 border-2 border-primary mb-4"></div>
              <h1 className="text-5xl mb-6 font-semibold">Sobre a BPM</h1>
              {/* Paragraphs */}
              <div className="text-lg md:text-xl space-y-4">
                <p>
                  Fundada em março de 2024, nossa empresa nasceu da paixão de
                  dois amigos fascinados pela arte da relojoaria.
                </p>
                <p>
                  Nosso compromisso com a transparência e autenticidade é a base
                  de tudo o que fazemos.
                </p>
                <p>
                  Cada peça em nossa coleção é cuidadosamente selecionada e
                  validada tanto por nós quanto por um relojoeiro independente,
                  garantindo a autenticidade e a qualidade.
                </p>
                <p>
                  Assim, oferecemos não apenas relógios, mas a confiança e a
                  tradição que os acompanham.
                </p>
              </div>
            </div>
            <div className="relative sm:w-[90%] min-h-[450px] h-full flex-1 bg-gray-100 mb-12">
              {imageAsset ? (
                <Image
                  src={urlFor({
                    _type: "image",
                    asset: { _ref: imageAsset },
                  }).url()}
                  alt="Image description about BPM"
                  fill
                  style={{ objectFit: "cover" }}
                  className="absolute inset-0"
                />
              ) : (
                <div className="flex items-center justify-center bg-gray-200 text-gray-500">
                  Image not available
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
