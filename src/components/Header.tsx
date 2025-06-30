import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full z-50 font-['Montserrat'] pt-2 sm:pt-4 md:pt-6 -mb-1 lg:mb-0 lg:pt-0 xl:pt-10 relative bg-[#114F3D] lg:bg-transparent ">
      <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-10 pt-0 xl:px-14 2xl:px-20 relative">
  {/* Logo inside container */}
  <div className="absolute top-1 left-2 sm:top-2 sm:left-4 md:top-4 md:left-6 lg:top-6 lg:left-8 xl:top-10 xl:left-12 2xl:left-30 z-40">
    <img
      src="/assets/logo.png"
      alt="Lentlz Logo"
      className="w-[80px] h-[65px] xs:w-[100px] xs:h-[80px] sm:w-[120px] sm:h-[100px] md:w-[140px] md:h-[115px] lg:w-[160px] lg:h-[130px] xl:w-[180px] xl:h-[150px] 2xl:w-[220px] 2xl:h-[180px] object-contain"
    />
  </div>
      {/* Logo */}
      <div className="absolute top-1 left-2 sm:top-2 sm:left-4 md:top-4 md:left-6 lg:top-6 lg:left-8 xl:top-10 xl:left-12 2xl:left-30 z-40">
        <img
          src="/assets/logo.png"
          alt="Lentlz Logo"
          className="w-[80px] h-[65px] xs:w-[100px] xs:h-[80px] sm:w-[120px] sm:h-[100px] md:w-[140px] md:h-[115px] lg:w-[160px] lg:h-[130px] xl:w-[180px] xl:h-[150px] 2xl:w-[220px] 2xl:h-[180px] object-contain"
        />
      </div>

      <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-10 pt-0 xl:px-14 2xl:px-20">
        <div className="flex items-center justify-end h-12 xs:h-14 sm:h-16 md:h-20 lg:h-24 xl:h-28 2xl:h-32">
          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-3 sm:space-x-4 md:space-x-5 lg:space-x-6 2xl:space-x-8">
            <a href="#about" className="text-[#F6A70B] hover:text-yellow-400 text-[13px] sm:text-[14px] xl:text-[15px] 2xl:text-[16.9px] font-medium px-1 sm:px-2">
              About Lentlz
            </a>
            <a href="#menu" className="text-[#F6A70B] hover:text-yellow-400 text-[13px] sm:text-[14px] xl:text-[15px] 2xl:text-[16.9px] font-medium px-1 sm:px-2">
              See Menu
            </a>
            <a href="#contact" className="text-[#F6A70B] hover:text-yellow-400 text-[13px] sm:text-[14px] xl:text-[15px] 2xl:text-[16.9px] font-medium px-1 sm:px-2">
              Contact Us
            </a>

            <button className="text-[#F44E5D] hover:text-pink-400 text-[13px] sm:text-[14px] xl:text-[15px] 2xl:text-[16.9px] font-medium flex items-center px-1 sm:px-2">
              Log In
              <div className="ml-2 w-4 h-4 xl:w-5 xl:h-5 bg-[#F44E5D] rounded-full flex items-center justify-center">
                <span className="text-white text-[10px] xl:text-xs">👤</span>
              </div>
            </button>

            <button className="bg-[#F6A70B] text-[#FEFFEC] px-2 sm:px-3 xl:px-4 2xl:px-6 py-1.5 xl:py-2 rounded-2xl hover:bg-yellow-500 transition font-bold text-[13px] xl:text-[15px] 2xl:text-[16.9px]">
              Subscription
            </button>
          </nav>

          {/* Large Tablet Navigation */}
          <nav className="hidden lg:flex xl:hidden items-center space-x-2 sm:space-x-3 ">
            <a href="#about" className="text-[#F6A70B] text-[12px] sm:text-[13px] px-1 py-0.5">About</a>
            <a href="#menu" className="text-[#F6A70B] text-[12px] sm:text-[13px] px-1 py-0.5">Menu</a>
            <a href="#contact" className="text-[#F6A70B] text-[12px] sm:text-[13px] px-1 py-0.5">Contact</a>

            <button className="text-[#F44E5D] flex items-center px-1">
              <div className="w-4 h-4 bg-[#F44E5D] rounded-full flex items-center justify-center">
                <span className="text-white text-[9px]">👤</span>
              </div>
            </button>

            <button className="bg-[#F6A70B] text-[#FEFFEC] px-2 py-1.5 rounded-2xl hover:bg-yellow-500 text-[12px] sm:text-[13px] font-bold">
              Subscribe
            </button>
          </nav>

          {/* Medium Tablet Navigation */}
          <nav className="hidden md:flex lg:hidden items-center space-x-1.5 sm:space-x-2">
            <a href="#about" className="text-[#F6A70B] text-[11px] sm:text-[12px] px-1">About</a>
            <a href="#menu" className="text-[#F6A70B] text-[11px] sm:text-[12px] px-1">Menu</a>
            <a href="#contact" className="text-[#F6A70B] text-[11px] sm:text-[12px] px-1">Contact</a>

            <button className="text-[#F44E5D] px-1">
              <div className="w-3 h-3 bg-[#F44E5D] rounded-full flex items-center justify-center">
                <span className="text-white text-[8px]">👤</span>
              </div>
            </button>

            <button className="bg-[#F6A70B] text-[#FEFFEC] px-2 py-1 rounded-xl hover:bg-yellow-500 text-[11px] sm:text-[12px] font-bold">
              Subscribe
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-[#F6A70B] text-xl sm:text-2xl p-1.5 sm:p-2 hover:text-yellow-400 transition-colors rounded-lg hover:bg-yellow-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-3 sm:py-4 px-2 sm:px-4 mt-2 bg-[#114F3D] bg-opacity-95 border-t border-[#F6A70B]/30 backdrop-blur-sm rounded-b-lg shadow-lg animate-in slide-in-from-top-2 duration-200">
            <div className="space-y-2 sm:space-y-3">
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="block py-2 px-3 text-[#F6A70B] text-[14px] sm:text-[15px] hover:text-yellow-400 hover:bg-yellow-50 rounded-lg">
                About Lentlz
              </a>
              <a href="#menu" onClick={() => setIsMenuOpen(false)} className="block py-2 px-3 text-[#F6A70B] text-[14px] sm:text-[15px] hover:text-yellow-400 hover:bg-yellow-50 rounded-lg">
                See Menu
              </a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block py-2 px-3 text-[#F6A70B] text-[14px] sm:text-[15px] hover:text-yellow-400 hover:bg-yellow-50 rounded-lg">
                Contact Us
              </a>

              <div className="pt-3 border-t border-[#F6A70B]/20 mt-3">
                <button onClick={() => setIsMenuOpen(false)} className="flex items-center text-[#F44E5D] hover:text-pink-400 px-3 py-2 rounded-lg hover:bg-pink-50 text-[14px] sm:text-[15px] w-full">
                  Log In
                  <div className="ml-2 w-4 h-4 bg-[#F44E5D] rounded-full flex items-center justify-center">
                    <span className="text-white text-[10px]">👤</span>
                  </div>
                </button>
                <button onClick={() => setIsMenuOpen(false)} className="w-full mt-3 bg-[#F6A70B] text-[#FEFFEC] px-4 py-2 rounded-2xl hover:bg-yellow-500 text-[14px] sm:text-[16px] font-bold shadow-lg">
                  Subscription
                </button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </div>
    </header>

  );
};

export default Header;
