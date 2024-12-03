const ContactButton = ({ watchInfo }) => {
  const handleClick = () => {
    const phoneNumber = "19788105602"; // Replace with your business phone number
    const message = `Olá, tenho interesse no produto ${watchInfo.name}!`;
    const encodedMessage = encodeURIComponent(message);

    // Check if user is on a desktop device and redirect accordingly
    const isDesktop = typeof window !== "undefined" && window.innerWidth > 768;

    const whatsappUrl = isDesktop
      ? `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}` // Force WhatsApp Web
      : `https://wa.me/${phoneNumber}?text=${encodedMessage}`; // Default for mobile

    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      disabled={watchInfo.sold}
      className={`${
        watchInfo.sold ? "cursor-not-allowed opacity-30" : ""
      } w-52 rounded-md text-lg md:text-xl border py-3 px-4 border-white hover:bg-white hover:text-black transition duration-500 ease-in-out`}
    >
      {watchInfo.sold ? "Indisponível" : "Entre em Contato"}
    </button>
  );
};

export default ContactButton;
