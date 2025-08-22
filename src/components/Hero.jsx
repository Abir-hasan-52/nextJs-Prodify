import React from "react";
import Link from "next/link";
import { FaShoppingCart, FaPlus } from "react-icons/fa";

const Hero = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-rose-100 to-pink-50 py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 md:px-12 gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Manage Your <span className="text-rose-600">Products</span> <br />
              with Ease 🚀
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Explore our product catalog, check details, and add new products
              easily after login. Built with{" "}
              <span className="font-semibold">Next.js 15 & NextAuth</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/allProducts"
                className="flex items-center gap-2 px-6 py-3 bg-rose-600 text-white rounded-lg shadow-md hover:bg-rose-700 transition"
              >
                <FaShoppingCart /> View Products
              </Link>

              <Link
                href="dashboard/addProducts"
                className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900 transition"
              >
                <FaPlus /> Add Product
              </Link>
            </div>
          </div>

          {/* Right Content (Image/Illustration) */}
          <div className="flex-1">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
              alt="Product management illustration"
              className="w-full max-w-md mx-auto drop-shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
