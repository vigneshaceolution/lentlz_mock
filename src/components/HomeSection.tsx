import { ChevronDown } from "lucide-react";

const HomeSection = () => {
  return (
    <div className="relative overflow-x-hidden overflow-y-visible">
      <section className="relative pt-15 pb-20 bg-[#114F3D] lg:bg-transparent">
        {/* Main content */}
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Image Section */}
            <div className="lg:w-1/2 mt-12 lg:mt-10 relative order-2 lg:order-1">
              <div className="relative z-10">
                {/* Main food bowl image */}
                <img
                  src="/assets/food-bowl.png"
                  alt="Healthy food bowl"
                  className="lg:ml-32 mx-auto lg:mx-0 w-[280px] sm:w-[350px] md:w-[400px] lg:w-[560px] object-cover"
                />

                {/* Fork - responsive positioning */}
                <img
                  src="/assets/fork.png"
                  alt="Fork"
                  className="absolute -top-5 left-[-20px] sm:left-[80px] md:left-[-25px]  md:-top-8 lg:left-30 
                           w-[120px] sm:w-[140px] md:w-[160px] lg:w-[200px] 
                           rotate-[-5deg]"
                />

                {/* Spoon - responsive positioning */}
                <img
                  src="/assets/spoon.png"
                  alt="Spoon"
                  className="absolute -top-14 sm:-top-10 md:-top-18 lg:-top-15 
                           right-[-40px] sm:right-[40px] md:right-[-40px] lg:-right-20 
                           w-[120px] sm:w-[140px] md:w-[160px] lg:w-[200px] 
                           rotate-[0deg]"
                />

                {/* Left Sparkle - responsive positioning */}
                <img
                  src="/assets/sparkle-left.png"
                  alt="Left Sparkle"
                  className="absolute left-[-40px] sm:left-[60px] md:left-[-50px] lg:left-22 
                           top-[60px] sm:top-[80px] md:top-[70px] lg:top-26 
                           w-[50px] sm:w-[60px] md:w-[70px] lg:w-[80px]"
                />

                {/* Right Sparkle - responsive positioning */}
                <img
                  src="/assets/sparkle-right.png"
                  alt="Right Sparkle"
                  className="absolute right-[-30px] sm:right-[60px] md:right-[-40px] lg:-right-32 
                           top-[60px] sm:top-[80px] md:top-[70px] lg:top-26 
                           w-[50px] sm:w-[60px] md:w-[70px] lg:w-[80px]"
                />

                {/* Top Leaf - responsive positioning */}
                <img
                  src="/assets/leaf-top.png"
                  alt="Top Leaf"
                  className="absolute -top-[60px] sm:-top-[70px] md:-top-[80px] lg:-top-25 
                           right-[80px] sm:right-[100px] md:right-[120px] lg:right-16 
                           w-[60px] sm:w-[70px] md:w-[80px] lg:w-[90px] 
                           rotate-[5deg]"
                />

                {/* Bottom Leaf - responsive positioning */}
                <img
                  src="/assets/leaf-bottom.png"
                  alt="Bottom Leaf"
                  className="absolute -bottom-10 
                           left-[80px] sm:left-[120px] md:left-[40px] md:-bottom-12 lg:left-35 
                           w-[60px] sm:w-[70px] md:w-[80px] lg:w-[90px] 
                           rotate-[-5deg]"
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="lg:w-1/2 z-10 order-1 lg:order-2 lg:pl-16 xl:pl-50 text-center lg:text-left mb-8 lg:mb-0 relative">
              <h1 className="mb-6 leading-tight">
                <span
                  className="text-orange-400 block"
                  style={{
                    fontFamily: "Fredoka One, cursive",
                    fontSize: "clamp(36px, 8vw, 60.1px)",
                  }}
                >
                  HEALTHY
                </span>
                <span
                  className="text-orange-400 block"
                  style={{
                    fontFamily: "Fredoka One, cursive",
                    fontSize: "clamp(36px, 8vw, 60.1px)",
                  }}
                >
                  INSIDE,
                </span>
                <span
                  className="block"
                  style={{
                    fontFamily: "Fredoka One, cursive",
                    fontSize: "clamp(36px, 8vw, 60.1px)",
                    color: "#F44E5D",
                  }}
                >
                  FRESH
                </span>
                <span
                  className="block"
                  style={{
                    fontFamily: "Fredoka One, cursive",
                    fontSize: "clamp(36px, 8vw, 60.1px)",
                    color: "#F44E5D",
                  }}
                >
                  OUTSIDE
                </span>
              </h1>

              <p
                className="text-white mb-8 max-w-lg leading-relaxed font-medium mx-auto lg:mx-0"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "clamp(13px, 2.5vw, 14px)",
                }}
              >
                Lentlz is a unique food delivery service offering{" "}
                <span className="hidden sm:inline">
                  <br />
                </span>
                healthy, preservative-free, home-style meals{" "}
                <span className="hidden sm:inline">
                  <br />
                </span>
                fresh from the oven.
              </p>

              <button
                className="bg-[#114F3D] text-white py-3 px-6 sm:px-8 rounded-full hover:bg-opacity-80 transition flex items-center group mx-auto lg:mx-0"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "clamp(13px, 2.5vw, 14px)",
                  fontWeight: 600,
                }}
              >
                Learn More
                <div className="ml-3 w-6 h-6 bg-white rounded-full flex items-center justify-center transition">
                  <ChevronDown className="w-5 h-5 text-[#114F3D]" />
                </div>
              </button>

              {/* Side Leaf - only show on large screens */}
              <img
                src="/assets/leaf-side.png"
                alt="Side Leaf"
                className="absolute right-0 bottom-5 w-[150px] rotate-[-5deg] hidden lg:block lg:-right-5 lg:-bottom-16"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeSection;
