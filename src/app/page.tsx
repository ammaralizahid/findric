import Button from "./components/Button";
import Demo from "./components/Demo/Demo";
import { Features } from "./components/Features";
import Products from "./components/Products/Products";
import StarRating from "./components/StarRating/StarRating";
import Support from "./components/Support/Support";
import VideoPlayer from "./components/VideoPlayer";
// import Feature from "./components/Feature/Feature";
import Pricing from "./components/Pricing/Pricing";
import Animation from "./components/Animation/Animation";

const Home = async () => {
  return (
    <>
      <div className="relative mx-auto ">
        {/* Hero Section */}
        <section data-section="hero">
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 inset-0 bg-gradient-to-br from-[#FFFFFF]  to-[#e5ffe4] opacity-90 h-[424px] lg:h-[678px] shadow-xl relative"
            aria-labelledby="hero-section"
          >
            {/* Video Player should be on top for small screens, and on the right for larger screens */}
            <div className="order-1 md:order-2 md:absolute top-0 right-0 w-full md:h-[600px] md:w-[600px] lg:h-[800px] lg:w-[800px] overflow-hidden z-[9999]">
              <VideoPlayer videoSrc="/assets/demo-video.mp4" />
            </div>

            {/* Content Section should be below the video for small screens, and on the left for larger screens */}
            <div className="order-2 md:order-1 flex items-center justify-center lg:h-[800px] p-8 bg-opacity-80 rounded-lg lg:translate-y-[-10%] lg:mb-0 mb-36">
              <div className=" md:w-[300px] lg:w-[450px] flex flex-col gap-3 font-montserrat">
                <Button
                  type={"button"}
                  text={"Get Started For Free"}
                  className="text-12 lg:border-2 border border-customGreen text-customGreen lg:text-16 py-2 lg:font-semibold hover:bg-customGreen hover:text-white"
                  style={{ borderRadius: "100px" }}
                />
                <h1 className="lg:text-32 text-18 font-bold">
                  Run Your Business from Anywhere with FindNow
                </h1>
                <p className="mb-1 lg:text-24 text-14">
                  Get discovered by customers nearby, streamline your POS, and
                  manage inventory seamlessly on a platform that works for all.
                </p>
                <div className="flex items-center gap-2">
                  <StarRating
                    rating={4.9}
                    maxRating={5}
                    className="text-base"
                  />
                  <span className="text-gray-700 text-sm lg:text-base">
                    {" "}
                    4.2 out of 5 | Made with ❤️
                  </span>
                </div>

                <Button
                  type={"button"}
                  text={"No Credit Cards Required"}
                  className="bg-customGreen text-white font-semibold lg:text-16 text-12 py-2"
                  style={{ borderRadius: "100px" }}
                />
              </div>
            </div>
            {/* Centered Text at Bottom */}
            <div className="absolute bottom-0 left-0 right-0 text-center">
              <Animation />
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section
          data-section="features"
          id="features-section"
          aria-labelledby="features-title"
          className="pt-6 sm:px-5 lg:mt-0"
        >
          <h2
            id="features-title"
            className="features-title text-center font-montserrat text-4xl font-semibold mb-4"
          >
            Key Features
          </h2>
          <Features />
        </section>
        {/* Products Section */}
        <section
          data-section="products"
          id="products-section"
          aria-labelledby="products-title"
        >
          <h2
            id="products-title"
            className="text-4xl font-semibold font-montserrat mb-4 text-center mt-16 text-customGreen"
          >
            Our Domains
          </h2>
          <Products />
        </section>
        {/* Pricing Section */}
        <section
          data-section="pricing"
          id="pricing-section"
          aria-labelledby="pricing-title"
          className="md:mt-16 lg:mt-6"
        >
          <h2
            id="pricing-title"
            className="text-4xl text-center font-montserrat text-black font-semibold mb-4"
          >
            Choose Plans
          </h2>
          <Pricing />
        </section>
        {/* Demo Section */}
        <section
          data-section="demo"
          id="book-demo"
          aria-labelledby="demo-title"
        >
          <h2
            id="demo-title"
            className="text-3xl font-semibold mb-4 text-center text-white"
          >
            Appointment Scheduling
          </h2>
          <Demo />
        </section>
        {/* Support Section */}
        <section
          data-section="support"
          aria-labelledby="support-title"
          id="support"
        >
          <h2
            id="support-title"
            className="text-3xl font-semibold mb-4 text-center text-white"
          >
            Customer Support
          </h2>
          <Support />
        </section>
      </div>
    </>
  );
};

export default Home;
