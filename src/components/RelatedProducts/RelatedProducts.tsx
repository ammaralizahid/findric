import { SingleproductListData } from '@/src/mock/mock'
import React from 'react'
import { ProductListCards } from '../Shop/ProductListCrads'
import Link from 'next/link'

const RelatedProducts: React.FC = () => {
  return (
    <>
    
    <div className="container mx-auto bg-white font-montserrat py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
  <div className="mb-10 text-center space-y-4">
      <h2 className="text-4xl font-bold text-gray-900">
        Related Products
      </h2>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto">
        Discover complementary items that pair perfectly with your selection
      </p>
      <div className="inline-flex justify-center w-16 h-1.5 bg-[#20BEAD] rounded-full"></div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {/* {SingleproductListData?.map((product) => (
        <div 
          key={product?.id} 
          className="group relative "
        >
          <ProductListCards
            id={product?.id}
            image={product?.image}
            name={product?.name}
            price={product?.price}
            stars={product?.stars}
            // className="hover:shadow-xl" // Add className prop to cards
          />
        </div>
      ))} */}
      

              {SingleproductListData?.map((product) => {
          const actualPrice = product.price / (1 - product.discountPercentage / 100);
          return (
            <div 
          key={product?.id} 
          className="group relative "
        >
            <ProductListCards
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              stars={product.stars}
              actualPrice={actualPrice}
              discountPercentage={product.discountPercentage}
            />
            </div>
          );
        })}
    </div>

    {/* Optional View All Button */}
    <div className="mt-12 text-center">
    <Link
    href={"/product-list"}
     className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-lg font-semibold rounded-md text-white bg-[#20BEAD] hover:bg-[#1AA999] transition-colors duration-200 shadow-md hover:shadow-lg"
     >
        View All Products
        <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </div>
  </div>
</div>
    
    
    </>
  )
}

export default RelatedProducts