import Button from "../../Element/Button";

const Hero = () => {
  return (
    <section className="font-lato relative h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background image */}
      <img
        src="/assets/Building.svg"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay gelap */}
      <div className="z-10 absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>

      {/* Content */}
      <div className="  font-lato relative z-10 text-left container mx-auto px-26 py-12">
        <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
          Crafting outstanding <br />
          custom vehicle for every <br />
          need
        </h1>
        <p className="text-base md:text-lg text-gray-300 mb-8 w-5/10">
          Our goal is to deliver top-quality vehicle manufacturing solutions.{" "}
          <br />
          Comprehensive technical documentation, skilled craftsmanship, and
          dedicated customer support ensure a seamless and reliable experience.
        </p>
        <Button to="/productservice">Our Service</Button>
      </div>

      {/* Decorative Shape */}
      <div className="absolute bottom-0 left-0 w-full h-62 bg-bgsec clip-bottom-triangle z-20"></div>
    </section>
  );
};

export default Hero;
