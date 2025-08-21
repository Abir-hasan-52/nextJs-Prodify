import dbConnect from "@/lib/dbConnect";
import { collectionNamesObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";

const ServiceDetailsPage = async ({ params }) => {
  const p = await params;
  const productsCollection = dbConnect(collectionNamesObj.productsCollection);
  const data = await productsCollection.findOne({ _id: new ObjectId(p.id) });
  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      {/* Card */}
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow overflow-hidden">
        {/* Image */}
        <div className="md:w-1/2 h-96 overflow-hidden">
          <img
            src={data.image}
            alt={data.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-4">{data.name}</h1>
            <p className="text-gray-700 mb-4">{data.description}</p>
            <p className="text-gray-500 mb-2">Category: {data.category}</p>
            <p className="text-rose-600 font-bold text-2xl mb-4">
              ${data.price}
            </p>

            {/* Rating */}
            <div className="flex items-center mb-4">
              {Array.from({ length: Math.floor(data.rating) }).map((_, i) => (
                <FaStar key={i} className="text-yellow-400 mr-1" />
              ))}
              <span className="text-gray-600 ml-2">
                {data.rating.toFixed(1)} ({data.reviews?.length || 0} reviews)
              </span>
            </div>

            <p className="text-gray-500 mb-4">Stock: {data.stock}</p>

            {/* Reviews */}
            {data.reviews && (
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Reviews:</h3>
                <ul className="list-disc list-inside text-gray-700 text-sm">
                  {data.reviews.map((r, index) => (
                    <li key={index}>
                      <strong>{r.user}:</strong> {r.comment}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <Link
              href="/"
              className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
            >
              Back to Products
            </Link>
            <button className="px-4 py-2 bg-rose-600 text-white rounded hover:bg-rose-700 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsPage;
