import React from "react";

const Contact = () => {
  return (
    <div id="contact">
      {/* Contact Us */}
      <div className="w-full h-screen flex items-center justify-center overflow-hidden">
        <div className="relative w-[90vw] flex flex-col max-w-[1000px]">
          {/* Divider */}
          <div className="block h-0 border-t border-2 border-primary w-1/3"></div>

          <div className="mt-8 text-white leading-loose">
            {/* Headings */}
            <h1 className="text-5xl md:text-8xl mb-2 font-semibold">
              Entre em Contato
            </h1>
            <h2 className="text-2xl md:text-5xl font-semibold mb-6 text-primary">
              Serviço Personalizado
            </h2>

            {/* Paragraphs */}
            <div className="text-lg md:text-xl space-y-4">
              <p>
                Na BPM Watches, selecionamos nossos relógios com o olhar
                criterioso de um colecionador e expertise de confiança.
              </p>
              <p>
                Nosso foco é oferecer uma experiência excepcional, conectando
                nossos clientes a peças exclusivas que representam precisão,
                arte e elegância atemporal.
              </p>
              <p className="font-semibold">
                Descubra a arte do tempo com a BPM Watches.
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <button className="rounded-md text-sm md:text-lg border py-2 px-3 md:py-2 md:px-4 border-white hover:bg-white hover:text-black transition duration-500 ease-in-out">
                WhatsApp
              </button>
              <button className="rounded-md text-sm md:text-lg border py-2 px-3 md:py-2 md:px-4 border-white hover:bg-white hover:text-black transition duration-500 ease-in-out">
                Instagram
              </button>
              <button className="rounded-md text-sm md:text-lg border py-2 px-3 md:py-2 md:px-4 border-white hover:bg-white hover:text-black transition duration-500 ease-in-out">
                Telefone
              </button>
              <button className="rounded-md text-sm md:text-lg border py-2 px-3 md:py-2 md:px-4 border-white hover:bg-white hover:text-black transition duration-500 ease-in-out">
                E-mail
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
