import React from "react";
import { useParams } from "react-router-dom";
import { foodItems } from "../data/foodItems";

const FoodDetails = () => {
  const { id } = useParams();
  const food = foodItems.find((item) => item.id === parseInt(id));

  if (!food) return <p className="text-center text-red-500">Food not found!</p>;

  return (
    <div className="container mx-auto p-4 md:p-8 max-w-5xl">
      <h1 className="text-3xl font-semibold text-gray-900 mb-6">{food.name}</h1>
      s<p className="text-lg text-gray-600 mb-4">{food.category}</p>
      <div className="mb-6 flex justify-center">
        <img
          src={food.image}
          alt={food.name}
          className="w-72 h-72 object-cover rounded-lg shadow-xl"
        />
      </div>
      <p className="font-bold text-blue-500 text-2xl mb-6">
        ${food.price.toFixed(2)}
      </p>
      <div className="text-gray-700 space-y-4">
        <p className="text-lg">
          This is a delicious {food.category.toLowerCase()} dish named{" "}
          <strong className="font-semibold">{food.name}</strong>. It's a popular
          item in our menu.
        </p>
        <p className="text-base">{food.description}</p>
      </div>
      <div className="mt-8 text-center">
        <button
          onClick={() => window.history.back()}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Go Back to Menu
        </button>
      </div>
    </div>
  );
};

export default FoodDetails;
