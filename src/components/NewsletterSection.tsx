import React from "react";

const NewsletterSection: React.FC = () => {
  return (
    <div className="w-full h-full">
      {/* Outer container to take all available space */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-20 w-full relative -mb-3">
        {/* Top Decorative Image */}
        <div className="hidden lg:block absolute -top-0 right-28 transform -translate-x-1/2 z-20">
          <img
            src="/assets/top-decor.png"
            alt="Top Decoration"
            className="w-40"
          />
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-20 w-full">
          {/* Left Section */}
          <div className="flex-[2] mt-16 sm:mt-20 lg:mt-28 ml-0 sm:ml-4 lg:ml-10 text-center lg:text-left">
            <h2
              className="text-[24px] sm:text-[32px] lg:text-[40px] font-extrabold mb-4 px-2 sm:px-0"
              style={{ color: "#114F3D", fontFamily: "Montserrat, sans-serif" }}
            >
              Get to Know Us Better
            </h2>

            <p
              className="mb-6 text-sm sm:text-base font-medium px-2 sm:px-0"
              style={{ color: "#114F3D", fontFamily: "Montserrat, sans-serif" }}
            >
              Join our newsletter and save 10% off your first order
            </p>

            {/* Email Input & Button - Responsive layout */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0 px-2 sm:px-0">
              <input
                type="email"
                placeholder=""
                className="w-full sm:flex-1 px-3 sm:px-4 py-3 sm:py-4 rounded-lg outline-none text-sm sm:text-base"
                style={{
                  backgroundColor: "#E4E8EE",
                  fontFamily: "Montserrat, sans-serif",
                }}
              />
              <button
                className="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 rounded-lg text-white font-bold text-base sm:text-lg whitespace-nowrap"
                style={{
                  backgroundColor: "#FFA900",
                  color: "#153704",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                JOIN
              </button>
            </div>

            {/* Social Media */}
            <div className="px-2 sm:px-0">
              <p
                className="mb-3 font-bold text-base sm:text-lg"
                style={{
                  color: "#F44E5D",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Follow us on Social Media
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-4 sm:gap-6">
                <img
                  src="/assets/instagram.png"
                  alt="Instagram"
                  className="w-10 h-10 sm:w-12 sm:h-12"
                />
                <img
                  src="/assets/facebook.png"
                  alt="Facebook"
                  className="w-10 h-10 sm:w-12 sm:h-12"
                />
                <img
                  src="/assets/youtube.png"
                  alt="YouTube"
                  className="w-12 h-9 sm:w-16 sm:h-12"
                />
              </div>
            </div>
          </div>

          {/* Right Section - Family Image - Hidden on mobile/tablet, visible on desktop */}
          <div className="hidden lg:block flex-[2] relative w-full h-full">
            <img
              src="/assets/family-image.png"
              alt="Family"
              className="absolute right-0 -bottom-85 w-[550px] z-10"
            />
          </div>
        </div>

        {/* Mobile/Tablet Family Image - Shown only on smaller screens */}
        <div className="lg:hidden mt-8 sm:mt-12 flex justify-center px-4 pb-3 ">
          <img
            src="/assets/family-image.png"
            alt="Family"
            className="w-full max-w-[400px] sm:max-w-[500px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
