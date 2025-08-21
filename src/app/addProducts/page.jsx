"use client";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function AddProductPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const productData = {
      name: form.name.value,
      description: form.description.value,
      price: parseFloat(form.price.value),
      category: form.category.value,
      image: form.image.value,
      rating: parseFloat(form.rating.value),
      stock: parseInt(form.stock.value),
      reviews: [], // শুরুতে empty
    };

    try {
      const res = await fetch("http:localhost:3000/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      });

      const data = await res.json();
      if (data.insertedId) {
        toast.success("✅ Product Added Successfully!");
        form.reset();
      } else {
        toast.error("❌ Failed to add product!");
      }
    } catch (err) {
      toast.error("⚠️ Something went wrong!");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-xl mt-6">
      <h2 className="text-2xl font-bold text-center mb-4">➕ Add Product</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" placeholder="Product Name" required className="input input-bordered w-full" />
        <textarea name="description" placeholder="Description" required className="textarea textarea-bordered w-full" />
        <input type="number" name="price" placeholder="Price" required className="input input-bordered w-full" />
        <input name="category" placeholder="Category" required className="input input-bordered w-full" />
        <input name="image" placeholder="Image URL" required className="input input-bordered w-full" />
        <input type="number" step="0.1" name="rating" placeholder="Rating (0-5)" required className="input input-bordered w-full" />
        <input type="number" name="stock" placeholder="Stock Quantity" required className="input input-bordered w-full" />

        <button type="submit" disabled={loading} className="btn btn-primary w-full">
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}
