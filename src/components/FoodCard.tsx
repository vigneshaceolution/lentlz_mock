import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface FoodCard {
  id: number;
  image: string;
  title: string;
  description: string;
}

const FoodPresentationSection: React.FC = () => {
  const [foodCards, setFoodCards] = useState<FoodCard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const sliderRef = useRef<HTMLDivElement>(null);
  const getCardWidth = () => {
    if (typeof window === "undefined") return 280 + 20; // default
    const width = window.innerWidth;
    if (width >= 1024) return 260 + 20; // Card + margin (10 left + 10 right)
    if (width >= 768) return 280 + 20;
    return 280 + 20;
  };

  const [cardWidth, setCardWidth] = useState(getCardWidth());

  useEffect(() => {
    // Sample data since we can't fetch from external API in this environment
    const sampleData = [
      {
        id: 1,
        image: "/assets/FoodCard-1.png",
        title: "Description",
        description: `Presentations are tools that can be used as lectures`,
      },
      {
        id: 2,
        image: "/assets/FoodCard-2.png",
        title: "Description",
        description: "Presentations are tools that can be used as lectures",
      },
      {
        id: 3,
        image: "/assets/FoodCard-3.png",
        title: "Description",
        description: "Presentations are tools that can be used as lectures",
      },
      {
        id: 4,
        image: "/assets/FoodCard-1.png",
        title: "Description",
        description: "Presentations are tools that can be used as lectures",
      },
      {
        id: 5,
        image: "/assets/FoodCard-2.png",
        title: "Description",
        description: "Presentations are tools that can be used as lectures",
      },
    ];
    setFoodCards(sampleData);
  }, []);

  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setVisibleCards(3);
      } else if (width >= 768) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
      setCardWidth(getCardWidth());
      setCurrentIndex(0); // Reset index on resize
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    const maxIndex = foodCards.length - visibleCards;
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <div
      className="flex flex-col items-center justify-center 
  px-4 pt-12 pb-10            // mobile padding
  md:px-10 md:pt-14 md:pb-12  // tablet
  lg:px-16 lg:pt-20 lg:pb-0  // laptop
  bg-[#114F3D] lg:bg-transparent"
    >
      {/* Title */}
      <div className="relative mb-8 lg:mb-12 flex items-center justify-center">
        {/* Title */}
        <h1
          className="text-white text-center z-10 lg:mt-28 mb-4 lg:mb-8 px-4"
          style={{
            fontFamily: "Fredoka One, cursive",
            fontSize:
              window.innerWidth >= 1024
                ? "37px"
                : window.innerWidth >= 768
                ? "32px"
                : "28px",
            fontWeight: "400",
          }}
        >
          Have a peek at our menu
        </h1>

        {/* Masala Images - Only show on large screens to maintain laptop design */}
        <img
          src="/assets/masala-one.png"
          alt="Masala Top"
          className="absolute top-38 -left-74 transform -translate-x-1/2 z-21 hidden lg:block"
          style={{ width: "200px" }}
        />

        <img
          src="/assets/masala-two.png"
          alt="Masala Side"
          className="absolute top-1/2 -left-90 transform -translate-y-1/2 z-20 hidden lg:block"
        />
      </div>

      <div className="flex items-center justify-center w-full max-w-7xl">
        {/* Left Button */}
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className={`z-10 flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full shadow-md transition duration-300 mr-2 lg:mr-15 ${
            currentIndex === 0
              ? "opacity-50 cursor-not-allowed"
              : "hover:shadow-xl"
          }`}
          style={{ backgroundColor: "#f44e5d" }}
        >
          <ChevronLeft className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
        </button>

        {/* Cards Container */}
        <div
          className="overflow-hidden mx-2 lg:mx-6"
          style={{
            width: `${cardWidth * visibleCards}px`,
          }}
        >
          <div
            ref={sliderRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${
                currentIndex *
                (window.innerWidth >= 768 ? cardWidth : cardWidth - 20)
              }px)`,
            }}
          >
            {foodCards.map((card) => (
              <div
                key={card.id}
                className="bg-[#ffa900] rounded-[20px] lg:rounded-[40px] p-3 lg:p-4 shadow-lg hover:shadow-xl mx-[10px] flex-shrink-0"
                style={{
                  width:
                    window.innerWidth >= 768
                      ? `${cardWidth - 20}px` // Tablet and Laptop
                      : `${cardWidth - 40}px`, // Mobile
                  height:
                    cardWidth >= 260
                      ? "390px"
                      : cardWidth >= 250
                      ? "370px"
                      : "350px",
                }}
              >
                <div className="mb-4 lg:mb-6 flex justify-center">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="rounded-[15px] lg:rounded-[30px] border-[3px] lg:border-[4px] border-white object-cover"
                    style={{
                      width: `${cardWidth - 40}px`,
                      height:
                        cardWidth >= 260
                          ? "240px"
                          : cardWidth >= 250
                          ? "220px"
                          : "200px",
                    }}
                  />
                </div>
                <div className="text-center px-2">
                  <h3
                    className="mb-2 lg:mb-3"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize:
                        window.innerWidth >= 1024
                          ? "16px"
                          : window.innerWidth >= 768
                          ? "15px"
                          : "14px",
                      fontWeight: 600,
                      color: "#114F3D",
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize:
                        window.innerWidth >= 1024
                          ? "15px"
                          : window.innerWidth >= 768
                          ? "14px"
                          : "13px",
                      fontWeight: 500,
                      color: "#000000",
                      lineHeight: "1.4",
                    }}
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Button */}
        <button
          onClick={handleNext}
          disabled={currentIndex + visibleCards >= foodCards.length}
          className={`z-10 flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full shadow-md transition duration-300 ml-2 lg:ml-15 ${
            currentIndex + visibleCards >= foodCards.length
              ? "opacity-50 cursor-not-allowed"
              : "hover:shadow-xl"
          }`}
          style={{ backgroundColor: "#f44e5d" }}
        >
          <ChevronRight className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
        </button>
      </div>
    </div>
  );
};

export default FoodPresentationSection;
