const ProductCard = () => {
  const products = [
    {
      image: "/assets/Building.svg",
      title: "Container Body Build & Installation",
    },
    {
      image: "/assets/Building.svg",
      title: "Industrial Dump Truck Body Engineering",
    },
    {
      image: "/assets/Building.svg",
      title: "Tanker Fabrication and Installation",
    },
    {
      image: "/assets/Building.svg",
      title: "Trailer Chassis & Body Engineering",
    },
  ];

  return (
    <div className="font-lato grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <div
          key={index}
          className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-primary font-semibold hover:underline cursor-pointer">
              {product.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
