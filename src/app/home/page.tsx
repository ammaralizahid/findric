import React from "react";
import NavbarHome from "../components/Navbar/NavbarHome";
// import Collection from "../components/Collection/Collection";
import Categories from "../components/Categories/Categories";
import DomainCard from "../components/DomainsCards/DomainCard";
import ProductSlider from "../components/ProductSlider/ProductSlider";
import Product from "../components/Product/Product";
import cardData  from "../components/mookdata/mook"; 


export default function Home() {
  return (
    <div>
      <NavbarHome />
      {/* <Collection /> */}
      <section data-section="products" id="products-section" aria-labelledby="products-title">
        <h2 id="products-title" className="text-3xl font-semibold font-montserrat mt-10 text-center  text-customGreen">
          Our Categories
        </h2>
        <ProductSlider>
        {cardData.length > 0 ? (
          cardData.map((item) => <Product key={item.id} item={item} />)
        ) : (
          <p className="text-center text-gray-500">No products available.</p>
        )}
      </ProductSlider>
        {/* <Categories products={products} /> */}
      </section>
      <section data-section="products" id="products-section" aria-labelledby="products-title">
        <h2 id="products-title" className=" text-customGreen  mt-20   flex font-montserrat font-semibold text-3xl justify-center text lg:px-4">
          Our Domains
        </h2>

        
        <ProductSlider>
        {cardData.length > 0 ? (
          cardData.map((item) => <Product key={item.id} item={item} />)
        ) : (
          <p className="text-center text-gray-500">No products available.</p>
        )}
      </ProductSlider>
        {/* <DomainCard domains={domains} />  */}
      </section>
    </div>
  );
}
