import { useState } from "react";
import { MenuIcon } from "../assets/resources";
import Logo from "../assets/svg/Logo.svg";
import LogoText from "../assets/svg/logoTest.svg";

const Navbar = ({ scrollContainerRef }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const container = scrollContainerRef.current;
    if (!container) return;

    const target = container.querySelector(`#${id}`);
    if (target) {
      container.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="flex items-center justify-between px-2 sm:px-8 py-4  bg-white">
      {/* Left: Logo */}
      <div className="flex items-center gap-1">
        <img
          src={Logo}
          alt="WhitePenguin Logo"
          className="h-12 sm:h-16 w-auto"
        />
        <img
          src={LogoText}
          alt="WhitePenguin Logo"
          className="h-5 sm:h-6 w-auto -ml-3 mt-2 md:h-8"
        />
      </div>

      <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <a
          href="#waitlist"
          onClick={(e) => handleScrollTo(e, "waitlist")}
          className="hover:text-teal-600 font-poppins text-[#4B5563] text-18px"
        >
          Waitlist
        </a>
        <a
          href="#builtFor"
          onClick={(e) => handleScrollTo(e, "builtFor")}
          className="hover:text-teal-600 font-poppins text-[#4B5563] text-18px"
        >
          Who is it For?
        </a>
        <a
          href="#how"
          onClick={(e) => handleScrollTo(e, "how")}
          className="hover:text-teal-600 font-poppins text-[#4B5563] text-18px"
        >
          How It Works
        </a>
        <a
          href="#solutions"
          onClick={(e) => handleScrollTo(e, "solutions")}
          className="hover:text-teal-600 font-poppins text-[#4B5563] text-18px"
        >
          Solutions
        </a>
        <a
          href="#faq"
          onClick={(e) => handleScrollTo(e, "faq")}
          className="hover:text-teal-600 font-poppins text-[#4B5563] text-18px"
        >
          FAQ
        </a>
      </div>

      {/* Right: Button */}
      <div className="hidden md:inline-block">
        <a
          href="https://form.jotform.com/252058347724157"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-[#2BA197] text-white font-poppins px-3 sm:px-6 py-1 xs:py-2 rounded-lg shadow-xl hover:scale-105 transform transition duration-300 ease-in-out">
            Join Waitlist
          </button>
        </a>
      </div>
      {/* Humburger Menu */}
      <div className="relative inline-block md:hidden">
        <img
          src={MenuIcon}
          alt="Menu icon"
          className="cursor-pointer"
          width={35}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        {isMenuOpen && (
          <div className="absolute right-0 mt-2 bg-white shadow-xl rounded-lg px-4 py-5 z-50 space-y-3 w-[220px]">
            <a
              href="#waitlist"
              onClick={(e) => handleScrollTo(e, "waitlist")}
              className="block text-gray-700 hover:text-teal-600 font-poppins"
            >
              Waitlist
            </a>
            <a
              href="#builtFor"
              onClick={(e) => handleScrollTo(e, "builtFor")}
              className="block text-gray-700 hover:text-teal-600 font-poppins"
            >
              Who is it For?
            </a>
            <a
              href="#how"
              onClick={(e) => handleScrollTo(e, "how")}
              className="block text-gray-700 hover:text-teal-600 font-poppins"
            >
              How It Works
            </a>
            <a
              href="#solutions"
              onClick={(e) => handleScrollTo(e, "solutions")}
              className="block text-gray-700 hover:text-teal-600 font-poppins"
            >
              Solutions
            </a>
            <a
              href="#faq"
              onClick={(e) => handleScrollTo(e, "faq")}
              className="block text-gray-700 hover:text-teal-600 font-poppins"
            >
              FAQ
            </a>
            <div className="w-full flex items-center justify-center">
              <a
                href="https://form.jotform.com/252058347724157"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-[#2BA197] mt-5 text-white font-poppins px-3 sm:px-6 py-1 xs:py-2 rounded-lg shadow-xl hover:scale-105 transform transition duration-300 ease-in-out">
                  Join Waitlist
                </button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
