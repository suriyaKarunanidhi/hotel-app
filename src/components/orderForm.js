import React, { useState } from "react";

const OrderForm = () => {
  const [order, setOrder] = useState({ name: "", phone: "", foodItem: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order submitted:", order);
    alert("Order placed successfully1!");
    setOrder({ name: "", phone: "", foodItem: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container mx-auto px-4 py-8 max-w-lg bg-white shadow-lg rounded-lg"
    >
      <h2 className="text-2xl font-bold text-center mb-6">Order Food</h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
          Your Name
        </label>
        <input
          type="text"
          name="name"
          value={order.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
          Phone Number
        </label>
        <input
          type="text"
          name="phone"
          value={order.phone}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
          Food Item
        </label>
        <input
          type="text"
          name="foodItem"
          value={order.foodItem}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600"
      >
        Place Order
      </button>
    </form>
  );
};

export default OrderForm;
