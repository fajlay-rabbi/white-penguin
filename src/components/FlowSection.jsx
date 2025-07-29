import { useState } from "react";
import Family from "../assets/svg/family.svg";
import GRA from "../assets/svg/gra.svg";
import { PhoneBlurb } from "../assets/resources";

const steps = [
  {
    title: "Create School Profile",
    desc: "Add photos, tour times, class rules",
  },
  {
    title: "Set Fees & Invoicing Rules",
    desc: "Add tuition, lunch, bus fees, discount etc",
  },
  {
    title: "Collect Payments Online",
    desc: "Parents pay via Paystack (card, bank transfer, or USSD)",
  },
  {
    title: "Track Attendance",
    desc: "Staff & student check-in with QR or PIN",
  },
  {
    title: "Send Updates",
    desc: "Use templates or write custom messages",
  },
  {
    title: "Review Reports",
    desc: "Export data by child, class, or term",
  },
];

const FlowSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState(null);

  return (
    <section id="how" className="py-12 bg-white text-center ml-0 md:ml-12 overflow-hidden">
      <div className="container flex flex-col sm:flex-row items-center justify-between mx-auto mb-8 relative">
        <img
          src={GRA}
          alt="Student"
          className="w-32 h-32 md:w-48 md:h-48 ml-8"
        />
        <div className="flex-1 flex flex-col items-center">
          <h2 className="text-4xl sm:text-[4rem] font-bold text-[#2D9085] font-dongle mb-2 leading-7">
            From Enrollment to Every Day, <br /> Here's the Flow.
          </h2>
          <p className="text-[#131313] font-poppins mb-8">
            Simple steps to transform your school management.
          </p>
        </div>
        <img
          src={Family}
          alt="Family"
          className="w-32 h-32 md:w-48 md:h-48 mr-8 hidden sm:inline-block"
        />
      </div>
      <div className="relative flex flex-col md:flex-row justify-center items-center gap-4">

        <img
          src={PhoneBlurb}
          alt="Phone"
          className="w-80 h-96 md:w-[430px] md:h-auto z-10 relative"
        />

        <div className="relative ml-20 text-left justify-end space-y-8 md:ml-32">
          {/* Vertical line */}
          <div className="absolute left-4 top-[3rem] bottom-[1.75rem] w-[1px] bg-[#4B5563] z-0"></div>
          {steps.map((step, idx) => (
            <div
              className="flex items-center relative z-10"
              key={idx}
              onMouseEnter={() => setHoveredStep(idx)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <span
                className={`w-8 h-8 flex items-center justify-center rounded-full relative z-10 cursor-pointer transition-all duration-200 select-none
                  ${
                    activeStep === idx
                      ? "bg-[#0D8A7F] text-white"
                      : hoveredStep === idx
                      ? "bg-[#0D8A7F80] text-white"
                      : "bg-[#FEF7F3] text-gray-500"
                  }`}
                onClick={() => setActiveStep(idx)}
                tabIndex={0}
                role="button"
                aria-pressed={activeStep === idx}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setActiveStep(idx);
                }}
              >
                {String(idx + 1).padStart(2, "0")}
              </span>
              <div className="ml-4">
                <h3
                  className={`font-semibold text-xl font-poppins transition-colors duration-200 ${
                    activeStep === idx || hoveredStep === idx
                      ? "text-[#131313]"
                      : "text-[#929292]"
                  }`}
                >
                  {step.title}
                </h3>
                <p
                  className={`font-poppins text-base md:text-lg transition-colors duration-200 ${
                    activeStep === idx || hoveredStep === idx
                      ? "text-[#131313]"
                      : "text-[#929292]"
                  }`}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlowSection;
