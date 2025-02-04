export interface CardItem {
  id: number;
  title: string;
  description: string;
  image: string;
  price: string;
}

export const cardData: CardItem[] = [
  {
    id: 1,
    title: "Premium Product",
    description: "High-quality premium product with amazing features",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    price: "$199.99",
  },
  {
    id: 2,
    title: "Exclusive Deal",
    description: "Limited time offer with special discounts",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    price: "$149.99",
  },
  {
    id: 3,
    title: "New Arrival",
    description: "Latest product in our collection",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    price: "$299.99",
  },
  {
    id: 4,
    title: "Best Seller",
    description: "Our most popular product",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f",
    price: "$249.99",
  },
  {
    id: 5,
    title: "Special Edition",
    description: "Limited edition product with unique features",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
    price: "$399.99",
  },
  {
    id: 6,
    title: "Premium Product",
    description: "High-quality premium product with amazing features",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    price: "$199.99",
  },
  {
    id: 7,
    title: "Exclusive Deal",
    description: "Limited time offer with special discounts",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    price: "$149.99",
  },
];

export interface ProductListAItems {
  id: number;
  image: string;
  name: string;
  stars: number;
  price: number;
}

const ProductListData: ProductListAItems[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1688413467024-c539918fdd7c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stars: 5,
    name: "Men Hooded",
    price: 130.00,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600952841320-db92ec4047ca?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stars: 4,
    name: "Men Hooded",
    price: 130.00,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1626770537547-66e789b70e2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stars: 5,
    name: "Men Hooded",
    price: 130.00,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1688413467024-c539918fdd7c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stars: 4,
    name: "Men Hooded",
    price: 130.00,
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1624886656674-9bf7352dfb52?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stars: 5,
    name: "Men Hooded",
    price: 130.00,
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1714935101690-f9e9bce595c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stars: 3,
    name: "Men Hooded",
    price: 130.00,
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1596574115487-0553492c1923?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stars: 5,
    name: "Men Hooded",
    price: 130.00,
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1710251752389-c0b0c581c632?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stars: 5,
    name: "Men Hooded",
    price: 130.00,
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1648821244861-7ef997225f14?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stars: 4,
    name: "Men Hooded",
    price: 130.00,
  },
];

export default ProductListData;
