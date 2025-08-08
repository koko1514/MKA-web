import Home from "../components/Page/Home";
import AboutUs from "../components/Page/AboutUs";
import ProductService from "../components/Page/ProductService";
import ContactUs from "../components//Page/ContactUs";

const routes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/aboutus",
        element: <AboutUs />
    },
    {
        path: "/productservice",
        element: <ProductService />
    },
    {
        path: "/contactus",
        element: <ContactUs />
    },
]

export default routes;