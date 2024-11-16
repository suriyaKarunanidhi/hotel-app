import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-gray-800 text-white">
    <div className="container mx-auto px-4 py-2 flex justify-between items-center">
      <h1 className="text-lg font-bold">Hotel KSK</h1>
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="hover:text-yellow-400">
            Home
          </Link>
        </li>
        <li>
          <Link to="/menu" className="hover:text-yellow-400">
            Menu
          </Link>
        </li>
        <li>
          <Link to="/order" className="hover:text-yellow-400">
            Order
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
