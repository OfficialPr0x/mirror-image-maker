import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/lovable-uploads/b95d1c60-a1d4-44a0-8bb6-e0ba589f7ae1.png",
    title: "Best Furniture",
    subtitle: "for Best Living",
    price: "$250.00",
    description: "Large Brown Sofa Bed",
  },
  {
    image: "/placeholder.svg",
    title: "Premium Design",
    subtitle: "for Your Home",
    price: "$299.00",
    description: "Modern Accent Chair",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-sage-100">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-sage-400/20" />
          <div className="relative h-full flex items-center justify-center">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 text-center md:text-left space-y-6 animate-fadeIn">
                <h1 className="text-4xl md:text-6xl font-light text-gray-800">
                  {slide.title}
                  <br />
                  <span className="font-medium">{slide.subtitle}</span>
                </h1>
                <p className="text-xl text-gray-600">{slide.description}</p>
                <p className="text-2xl font-semibold text-sage-600">
                  {slide.price}
                </p>
                <button className="px-8 py-3 bg-warmBrown-500 text-white rounded-full hover:bg-warmBrown-600 transition-colors duration-300">
                  Shop Now
                </button>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0">
                <img
                  src={slide.image}
                  alt={slide.description}
                  className="w-full h-auto object-contain animate-fadeIn"
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors duration-300"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors duration-300"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "w-6 bg-warmBrown-500"
                : "bg-warmBrown-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;