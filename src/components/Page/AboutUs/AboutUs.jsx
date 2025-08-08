import Header from "../../Layout/Header";
import Navbar from "../../Layout/Navbar";
import Button from "../../Element/Button";
import Footer from "../../Layout/Footer";
import TeamCard from "../../Fragment/TeamCard";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const AboutUs = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
  return (
    <div className="font-lato w-full flex flex-col min-h-screen">
      <Navbar />
      <Header title="About Us" bgImage="/assets/Building.svg" />

      <section className="relative py-23">
        <div className="absolute top-0 left-0 w-full h-full bg-bgsec clip-top-triangle-au z-10"></div>

        <div className="relative container mx-auto px-25 flex flex-col md:flex-row items-center gap-5 z-20">
          {/* Text Content */}
          <div className="md:w-1/2 pl-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-5 text-black">
              Our History
            </h2>
            <p className="text-black mb-4">
              Karoseri CV. Mandiri Kerja Abadi was officially established on
              March 30, 2016.
            </p>
            <p className="text-black mb-4">
              Long before becoming a coachbuilding company, it operated under
              the name UD. Mandiri-Kerja Abadi, a business engaged in commercial
              vehicle transportation. At that time, all bodywork on each unit
              was done independently by skilled engineers within the company.
              The company went through numerous trial and error stages in the
              bodywork process until eventually discovering the best material
              specifications for building truck bodies.
            </p>
            <p className="text-black mb-6">
              On March 30, 2016, the company was officially registered as a
              coachbuilder under the supervision of the Department of
              Transportation, aiming to gain greater consumer trust. With over
              10 years of experience, we believe in our ability to meet every
              customer’s expectations. Warm regards from us.
            </p>
          </div>

          {/* Image */}
          <div className="md:w-1/2 relative">
            <img
              src="/public/assets/Building.svg"
              alt="Building CV MKA"
              className="w-[45%] mx-auto rounded transform rotate-[-3deg] shadow-lg object-cover h-50"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-25">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-6">
          {/* Left Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/public/assets/Building.svg"
              alt=""
              className="w-[80%] max-w-md rounded transform shadow-lg object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
              Explore New Possibilities
            </h2>
            <p className="text-black mb-4">
              Our manufacturing services are designed to meet the unique needs
              of our customers. We offer a wide range of products and services
              that are tailored to your specific requirements.
            </p>
            <p className="text-black mb-6">
              Our focus is on meeting the needs of our customers. We work
              closely with you to understand your requirements and provide the
              best solutions.
            </p>
            <Button to="/productservice">Find out more</Button>
          </div>
        </div>
      </section>

      <section className="relative py-16 pb-0 bg-bgsec">
        <div className="absolute top-0 left-0 w-full h-55  bg-white clip-top-left-triangle z-0"></div>

        <div className="relative container mx-auto px-6 z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            OUR PROFESSIONAL TEAM
          </h2>
          <div className="md:grid md:grid-cols-2 md:gap-16">
            <div className="mb-10 md:mb-0">
              <h3 className="text-2xl font-semibold mb-2">Meet our experts</h3>
              <p className="text-gray-500">
                Dedicated professionals driving our growth
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 py-10">
            <TeamCard />
          </div>
        </div>
      </section>

      <section className="relative w-full py-16 bg-white">
        <div className="absolute top-0 left-0 w-full h-50 bg-bgsec clip-top-left-triangle z-0"></div>

        <div className="relative max-w-6xl mx-auto px-4 text-center z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Visit Our Workshop
          </h2>
          <p className="text-gray-600 mb-8">
            You can visit our workshop directly at the following address to
            consult and see our production process.
          </p>

          <div className="w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.7581326105237!2d112.4473823!3d-7.491935499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e780db1cbe8f513%3A0x5c180656fb3c25f0!2sKaroseri%20CV.%20Mandiri%20Kerja%20Abadi!5e0!3m2!1sen!2sid!4v1754180416456!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
