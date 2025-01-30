// export const products = [
//     {
//         id: 1,
//         title: "Stylish Jacket",
//         image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
//         // price: 49.99,
//         description: "A comfortable and stylish jacket for all seasons.",
//         // rating: { rate: 4.5, count: 120 },
//         button: 1
//     },
//     {
//         id: 2,
//         title: "Running Shoes",
//         image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
//         // price: 69.99,
//         description: "Lightweight running shoes designed for speed.",
//         button: 1
//         // rating: { rate: 4.7, count: 89 },
//     },
//     {
//         id: 3,
//         title: "Classic Watch",
//         image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
//         // price: 89.99,
//         description: "A classic timepiece for everyday elegance.",
//         button: 1
//         // rating: { rate: 4.3, count: 75 },
//     },
//     {
//         id: 4,
//         title: "Backpack",
//         image: "https://images.unsplash.com/photo-1527814050087-3793815479db",
//         // price: 59.99,
//         description: "Durable backpack perfect for travel and work.",
//         button: 1
//         // rating: { rate: 4.8, count: 65 },
//     },
// ];
 

// export const domains = [
//   {
//     id: 1,
//     image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
//     title: "Domain 1",
//     details: "Beautiful water landscapes",
//   },
//   {
//     id: 2,
//     image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
//     title: "Domain 2",
//     details: "Urban tech vibes",
//   },
//   {
//     id: 3,
//     image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
//     title: "Domain 3",
//     details: "Majestic mountain ranges",
//   },
//   {
//     id: 4,
//     image: "https://images.unsplash.com/photo-1527814050087-3793815479db",
//     title: "Domain 4",
//     details: "Relaxing beach sunset",
//   },
//   {
//     id: 5,
//     image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
//     title: "Domain 5",
//     details: "Serene forest walk",
//   },
// ];

export interface CardItem {
  id: number;
  title: string;
  description: string;
  image: string;
  price: string;
}

const cardData: CardItem[] = [
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
];

export default cardData;
