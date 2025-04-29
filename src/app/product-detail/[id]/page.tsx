import NavbarHome from "@/src/components/Navbar/NavbarHome";
import RelatedProducts from "@/src/components/RelatedProducts/RelatedProducts";
import SingleProductDetails from "@/src/components/SingleProduct/SingleProductDetails";
import SingleProductInfo from "@/src/components/SingleProduct/SingleProductInfo";
import { SingleProducts } from "@/src/mock/mock";
const page = () => {
  return (
    <>
      <NavbarHome />

      <div className="  mx-auto mt-10">
        {SingleProducts.map((product) => (
          <SingleProductInfo
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
            sku={product.sku}
            category={product.category}
            tags={product.tags}
            images={product.images}
            thumbnails={product.thumbnails}
            rating={product.rating}
            reviewsCount={product.reviewsCount}
            features={product.features}
            discountPercentage={product.discountPercentage}
            weight="750g"
            dimensions="30 × 20 × 5 cm"
            material="100% Organic Cotton"
            colors={[]}
            sizes={[]}
          />
        ))}
      </div>

      <div className="  mx-auto ">
        <SingleProductDetails />
      </div>

      <RelatedProducts />
    </>
  );
};

export default page;
