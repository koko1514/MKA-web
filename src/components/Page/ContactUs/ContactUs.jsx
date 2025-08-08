import Navbar from "../../Layout/Navbar";
import bgImage from "/assets/Building.svg";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import ContactForm from "../../Layout/ContactForm";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const ContactUs = () => { 
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
    return (
      <div className="font-lato w-full flex flex-col min-h-screen">
        <Navbar />
        <Header title="Contact Us" bgImage={bgImage} />

        <section className="w-full py-15 grid md:grid-cols-3 gap-5 max-w-7/10 mx-auto">
          {/* Form */}
          <div className="md:col-span-2">
            <p className="text-md text-gray-500 mb-6 bg">
              Contact us about anything related to our company or services.
              <br />
              We'll do our best to get back to you as soon as possible.
            </p>
            <ContactForm />
          </div>

          {/* Company Info */}
          <div className="flex flex-col space-y-6">
            <div>
              <h3 className="font-bold text-xl">CV Mandiri Kerja Abadi</h3>
            </div>
            <div className="flex items-start gap-3 text-sm">
              <FaMapMarkerAlt className="mt-2.5 size-5" />
              <span>
                Jl. Raya Jabon No. 6, Jabonotoyo, Jabon, Kec. Mojoanyar,
                Kabupaten Mojokerto - Jawa Timur 61364 - Indonesia
              </span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <FaPhone />
              <span>0812-3456-7890</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <FaEnvelope />
              <span>info@ptmka.com</span>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
}

export default ContactUs;