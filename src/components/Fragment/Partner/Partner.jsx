const logos = [
  { src: "/assets/PT.SCN.svg", alt: "SCN" },
  { src: "/assets/PT.PRIA.svg", alt: "PRIA" },
  { src: "/assets/PT.BS.png", alt: "BS" },
  { src: "/assets/PT.ASM.png", alt: "ASM" },
  { src: "/assets/PT.AminTrans.jpg", alt: "Amin Trans" },
];

const Partner = () => {
  return (
    <div className="font-lato grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-center">
      {logos.map((logo, index) => (
        <img
          key={index}
          src={logo.src}
          alt={logo.alt}
          className="max-h-20 mx-auto grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition duration-300 transform hover:scale-125"
        />
      ))}
    </div>
  );
};

export default Partner;