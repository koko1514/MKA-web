import { NavLink } from "react-router-dom";

const MenuItems = () => {
  const menu = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Product Service", path: "/productservice" },
  ];

  return (
    <div
      className="font-lato items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
      id="navbar-cta"
    >
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-10 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
        {menu.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `block py-2 px-3 md:p-0 rounded-sm transition-colors ${
                  isActive
                    ? "text-white bg-primary md:bg-transparent md:text-primary"
                    : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary"
                }`
              }
              end
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuItems;
