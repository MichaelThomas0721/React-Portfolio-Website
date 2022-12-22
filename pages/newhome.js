import Image from "next/image";
import LanguageCard from "./../components/Home/LanguageCard";
import LetterShift from "../components/Home/LetterShift";
import Typing from "../components/Home/Typing";

export default function NewHome() {
  return (
    <div>
      <section className="min-h-screen bg-darkGrey flex flex-row">
        <div className="w-1/2">
          <div className="m-auto w-fit">
            <p className="text-ti-align-left mt-40 text-offWhite text-base mb-0">
              Hello, My Name is
            </p>
            <LetterShift
              word="Michael Thomas"
              updateSpeed={30}
              discoverSpeed={15}
              className="w-fit cursor-pointer select-none text-ti-align-left text-lightTeal text-5xl mt-0 mb-0 pt-3 pb-3 font-bold"
            />
            <Typing />
          </div>
        </div>
        <div className="w-1/2">
          <div className="aspect-square w-64 rounded-full left-1/2 -translate-x-1/2 border-2 border-white relative shadow-xl mt-12">
            <div className="w-full h-full rounded-full relative overflow-hidden bg-black">
              <Image
                src="/ProfileImageSitting.png"
                layout="fill"
                objectFit="cover"
                alt="Michael Thomas"
              />
            </div>
            <div className="w-[110%] h-[70%] rounded-full bottom-[15%] -left-[5%] bg-white absolute -z-10 animate-spin-slow" />
            <div className="absolute bg-transparent border-2 border-white w-[130%] aspect-square rounded-full -top-[15%] -left-[15%] animate-spin-slow">
              <div className="aspect-square bg-white w-5 rounded-full absolute top-24" />
            </div>
          </div>
          <div className="aspect-square w-32 relative"></div>
        </div>
      </section>
      <section className="min-h-screen bg-darkGrey">
        <LanguageCard />
      </section>
    </div>
  );
}
