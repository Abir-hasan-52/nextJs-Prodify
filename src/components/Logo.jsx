import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Logo = () => {
  return (
    <div className="flex items-center gap-2 text-2xl font-bold text-rose-600">
      <FaShoppingCart className="text-3xl" />
      <span>Prodify</span>
    </div>
  );
};

export default Logo;
