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

<<<<<<< Feature/store
export interface Category {
  id: number;
  name: string;
  count: number;
}

export interface Condition {
  id: number;
  name: string;
  count: number;
}

export interface City {
  id: number;
  name: string;
  count: number;
}

export interface Color {
  name: string;
  count: number;
  hex: string;
}

export interface SortOption {
  label: string;
  value: string;
}



=======
>>>>>>> main
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

<<<<<<< Feature/store
export const categories: Category[] = [
  { id: 1, name: "Laptops", count: 159 },
  { id: 2, name: "Accessories", count: 45 },
  { id: 3, name: "Monitors", count: 30 },
  { id: 4, name: "Keyboards", count: 25 },
  { id: 5, name: "Mice", count: 20 },
  { id: 6, name: "Printers", count: 15 },
];

export const conditions: Condition[] = [
  { id: 1, name: "New", count: 89 },
  { id: 2, name: "Used", count: 45 },
  { id: 3, name: "Refurbished", count: 30 },
  { id: 4, name: "Open Box", count: 15 },
];

export const cities: City[] = [
  { id: 1, name: "Lahore", count: 120 },
  { id: 2, name: "Karachi", count: 75 },
  { id: 3, name: "Islamabad", count: 50 },
  { id: 4, name: "Rawalpindi", count: 40 },
  { id: 5, name: "Faisalabad", count: 30 },
  { id: 6, name: "Multan", count: 20 },
];

export const sortOptions: SortOption[] = [
  { label: 'High to Low', value: 'highToLow' },
  { label: 'Low to High', value: 'lowToHigh' },
  { label: 'Discount Low to High', value: 'discountLowToHigh' },
  { label: 'Discount High to Low', value: 'discountHighToLow' },
  { label: 'UPTO 25% OFF', value: 'upto25Off' },
  { label: 'Contact seller', value: 'contactSeller' },
];

export const colors: Color[] = [
  { name: "Black", count: 59, hex: "#000000" },
  { name: "Silver", count: 54, hex: "#C0C0C0" },
  { name: "Matte Black", count: 9, hex: "#28282B" },
  { name: "Gray", count: 8, hex: "#808080" },
  { name: "Platinum Silver", count: 6, hex: "#CECECE" },
  { name: "Matte Silver", count: 4, hex: "#B6B6B6" },
  { name: "Phantom Silver", count: 3, hex: "#8F8F8F" },
  {
    name: "Silver & Black",
    count: 3,
    hex: "linear-gradient(to right, #C0C0C0 50%, #000000 50%)",
  },
  { name: "Awesome Black", count: 2, hex: "#1A1A1A" },
  { name: "Carbon Black", count: 2, hex: "#1C1C1C" },
];

export const priceOptions: string[] = ["10,000", "20,000", "30,000", "40,000", "50,000"];

=======
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

>>>>>>> main
// export default {cardData, productListData};
