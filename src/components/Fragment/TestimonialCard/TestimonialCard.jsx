import { FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    quote: `"The Koran Mini has transformed my daily commute into an exhilarating experience. I can't imagine driving anything else!" - Sarah L.`,
    name: "Emily SMITH",
    position: "CEO of MandiriKerjaAbadi Motors",
    image: "/assets/©𝐁𝐄𝐀𝐒𝐓𝐇𝐄𝐓𝐈𝐂 - 𝑺𝑯𝑼𝑯𝑼𝑨 𝑰𝑪𝑶𝑵.jpeg",
  },
  {
    quote: `"This truck body fabrication is top-notch quality. Excellent durability and design!" - John D.`,
    name: "John DOE",
    position: "Fleet Manager at LogisticPro",
    image: "/assets/©𝐁𝐄𝐀𝐒𝐓𝐇𝐄𝐓𝐈𝐂 - 𝑺𝑯𝑼𝑯𝑼𝑨 𝑰𝑪𝑶𝑵.jpeg",
  },
  // Add more testimonials...
];

// TestimonialCard menerima props (testimonial)
const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="font-lato bg-white rounded-xl shadow-lg p-8 text-center max-w-xl mx-auto flex flex-col items-center justify-between min-h-[350px] relative">
      {/* Big Quote Icon at top */}
      <div className="bg-primary text-white rounded-lg p-4 -top-5 z-20 absolute">
        <FaQuoteRight className="text-black bg-primary text-xl" />
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-700 italic text-xl leading-relaxed z-10 mt-7">
        {testimonial.quote}
      </p>

      {/* Divider */}
      <div className="w-50 h-0.5 bg-primary my-2"></div>

      {/* User Info */}
      <div className="flex flex-col items-center">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full object-cover mb-2 shadow-md"
        />
        <h4 className="font-semibold text-lg">{testimonial.name}</h4>
        <p className="text-sm text-gray-500">{testimonial.position}</p>
      </div>
    </div>
  );
};

// Export data & komponen
// eslint-disable-next-line react-refresh/only-export-components
export { testimonials };
export default TestimonialCard;
