import { NavLink } from "react-router-dom";

const NavMenu = () => {
  const menus = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Product Service", path: "/productservice" },
  ];

  return (
    <ul className="font-lato hidden md:flex space-x-10 text-sm">
      {menus.map((menu, i) => (
        <li key={i}>
          <NavLink
            to={menu.path}
            className={({ isActive }) =>
              `${
                isActive
                  ? "bg-primary px-4 py-2 rounded-full font-semibold"
                  : "hover:text-primary"
              }`
            }
          >
            {menu.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
