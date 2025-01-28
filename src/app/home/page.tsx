import React from "react";
import NavbarHome from "../components/Navbar/NavbarHome";
// import Collection from "../components/Collection/Collection";
import Categories from "../components/Categories/Categories";
import DomainCard from "../components/DomainsCards/DomainCard";

import {products,domains} from "../mookdata/mook";


export default function Home() {
  return (
    <div>
      <NavbarHome />
      {/* <Collection /> */}
      <section data-section="products" id="products-section" aria-labelledby="products-title">
        <h2 id="products-title" className="text-3xl font-semibold font-montserrat mt-10 text-center mt-12 text-customGreen">
          Our Categories
        </h2>
        <Categories products={products} />  
      </section>
      <section data-section="products" id="products-section" aria-labelledby="products-title">
        <h2 id="products-title" className=" text-customGreen  mt-20   flex font-montserrat font-semibold text-3xl justify-center text lg:px-4">
          Our Domains
        </h2>
        <DomainCard domains={domains} />  
      </section>
    </div>
  );
}
