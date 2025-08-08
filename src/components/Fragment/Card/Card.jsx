const Card = ({ image, title, description }) => {
  return (
  <div className="font-lato bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
    </div>
  )
};

export default Card;