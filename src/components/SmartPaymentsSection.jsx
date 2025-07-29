import React from "react";
import PHONE from "../assets/images/peaceOfMind.svg";
import Tick from "../assets/svg/star-2.svg";
import { PeaceOfMind } from "../assets/resources";

const features = [
  "Tour schools and apply online in minutes",
  "Receive real-time messages about your child’s day",
  "Get invoices, pay securely, and access receipts",
  "View updates, milestones, and teacher notes",
  "Communicate concerns easily with the school",
];

const SmartPaymentsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left: Text content */}
        <div className="md:w-1/2 md:ml-16">
          <h2 className="text-[3rem] md:text-[4rem] font-semibold  text-[#131313] font-dongle mb-6 leading-none">
            Smart Payments: Invoices, <br />
            Security & Receipts Made Easy
          </h2>

          <ul className="space-y-5">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <img
                  src={Tick}
                  alt="Check"
                  className="w-4 h-4 mt-1 mr-2 flex-shrink-0"
                />
                <p className="text-[#111827] text-lg font-medium font-poppins">
                  {feature}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:w-1/2 flex justify-center relative">
          <img
            src={PHONE}
            alt="Phone"
            className="w-80 h-96 md:w-[430px] md:h-auto z-10 relative"
          />
        </div>
      </div>
    </section>
  );
};

export default SmartPaymentsSection;
