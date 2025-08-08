import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../../Layout/Navbar";
import Footer from "../../Layout/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default Layout;
