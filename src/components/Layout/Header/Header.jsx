const Header = ({ title, bgImage }) => {
  return (
    <div
      className="font-lato w-full h-90 bg-cover bg-center relative flex items-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <h1 className="pt-20 relative text-white text-5xl font-black container mx-auto px-25 z-10">
        {title}
      </h1>
    </div>
  );
}

export default Header;
