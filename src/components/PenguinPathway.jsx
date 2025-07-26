import {
  BusyHappy,
  PenguinPathwayArrowImg,
  PenguinPathwayHouseImg,
} from "../assets/resources";
import { pathwayData } from "../utils/data";

const PenguinPathway = () => {
  return (
    <section className="py-12 px-5 md:px-16 bg-white overflow-hidden">
      <div className="w-full md:max-w-6xl mx-auto">
        <div className="flex items-center gap-10 md:gap-16">
          <div>
            <h2 className="font-dongle text-[#2D9085] font-bold text-4xl xs:text-5xl md:text-6xl 2xl:text-8xl">
              The Penguin Pathway
            </h2>
            <p className="font-poppins text-[#131313] text-sm xs:text-md">
              Your journey to a Thriving Preschool
            </p>
          </div>
          <div className="w-56 md:w-80">
            <img src={PenguinPathwayHouseImg} alt="Penguin Pathway" />
          </div>
        </div>
        <div className="flex items-center justify-center gap-10 sm:gap-5 md:gap-2">
          <div className="w-[460px] xl:w-[500px]  xl:-ml-56">
            <img
              src={PenguinPathwayArrowImg}
              alt="Arrow"
              className="w-full h-full"
            />
          </div>
          <div className="space-y-3 sm:space-y-5 md:space-y-7 mt-12 md:mt-16">
            {pathwayData.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center gap-5 -mr-6"
                  style={{ marginLeft: `-${index * 55}px` }}
                >
                  <img src={item?.icon} alt="icon" className="w-5 sm:w-7 md:w-8 lg:w-12" />
                  <p className="text-[#111827] font-medium text-xs sm:text-sm md:text-base lg:text-lg font-poppins">
                    {item?.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PenguinPathway;
