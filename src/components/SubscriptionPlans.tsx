import React, { useEffect, useState } from "react";
import MockBackground from "../assets/mock-bg.png";

interface Plan {
  id: number;
  dayCount: number;
  title: string;
  description: string;
  weeklyPrice: number;
  image: string; // Just the key, like "food1"
}

const imageMap: Record<string, string> = {
  food1: "/assets/Food Image 1.png",
  food2: "/assets/Food Image 2.png",
  food3: "/assets/Food Image 3.png",
};

const MealSubscriptionPlans: React.FC = () => {
  const [subscriptionPlans, setSubscriptionPlans] = useState<Plan[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/data/subscriptionPlansData.json");
      const data = await res.json();
      setSubscriptionPlans(data);
    }
    fetchData();
  }, []);

  // 🎯 Determine offset dynamically based on index
  const getOffsetClass = (index: number) => {
    if (index === 0) return "mt-0";
    return "lg:mt-20 mt-0";
  };

  return (
<div className="relative w-full mx-auto 
  sm:p-0 pb-0.5 md:pb-0.5 lg:p-0 
  sm:mb-0 md:mb-0 lg:mb-0
  font-[Inter]">
      {/* Background for mobile and tablet only */}
      <div
        className="absolute inset-0 bg-[url('/assets/mock-bg.png')] bg-cover bg-no-repeat opacity-10 sm:opacity-20 md:opacity-20 lg:hidden"
        aria-hidden="true"
      />
      <div className="relative w-full max-w-6xl mx-auto p-2 sm:p-4 md:p-6 lg:p-2 font-[Inter] mb-24">
        {/* Background for mobile and tablet only */}
        <div
          className="absolute inset-0 bg-[url('/assets/mock-bg.png')] bg-cover bg-no-repeat opacity-10 sm:opacity-20 md:opacity-20 lg:hidden"
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-x-4 md:gap-x-6 lg:gap-x-0 gap-y-8 sm:gap-y-10 md:gap-y-12 lg:gap-y-10 relative">
          {/* Desktop decorative images - hidden on mobile/tablet */}
          <img
            src="/assets/GreenLeafGroup.png"
            alt="GreenLeafGroup"
            className="absolute -left-20 -top-16 hidden lg:block"
          />

          <img
            src="/assets/right-leaf.png"
            alt="Right Leaf Decor"
            className="w-[190px] absolute -top-30 -right-16 hidden lg:block"
          />

          {subscriptionPlans.map((plan, index) => (
            <div
              key={plan.id}
              className={`relative w-full max-w-[280px] sm:max-w-[300px] md:max-w-[480px] lg:max-w-[340px] pt-3 sm:pt-4 md:pt-5 lg:pt-5 ${getOffsetClass(
                index
              )}`}
            >
              {/* Heading above the 3rd plan - responsive positioning */}
              {index === 2 && (
                <>
                  <img
                    src="/assets/OurSubscriptionsLeftBurst.png"
                    alt="Our Subscriptions Left Burst"
                    className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] absolute -top-6  sm:-top-7 md:-top-8 lg:-top-10 -left-10 lg:-left-16 sm:right-18 md:right-20 lg:right-77"
                  />
                  <h2
                    className="text-[22px] sm:text-[26px] md:text-[30px] lg:text-[38px] mb-3 sm:mb-4 text-start leading-tight"
                    style={{
                      fontFamily: "Fredoka One",
                      color: "#114F3D",
                    }}
                  >
                    OUR
                    <br />
                    SUBSCRIPTIONS
                  </h2>
                </>
              )}

              <div className="relative rounded-2xl shadow-none pt-4 sm:pt-5 md:pt-6 lg:pt-6 pb-0 px-0 overflow-visible">
                {/* Order Now Button - responsive sizing */}
                <button
                  className="absolute top-0.5 right-6 sm:right-8 md:right-40 lg:right-14 z-20 px-2 sm:px-2.5 md:px-3 lg:px-2 pb-1.5 sm:pb-2 pt-1 rounded-lg bg-white border-2 hover:bg-gray-100 transition-all shadow"
                  style={{
                    fontFamily: "Fredoka One",
                    fontSize: "12px",
                    borderColor: "#153704",
                    color: "#114F3D",
                  }}
                >
                  <span className="sm:text-sm md:text-base lg:text-lg">
                    ORDER NOW
                  </span>
                </button>

                {/* Plan Description Block - responsive layout */}
                <div className="flex items-start">
                  <div
                    className="w-1/2 px-2.5 sm:px-3 md:px-3.5 lg:px-4 pb-6 sm:pb-7 md:pb-8 lg:pb-10 pt-3 sm:pt-3.5 md:pt-4 lg:pt-5 rounded-l-3xl"
                    style={{ backgroundColor: "#FFAA29", minHeight: "180px" }}
                  >
                    <div
                      className="text-white font-bold leading-tight text-[18px] sm:text-[20px] md:text-[24px] lg:text-[34px]"
                      style={{ fontFamily: "Montserrat" }}
                    >
                      {plan.dayCount}-Day
                    </div>
                    <div
                      className="text-white font-bold leading-tight text-[18px] sm:text-[20px] md:text-[24px] lg:text-[34px]"
                      style={{ fontFamily: "Montserrat" }}
                    >
                      Plan
                    </div>
                  </div>

                  <div
                    className="w-[110px] sm:w-[120px] md:w-[130px] lg:w-[150px] px-2.5 sm:px-3 md:px-3.5 lg:px-4 py-4 sm:py-4.5 md:py-5 lg:py-6 flex items-center rounded-r-3xl"
                    style={{ backgroundColor: "#F44E5D", minHeight: "140px" }}
                  >
                    <p
                      className="text-white font-semibold text-[10px] sm:text-xs md:text-sm"
                      style={{ fontFamily: "Montserrat" }}
                    >
                      {plan.description}
                    </p>
                  </div>
                </div>

                {/* Food Image - responsive sizing */}
                <div className="relative z-10 -mt-20 sm:-mt-18 md:-mt-26 lg:-mt-24">
                  <img
                    src={imageMap[plan.image]}
                    alt={`${plan.title} meal`}
                    className="w-full object-contain"
                  />

                  {/* Price Tag Bubble - responsive positioning and sizing */}
                  <div className="absolute -bottom-3 sm:-bottom-3.5 md:-bottom-0 lg:-bottom-6 right-0.5 sm:right-1 md:right-1.5 lg:right-2 w-[100px] sm:w-[110px] md:w-[120px] lg:w-[140px] h-[50px] sm:h-[55px] md:h-[60px] lg:h-[70px] z-30">
                    <img
                      src="/assets/priceTagBubble.png"
                      alt="Price bubble"
                      className="w-full h-full object-contain"
                    />
                    <div
                      className="absolute inset-0 flex justify-center flex-row text-[11px] sm:text-[12px] md:text-[14px] lg:text-[16px] mt-4 sm:mt-4.5 md:mt-5 lg:mt-7 ml-2.5 sm:ml-3 md:ml-3.5 lg:ml-4"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      <span className="text-black mr-1 leading-none">
                        WEEKLY
                      </span>
                      <span
                        className="text-base sm:text-lg md:text-lg lg:text-xl"
                        style={{ color: "#F44E5D" }}
                      >
                        ${plan.weeklyPrice}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Bottom decorative image - hidden on mobile/tablet */}
          <img
            src="/assets/food-leaf.png"
            alt="Burst Decoration"
            className="absolute -bottom-31 left-90 hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
};

export default MealSubscriptionPlans;
