import Image from 'next/image';

export interface ProductItem {
  id: number;
  image: string;
  name: string;
  price: number;
  stars: number;
}


interface ProductCardProps {
  id: number;
  image: string;
  name: string;
  price: number;
  stars: number;
}

export const ProductListCards = ({  image, name, price, stars }: ProductCardProps) => {
  return (
    <div className="group relative">
      <div className="flex flex-col h-full bg-white rounded-xl shadow-lg hover:shadow-md transition-shadow duration-300">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden rounded-t-xl">
          <Image
            src={image}
            alt="Product"
            layout="fill"
            objectFit="cover"
            className="group-hover:scale-105 transition-transform duration-300"
          />

          {/* Overlay on Hover */}
          <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Favorite Button */}
          <button className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 sm:p-2 bg-white/80 rounded-full hover:bg-white transition-colors duration-300">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 hover:text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>

          {/* Add to Cart Button */}
          <div className="absolute inset-0 flex cursor-pointer items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="bg-teal-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-teal-700 transition-all duration-300 transform translate-y-8 group-hover:translate-y-0 flex items-center gap-2 mb-3 sm:mb-4 text-xs s">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Add to Cart
            </button>
          </div>
        </div>

        {/* Product Details */}
        <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1 mb-2 sm:mb-3">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-3 h-3 sm:w-4 sm:h-4 ${i < stars ? 'text-amber-400' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
              {name}
            </h3>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xl sm:text-2xl font-bold text-teal-600">${price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};