import React from "react";
import { foodItems } from "../data/foodItems";

const Menu = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4">Menu</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {foodItems.map((item) => (
        <div
          key={item.id}
          className="border p-4 rounded shadow hover:shadow-lg transition"
        >
          <h2 className="text-lg font-semibold">{item.name}</h2>
          <p className="text-gray-600">{item.category}</p>
          <p className="font-bold text-blue-500">${item.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Menu;
