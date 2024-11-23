import React, { useState } from "react";
import { foodItems } from "../data/foodItems";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? foodItems
      : foodItems.filter((item) => item.category === selectedCategory);

  const categories = [
    "All",
    ...new Set(foodItems.map((item) => item.category)),
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Menu</h1>

        <div className="relative inline-block text-left">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Filter by Category
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-48 p-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-200"
          >
            {categories.map((category) => (
              <option
                key={category}
                value={category}
                className="text-gray-700 hover:bg-gray-100"
              >
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="border p-4 rounded-lg shadow hover:shadow-lg transition-transform transform hover:scale-105 bg-white"
          >
            <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
            <p className="text-sm text-gray-600">{item.category}</p>
            <p className="mt-2 font-bold text-blue-500">
              ${item.price.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
