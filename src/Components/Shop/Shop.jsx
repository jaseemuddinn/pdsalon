import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";

const products = [
  {
    id: 1,
    name: "Product 1",
    image: "https://via.placeholder.com/150",
    originalPrice: 100,
    discountedPrice: 80,
    rating: 4.5,
    discount: 20,
  },
  {
    id: 2,
    name: "Product 2",
    image: "https://via.placeholder.com/150",
    originalPrice: 120,
    discountedPrice: 90,
    rating: 4.0,
    discount: 25,
  },
  {
    id: 3,
    name: "Product 3",
    image: "https://via.placeholder.com/150",
    originalPrice: 150,
    discountedPrice: 100,
    rating: 3.5,
    discount: 33,
  },
  {
    id: 4,
    name: "Product 4",
    image: "https://via.placeholder.com/150",
    originalPrice: 200,
    discountedPrice: 150,
    rating: 5.0,
    discount: 25,
  },
];

const Shop = () => {
  const [sortType, setSortType] = useState("");

  const sortedProducts = [...products].sort((a, b) => {
    if (sortType === "price") {
      return a.discountedPrice - b.discountedPrice;
    } else if (sortType === "rating") {
      return b.rating - a.rating;
    } else {
      return 0;
    }
  });

  return (
    <>
      <Navbar />
      <div className="p-4 md:w-9/12 w-11/12 mx-auto">
        <h1 className="text-4xl md:text-4xl py-10 font-bold">Shop</h1>
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-sm">Showing all {products.length} products</h1>
          <select
            className="border p-2"
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="price">Sort by Price</option>
            <option value="rating">Sort by Rating</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sortedProducts.map((product) => (
            <div key={product.id} className="p-4 hover:scale-105 duration-200 shadow hover:shadow-xl rounded-lg">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <span className="absolute top-2 left-2 bg-[#7b9e87] text-white text-sm px-2 py-1 rounded">
                  {product.discount}% OFF
                </span>
              </div>
              <div className="mt-4 text-center">
                <h2 className="text-lg font-bold">{product.name}</h2>
                <div className="flex justify-center items-center gap-4">
                  <div className="text-sm line-through text-gray-500">
                    ₹{product.originalPrice}
                  </div>
                  <div className="text-lg text-[#7b9e87] font-semibold">
                    ₹{product.discountedPrice}
                  </div>
                </div>
                <button className="mt-2 bg-[#7b9e87] font-semibold text-white px-4 py-2 rounded">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;
