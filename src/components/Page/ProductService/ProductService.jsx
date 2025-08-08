import Navbar from "../../Layout/Navbar";
import bgImage from "/assets/Building.svg";
import Header from "../../Layout/Header";
import ProductCard from "../../Fragment/ProductCard";
import Testimonial from "../../Layout/Testimonial";
import Footer from "../../Layout/Footer";
import LatestProduct from "../../Layout/LatestProduct";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const ProductService = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return (
    <div className="font-lato w-full flex flex-col min-h-screen">
      <Navbar />
      <Header title="Product & Service" bgImage={bgImage} />

      <section className="relative py-23 px-50 z-10">
        <div className="relative mb-8 z-10">
          <h2 className="text-4xl font-bold">
            Our Manufacture Products & Services
          </h2>
          <p className="text-gray-500 text-lg">Check out what's new in our company !</p>
        </div>

        {/* Product Cards */}
        <div className="relative z-10">

        <ProductCard />
        </div>

        <div className="absolute bottom-0 left-0 w-full h-25 bg-bgsec clip-bottom-triangle z-0"></div>
      </section>

      <LatestProduct />

      <Testimonial />

      <Footer />
    </div>
  );
};

export default ProductService;
