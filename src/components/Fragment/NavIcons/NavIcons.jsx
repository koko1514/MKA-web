import { FaMoon, FaSearch, FaUser, FaPhone, FaAngleDown } from "react-icons/fa";

const NavIcons = () => {
  return (
    <div className="font-lato flex items-center space-x-3">
      <button className="bg-gray-200 hover:text-primary text-black p-3 rounded-full">
        <FaMoon />
      </button>
      <button className="bg-gray-200 hover:text-primary text-black p-3 rounded-full">
        <FaSearch />
      </button>
      <button className="flex items-center space-x-2 hover:text-primary m-2">
        <FaPhone />
        <span className="text-sm hidden lg:inline mr-2">0812-3456-7890</span>
      </button>
      <button className="hover:text-primary flex space-x-1">
        <FaUser />
        <FaAngleDown />
      </button>
    </div>
  );
};

export default NavIcons;
