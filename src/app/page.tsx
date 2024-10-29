import Button from "./components/Button";
import Demo from "./components/Demo/Demo";
import { Features } from "./components/Features";
import Products from "./components/Products/Products";
import StarRating from "./components/StarRating/StarRating";
import Support from "./components/Support/Support";
import VideoPlayer from "./components/VideoPlayer";
import Feature from "./components/Feature/Feature";
import Pricing from "./components/Pricing/Pricing"
import useSectionMeta from './utils/useSectionMeta';

const Home = () => {
  // useSectionMeta();
  return (
    <div className="relative mx-auto ">
      <div className="flex grid grid-cols-1 md:grid-cols-2 gap-8 inset-0 bg-gradient-to-br from-[#FFFFFF]  to-[#e5ffe4] opacity-90 shadow-xl">
        {/* Video Player should be on top for small screens, and on the right for larger screens */}
        <div className="order-1 md:order-2 md:absolute top-0 right-0 w-full md:h-[600px] md:w-[600px] lg:h-[900px] lg:w-[900px] overflow-hidden z-[9999]">
          <VideoPlayer videoSrc="/assets/demo-video.mp4" />
        </div>

        {/* Content Section should be below the video for small screens, and on the left for larger screens */}
        <div className="order-2 md:order-1 flex items-center justify-center lg:h-[800px] p-8 bg-opacity-80 rounded-lg lg:translate-y-[-10%]">
          <div className=" md:w-[450px] flex flex-col gap-3 font-montserrat">
            <Button
              type={"button"}
              text={"Get Started Free 10 Days Trial"}
              className="xs:text-customExtraSmall xs:text-14"
              style={{ borderRadius: "100px" }}
            />
            <h1 className="text-24 font-bold mb-4">
              Time tracking for desk, mobile & remote teams.
            </h1>
            <p className="mb-4 text-18">
              Track time & Increase your team&#39;s productivity by up to 20%.
              That’s an extra day every week.{" "}
              {/* Remove the wrapping <p> tag or replace with <div> */}
            </p>
            <div>
              <StarRating rating={4.9} maxRating={5} className="text-base" />
            </div>
            Made with ❤️
            <Button
              type={"button"}
              text={"No Credit Cards Required"}
              className="bg-customGreen text-white font-semibold xs:text-customExtraSmall xs:text-14"
              style={{ borderRadius: "100px" }}
            />
          </div>
        </div>
      </div>
      {/* Features Section */}
      <div id="features-section" className="mt-[40%] sm:px-5 lg:mt-0">
        <Features />
      </div>
      <div>
        <Feature/>
      </div>
      <div>
        <Products />
      </div>
      <div id="pricing-section" className="md:mt-16 lg:mt-6">
        <Pricing />
      </div>
      <div id="book-demo">
        <Demo />
      </div>
      <div className="" id="support">
        <Support />
      </div>
    </div>
  );
};

export default Home;
