import LOGO from "../assets/svg/Logo.svg";
import LOGOTEXT from "../assets/svg/logoTest.svg";
import FB from "../assets/svg/fb.svg";
import INS from "../assets/svg/ins.svg";
import X from "../assets/svg/x.svg";
import LINKDIN from "../assets/svg/linkdin.svg";

const Footer = ({ scrollContainerRef }) => {
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
    <footer className="bg-white mt-16 sm:mt-32 p-2 sm:p-8 sm:px-24">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="flex flex-col items-start mb-4 -ml-4 sm:-ml-0">
          <div className="flex items-center">
            <img src={LOGO} alt="WhitePenguin Logo" className="h-16 w-auto" />
            <img
              src={LOGOTEXT}
              alt="WhitePenguin Logo"
              className="h-6 w-auto -ml-3 mt-2 md:h-8"
            />
          </div>
          <div className="flex space-x-2 mt-2 ml-4">
            <a
              href="https://www.facebook.com/share/1BmM5qKBht/"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <div className="w-8 h-8 bg-[#008080] flex items-center justify-center rounded">
                <img src={FB} alt="Facebook" className="w-4 h-4" />
              </div>
            </a>

            <a
              href="https://www.instagram.com/whitepenguinsolutions/profilecard/?igsh=cTk1YndyMmFtaDJr"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <div className="w-8 h-8 bg-[#008080] flex items-center justify-center rounded">
                <img src={INS} alt="Twitter" className="w-4 h-4" />
              </div>
            </a>

            <a
              href="https://x.com/WhiteP35234?t=-2BOQx3a5YSmA1S1c99Y-A&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <div className="w-8 h-8 bg-[#008080] flex items-center justify-center rounded">
                <img src={X} alt="Instagram" className="w-4 h-4" />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/company/whitepenguin/"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <div className="w-8 h-8 bg-[#008080] flex items-center justify-center rounded">
                <img src={LINKDIN} alt="LinkedIn" className="w-4 h-4" />
              </div>
            </a>
          </div>
        </div>

        <div className="flex flex-col mb-5 sm:mb-0 md:flex-row space-y-2 md:space-y-0 md:space-x-8 text-[#3B3B3B]">
          <div>
            <h3 className="font-semibold border-b-2 border-[#008080] mb-2 text-[#008080] font-poppins inline-block pb-1">
              Links
            </h3>
            <ul className="space-y-5 mt-5 font-medium">
              <li>
                <a
                  href="#waitlist"
                  onClick={(e) => handleScrollTo(e, "waitlist")}
                  className="hover:underline font-poppins"
                >
                  Waitlist
                </a>
              </li>
              <li>
                <a
                  href="#builtFor"
                  onClick={(e) => handleScrollTo(e, "builtFor")}
                  className="hover:underline font-poppins"
                >
                  Who is it For?
                </a>
              </li>
              <li>
                <a
                  href="#how"
                  onClick={(e) => handleScrollTo(e, "how")}
                  className="hover:underline font-poppins"
                >
                  How It works
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  onClick={(e) => handleScrollTo(e, "solutions")}
                  className="hover:underline font-poppins"
                >
                  Solutions
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => handleScrollTo(e, "faq")}
                  className="hover:underline font-poppins"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col space-y-8 md:items-end">
          <div className="mt-4 md:mt-0">
            <a
              href="https://form.jotform.com/252058347724157"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#FF7C80] text-white px-4 py-2 rounded-lg font-poppins">
                Quick Survey
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-4 mb-4">
        <hr className="mb-4"></hr>
        <p>Copyright © 2025 WhitePenguin. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
