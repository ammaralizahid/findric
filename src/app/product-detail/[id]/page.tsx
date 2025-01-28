
import Head from 'next/head';
 const page = () => {
    const product = {
        name: "Premium Sport Sneakers",
        price: 199.99,
        originalPrice: 249.99,
        description:
          "Experience ultimate comfort with our premium sport sneakers. Featuring advanced cushioning technology and breathable mesh design, perfect for both athletic performance and casual wear.",
        rating: 5,
        reviews: 150,
        discount: "20% OFF",
        stockStatus: "In stock and ready to ship",
        images: [
          "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
          "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb",
          "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa",
          "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
        ],
      };
  return (
    <>
    <Head>
        <title>{product.name} - Buy Now</title>
        <meta
          name="description"
          content="Experience ultimate comfort with our premium sport sneakers. Perfect for both athletic performance and casual wear."
        />
        <meta property="og:title" content={`${product.name} - Buy Now`} />
        <meta property="og:description" content={product.description} />
        <meta
          property="og:image"
          content={product.images[0]}
        />
        <meta property="og:type" content="product" />
        <meta property="og:price:amount" content={product.price.toString()} />
        <meta property="og:price:currency" content="USD" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${product.name} - Buy Now`} />
        <meta name="twitter:description" content={product.description} />
        <meta name="twitter:image" content={product.images[0]} />
      </Head>
      <div className="bg-gray-50">
        <main className="container mx-auto px-4 py-8">
          <article className="flex flex-col lg:flex-row gap-8">
            <section className="lg:w-2/3">
              <div className="flex flex-col-reverse lg:flex-row gap-4">
                <div className="flex lg:flex-col gap-4 mt-4 lg:mt-0">
                  {product.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Sneaker thumbnail ${index + 1}`}
                      className="w-20 h-20 object-cover cursor-pointer rounded-lg hover:ring-2 ring-blue-500"
                    />
                  ))}
                </div>
                <div className="flex-1">
                  <img
                    id="mainImage"
                    src={product.images[0]}
                    alt="Main product"
                    className="w-full h-[500px] object-cover rounded-lg"
                  />
                </div>
              </div>
            </section>
            <section className="lg:w-1/3">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {Array.from({ length: product.rating }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-gray-600">
                  ({product.reviews} Reviews)
                </span>
              </div>
              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </span>
                <span className="ml-2 text-lg text-gray-500 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
                <span className="ml-2 text-sm text-green-500">
                  {product.discount}
                </span>
              </div>
              <p className="text-gray-600 mb-6">{product.description}</p>
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-2">
                  Select Color
                </h3>
                <div className="flex gap-2">
                  <button className="w-8 h-8 rounded-full bg-black ring-2 ring-black ring-offset-2"></button>
                  <button className="w-8 h-8 rounded-full bg-blue-600"></button>
                  <button className="w-8 h-8 rounded-full bg-red-600"></button>
                  <button className="w-8 h-8 rounded-full bg-gray-200"></button>
                </div>
              </div>
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-2">
                  Select Size
                </h3>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-2">
                  <option>Select Size</option>
                  <option>US 7</option>
                  <option>US 8</option>
                  <option>US 9</option>
                  <option>US 10</option>
                  <option>US 11</option>
                </select>
              </div>
              <button className="w-full bg-[#4DB6AC] text-white py-3 rounded-lg hover:bg-[#4DB6AC]/80 transition duration-300">
                Add to Cart
              </button>
              <p className="text-green-500 text-sm mt-4">
                ✓ {product.stockStatus}
              </p>
            </section>
          </article>
        </main>
      </div>
    </>
  )
}

export default page;