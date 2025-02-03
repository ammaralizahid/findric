import React from 'react';
import NavbarHome from '../components/Navbar/NavbarHome';
import ProductSlider from '../components/ProductSlider/ProductSlider';
import Product from '../components/Product/Product';
import cardData from '../components/mookdata/mook';

export default function Home() {
  return (
    <div>
      <NavbarHome />

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