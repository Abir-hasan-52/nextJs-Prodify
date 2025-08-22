'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { Package, DollarSign, FileText, Tag, Truck, User } from 'lucide-react';

export default function AddProductPage() {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        img: '',
        category: '',
        stock: '',
        rating:'',
        
       
    });
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('/api/products', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    price: parseFloat(formData.price),
                    stock: parseInt(formData.stock),
                    // shipping: parseFloat(formData.shipping),
                    rating: parseFloat(formData.rating),
                    img: formData.img || undefined,
                }),
            });

            if (response.ok) {
                toast.success('Product added successfully!');
                setFormData({
                    name: '',
                    description: '',
                    price: '',
                    img: '',
                    category: '',
                    stock: '',
                    rating: '',
                });
                router.push('/allProducts');
            } else {
                const error = await response.json();
                toast.error(error.message || 'Failed to add product');
            }
        } catch (error) {
            console.error('Error adding product:', error);
            toast.error('An error occurred while adding the product');
        } finally {
            setIsLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="bg-white  rounded-lg shadow-sm">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                <h1 className="text-2xl font-bold text--black  ">Add New Product</h1>
                <p className="text-black   mt-1">
                    Fill in the details to add a new product to your catalog
                </p>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
                {/* Product Name */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-black   mb-2">
                        <Package className="w-4 h-4 inline mr-2" />
                        Product Name *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter product name"
                        className="w-full px-3 py-2 border rounded-md bg-white   focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Description */}
                <div>
                    <label htmlFor="description" className="block text-sm font-medium   mb-2">
                        <FileText className="w-4 h-4 inline mr-2" />
                        Description *
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        required
                        rows={4}
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Describe your product in detail"
                        className="w-full px-3 py-2 border rounded-md bg-white   focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Price */}
                <div>
                    <label htmlFor="price" className="block text-sm font-medium   mb-2">
                        <DollarSign className="w-4 h-4 inline mr-2" />
                        Price *
                    </label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        required
                        min="0"
                        step="0.01"
                        value={formData.price}
                        onChange={handleInputChange}
                        placeholder="0.00"
                        className="w-full px-3 py-2 border rounded-md bg-white  focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Category */}
                <div>
                    <label htmlFor="category" className="block text-sm font-medium   mb-2">
                        <Tag className="w-4 h-4 inline mr-2" />
                        Category *
                    </label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        required
                        value={formData.category}
                        onChange={handleInputChange}
                        placeholder="e.g., Fruits, Vegetables, Electronics"
                        className="w-full px-3 py-2 border rounded-md bg-white   focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Stock */}
                <div>
                    <label htmlFor="stock" className="block text-sm font-medium    mb-2">
                        Stock *
                    </label>
                    <input
                        type="number"
                        id="stock"
                        name="stock"
                        required
                        min="0"
                        value={formData.stock}
                        onChange={handleInputChange}
                        placeholder="Available stock"
                        className="w-full px-3 py-2 border rounded-md bg-white focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* reviews */}
                {/* <div>
                    <label htmlFor="reviews" className="block text-sm font-medium  mb-2">
                        <Truck className="w-4 h-4 inline mr-2" />
                        Shipping Cost ($)
                    </label>
                    <input
                        type="text"
                        id="shipping"
                        name="shipping"
                        step="0.01"
                        value={formData.shipping}
                        onChange={handleInputChange}
                        placeholder="Enter shipping cost"
                        className="w-full px-3 py-2 border rounded-md bg-white   focus:ring-2 focus:ring-blue-500"
                    />
                </div> */}

                {/* rating */}
                <div>
                    <label htmlFor="rating" className="block text-sm font-medium   mb-2">
                        <User className="w-4 h-4 inline mr-2" />
                        Rating *
                    </label>
                    <input
                        type="number"
                        id="rating"
                        name="rating"
                        required
                        value={formData.seller}
                        onChange={handleInputChange}
                        placeholder="Enter rating Products"
                        className="w-full px-3 py-2 border rounded-md bg-white  focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* img URL */}
                <div>
                    <label htmlFor="image" className="block text-sm font-medium  mb-2">
                        image URL
                    </label>
                    <input
                        type="url"
                        id="img"
                        name="img"
                        value={formData.img}
                        onChange={handleInputChange}
                        placeholder="https://example.com/img.jpg"
                        className="w-full px-3 py-2 border rounded-md bg-white   focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Preview */}
                {formData.img && (
                    <div>
                        <p className="text-sm font-medium   mb-2">Preview</p>
                        <img
                            src={formData.img}
                            alt="Preview"
                            className="max-w-xs max-h-48 object-contain rounded border  "
                            onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        />
                    </div>
                )}

                {/* Actions */}
                <div className="flex items-center justify-center pt-6 border-t border-gray-200  ">
                    {/* <button
                        type="button"
                        onClick={() => router.push('/products')}
                        className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                        Cancel
                    </button> */}

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="px-6 py-2 text-sm font-medium    border text-black  cursor-pointer rounded-md hover:bg-slate-100 disabled:opacity-50 flex items-center"
                    >
                        {isLoading ? (
                            <>
                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                Adding Product...
                            </>
                        ) : (
                            <>
                                <Package className="w-4 h-4 mr-2" />
                                Add Product
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}