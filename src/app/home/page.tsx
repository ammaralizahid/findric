import React from 'react';
import NavbarHome from '@/src/components/Navbar/NavbarHome';
import ProductSlider from '@/src/components/ProductSlider/ProductSlider';
import Product from '@/src/components/Product/Product';
import { cardData } from '@/src/mock/mock';
import SearchBar from '@/src/components/SearchBar/SearchBar';
import MapSection from '@/src/components/MapSection/MapSection';
// import { cardData } from '@/src/components/mock/mock';
// import cardData from '@/src/components/mock/mock';

export default function Home() {
  return (
    <div>
      <NavbarHome />

      <div className="container w-11/12 mx-auto  p-4 ">
      <SearchBar />
     </div>

    <section >
        <h2 id="products-title" className="text-3xl font-semibold font-montserrat mt-5  text-center text-customGreen">
        Google Maps
        </h2>

        
      <MapSection />
      </section>

{/* <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <SearchBar />
    </div> */}

      {/* First Slider */}
      <section data-section="products" id="products-section" aria-labelledby="products-title">
        <h2 id="products-title" className="text-3xl font-semibold font-montserrat mt-10  text-center text-customGreen">
          Our Categories
        </h2>
        <ProductSlider  autoScroll={true} scrollSpeed={4000} sliderId="categories">
          {cardData.length > 0 ? (
            cardData.map((item) => 
            <Product
             key={item?.id}  
             title={item?.title}
             image={item?.image}
             description={item?.description}
             />)
          ) : (
            <p className="text-center text-gray-500">No products available.</p>
          )}
        </ProductSlider>
      </section>

      {/* Second Slider */}
      <section data-section="products" id="products-section" aria-labelledby="products-title">
        <h2 id="products-title" className="text-customGreen mt-10  flex font-montserrat font-semibold text-3xl justify-center lg:px-4">
          Our Domains
        </h2>
        <ProductSlider  autoScroll={true} scrollSpeed={4000} sliderId="domains">
          {cardData.length > 0 ? (
            cardData.map((item) =>
              <Product
            key={item?.id}  
            title={item?.title}
            image={item?.image}
            description={item?.description}
            />)
          ) : (
            <p className="text-center text-gray-500">No products available.</p>
          )}
        </ProductSlider>
      </section>
    </div>
  );
}