import Navbar from "../../Layout/Navbar";
import Hero from "../../Layout/Hero";
import Footer from "../../Layout/Footer";
import Statistic from "../../Layout/Statistic";
import Button from "../../Element/Button";
import Card from "../../Fragment/Card";
import Partner from "../../Fragment/Partner";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="font-lato w-full flex flex-col min-h-screen">
      <Navbar />
      <Hero />

      <section className="py-10 relative bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-bgsec clip-top-triangle z-10"></div>

        {/* Konten */}
        <div className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center z-20">
          {/* Teks */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Reliable and durable <br />
              bodywork that exceeds <br />
              customer expectations
            </h2>
            <p className="text-black leading-relaxed">
              At our coachbuilding facility, we take pride in delivering
              bodywork that goes beyond aesthetics — we build for strength,
              safety, and long-term performance. Every vehicle body we produce
              is engineered with precision, using high-quality materials and
              expert craftsmanship to ensure durability in all conditions.
            </p>
          </div>

          {/* Gambar */}
          <div className="relative w-fit mx-auto">
            <img
              src="/assets/truk1.svg" // ganti dengan path gambar kamu
              alt="Truck"
              className="w-full max-w-md shadow-xl"
            />
            {/* Optional: Efek tumpukan */}
            <div className="absolute top-2 left-2 w-full h-full border border-gray-300 -z-10"></div>
          </div>
        </div>
      </section>

      <Statistic />

      <section className="relative bg-white">
        <div className="relative max-w-6xl mx-auto mb-0 px-6 py-25 pb-0 flex flex-col md:flex-row items-center z-10">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              The Technology <br /> Behind Our Manufacturing
            </h2>
            <p className="text-text-black mb-4">
              Our manufacturing services are designed to meet the unique needs
              of our customers. We offer a wide range of products and services
              that are tailored to your specific requirements.
            </p>
            <p className="text-text-black mb-6">
              Our focus is on meeting the needs of our customers. We work
              closely with you to understand your requirements and provide the
              best solutions.
            </p>
            <Button to="/aboutus">Learn More</Button>
          </div>

          <div className="md:w-1/2 relative flex justify-center items-center">
            {/* Circle Background */}
            <div className="absolute w-110 h-110 ml-30 bg-bgsec rounded-full z-0"></div>

            {/* Image */}
            <img
              src="/assets/laptop.png" // ganti dengan path gambar kamu
              alt="Technology Devices"
              className="w-[70%] relative ml-30 object-contain"
            />
          </div>
        </div>
      </section>

      <section className="relative bg-bgsec py-50 pb-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-50 bg-white clip-top-left-triangle z-0"></div>

        <div className="relative max-w-6xl mx-auto px-6 z-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Competitive Advantage
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card
              image="/assets/card1.svg"
              title="Uncompromising Build Quality"
              description="Ideal for manufacturers. Essential features to streamline production and distribution. Perfect for small teams."
            />
            <Card
              image="/assets/card2.svg"
              title="Tailored Solutions for Every Industry"
              description="Innovative solutions for manufacturing excellence. Streamline your production and enhance efficiency across."
            />
            <Card
              image="/assets/card3.svg"
              title="End-to-End Manufacturing Expertise"
              description="Comprehensive solutions for manufacturers. State-of-the-art technology and dedicated support for optimal output."
            />
          </div>
        </div>
      </section>

      <section className=" relative py-16 pb-25">
        <div className="absolute top-0 left-0 w-full h-50 bg-bgsec clip-top-left-triangle z-0"></div>

        <div className="relative max-w-6xl mx-auto px-4 text-center z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            Our trusted partners and industry references
          </h2>
          <p className="text-gray-500 mb-4">
            Explore how our experience in manufacturing enhances your business
            operations.
          </p>
          <a
            href="#success-stories"
            className="text-primary font-medium hover:underline inline-flex items-center mb-10"
          >
            Explore our success stories
            <svg
              className="ml-2 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M12.293 3.293a1 1 0 011.414 0L18 7.586a1 1 0 010 1.414l-4.293 4.293a1 1 0 01-1.414-1.414L14.586 9H4a1 1 0 110-2h10.586l-2.293-2.293a1 1 0 010-1.414z" />
            </svg>
          </a>
          <Partner />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
