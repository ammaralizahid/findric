export interface CardItem {
  id: number;
  title: string;
  description: string;
  image: string;
  price: string;
}
export interface ProductListAItems {
  id: number;
  image: string;
  name: string;
  stars: number;
  price: number;
  discountPercentage: number;
}

export const productListData: ProductListAItems[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1688413467024-c539918fdd7c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stars: 5,
    name: "Men Hooded",
    price: 130.00,
    discountPercentage: 20, // Added discount
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600952841320-db92ec4047ca?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stars: 4,
    name: "Men Hooded",
    price: 110.00,
    discountPercentage: 40, // Added discount
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1626770537547-66e789b70e2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stars: 5,
    name: "Men Hooded",
    price: 90.00,
    discountPercentage: 10, // Added discount
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1688413467024-c539918fdd7c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stars: 4,
    name: "Men Hooded",
    price: 130.00,
    discountPercentage: 20, // Added discount
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1624886656674-9bf7352dfb52?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stars: 5,
    name: "Men Hooded",
    price: 130.00,
    discountPercentage: 20, 
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1714935101690-f9e9bce595c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stars: 3,
    name: "Men Hooded",
    price: 130.00,
    discountPercentage: 20, // Added discount
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1596574115487-0553492c1923?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stars: 5,
    name: "Men Hooded",
    price: 130.00,
    discountPercentage: 20, // Added discount
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1710251752389-c0b0c581c632?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stars: 5,
    name: "Men Hooded",
    price: 130.00,
    discountPercentage: 20, // Added discount
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1648821244861-7ef997225f14?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stars: 4,
    name: "Men Hooded",
    price: 130.00,
    discountPercentage: 20, // Added discount
  },
];
export const SingleproductListData: ProductListAItems[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1688413467024-c539918fdd7c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stars: 5,
    name: "Men Hooded",
    price: 130.00,
    discountPercentage: 20, // Added discount
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600952841320-db92ec4047ca?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stars: 4,
    name: "Men Hooded",
    price: 90.00,
    discountPercentage: 40, // Added discount
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1626770537547-66e789b70e2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stars: 5,
    name: "Men Hooded",
    price: 110.00,
    discountPercentage: 15, // Added discount
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1688413467024-c539918fdd7c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stars: 4,
    name: "Men Hooded",
    price: 130.00,
    discountPercentage: 20, // Added discount
  },
  
];

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
    description: "Limited time offer with special discounts button",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    price: "$149.99",
  },
  {
    id: 3,
    title: "New Arrival",
    description: "Latest product in our collection fixed this error",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    price: "$299.99",
  },
  {
    id: 4,
    title: "Best Seller",
    description: "Our most popular product coming from this place",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f",
    price: "$249.99",
  },
  {
    id: 5,
    title: "Special Edition",
    description: "Limited edition product with unique features from ",
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
    description: "Limited time offer with special discounts six round ",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    price: "$149.99",
  },
  {
    id: 8,
    title: "Premium Product",
    description: "High-quality premium product with amazing features",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    price: "$199.99",
  },
  {
    id: 9,
    title: "Exclusive Deal",
    description: "Limited time offer with special discounts button",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    price: "$149.99",
  },
  {
    id: 10,
    title: "New Arrival",
    description: "Latest product in our collection fixed this error",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    price: "$299.99",
  },
  {
    id: 11,
    title: "Best Seller",
    description: "Our most popular product coming from this place",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f",
    price: "$249.99",
  },
  {
    id: 12,
    title: "Special Edition",
    description: "Limited edition product with unique features from ",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
    price: "$399.99",
  },
 
];

// mock/products.ts
export const SingleProducts = [
  {
    id: 1,
    name: 'Men Hooded Jacket',
    price: 130.00,
    description: 'Premium quality hooded jacket with multiple functional pockets',
    sku: 'JKT-2024',
    category: 'Outerwear',
    tags: ['Men', 'Jacket', 'Winter', 'Hooded'],
    images: [
      'https://images.unsplash.com/photo-1688413467024-c539918fdd7c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Front view
      'https://images.unsplash.com/photo-1624886656674-9bf7352dfb52?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Side view
      'https://images.unsplash.com/photo-1566669573233-38a0113fbc9d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Back view
      'https://images.unsplash.com/photo-1564077439888-928a90061fb3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'  // Detail close-up
    ],
    thumbnails: [
      'https://images.unsplash.com/photo-1688413467024-c539918fdd7c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1624886656674-9bf7352dfb52?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1566669573233-38a0113fbc9d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1688413467024-c539918fdd7c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    rating: 4.5,
    reviewsCount: 23,
    
    features: [
      'Water-resistant polyester shell',
      'Adjustable drawcord hem',
      // 'Multiple zippered pockets',
      // 'Removable hood with faux fur trim'
    ],
    discountPercentage: 40,
  }
];

// export default {cardData, productListData};
