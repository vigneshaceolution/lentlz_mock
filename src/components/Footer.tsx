import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-white py-6 lg:py-12 min-h-[100px] font-[Montserrat] bg-[#100F0D] lg:bg-transparent lg:mt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 lg:pt-20 lg:px-20 flex flex-col lg:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 mb-4 sm:mb-6 lg:mb-0">
          <span className="font-medium text-sm sm:text-base">Powered by</span>
          <span className="flex items-center text-white text-base font-medium">
            <img
              src="/assets/acelutionIcon.png"
              alt="acelutionIcon"
              className="w-32 h-7 sm:w-36 sm:h-8 lg:w-44 lg:h-10 mx-0.5 inline-block"
            />
          </span>
        </div>

        {/* Right Side */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-end gap-2 sm:gap-3 lg:gap-4 font-normal">
          <a href="#" className="hover:underline text-sm sm:text-base text-center sm:text-left">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline text-sm sm:text-base text-center sm:text-left">
            Terms & Conditions
          </a>
          <a href="#" className="hover:underline text-sm sm:text-base text-center sm:text-left">
            Cookie Policy
          </a>
          <a href="#" className="hover:underline text-sm sm:text-base text-center sm:text-left">
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;