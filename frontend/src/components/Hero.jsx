import { assets } from "../assets/assets";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="bg-white py-12">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="text-center lg:text-left space-y-6 flex-1">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Desire{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Food
            </span>{" "}
            <br />
            for Your Taste
          </h1>
          <p className="text-gray-600 text-base">
            Food is what we eat to stay alive and healthy. It comes in many
            different forms and flavors, from fruits and vegetables to meats and
            grains.
          </p>
          <Button className={"px-5 cursor-pointer"} variant="destructive">
            Order Now
          </Button>
        </div>

        {/* Right Image */}
        <div className="relative flex-1 flex justify-end items-end">
          {/* Background box centered behind the image */}
          <div className="absolute bottom-0 max-w-[400px] max-h-[300px] w-full h-full bg-[#FF9E0C] rounded-[2rem] z-0"></div>

          {/* Hero Image */}
          <img
            src={assets.heroImage}
            alt="Hero"
            className="relative z-10 w-full max-w-[400px]"
          />
          <div className="absolute left-[120px] top-[100px] bg-white rounded-lg shadow-lg border border-gray-100 flex items-center gap-4"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
