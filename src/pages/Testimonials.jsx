import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    text: "“I’ve launched a receivable launch and an online shop through SmenTrade.”",
    author: "Young entrepreneur"
  },
  {
    text: "“Engaged the digital process support and ongoing staff.”",
    author: "Small business owner"
  },
  {
    text: "‘ICT Desk services connected to talented developers.’",
    author: "Startup founder"
  }
];

const Testimonials = () => {
  return (
    <section className="bg-white px-6 py-7 text-left">
      <h2 className="text-2xl font-bold text-blue-900 pl-10 mb-8">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-md border-2 border-gray-200 hover:scale-105 cursor-pointer shadow hover:shadow-md transition"
          >
            <FaQuoteLeft className="text-blue-900 text-3xl mb-4 mx-auto" />
            <p className="text-gray-700 italic mb-4">{item.text}</p>
            <p className="font-semibold text-gray-800">– {item.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
