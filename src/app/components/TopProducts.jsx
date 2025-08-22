import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
// import { collectionNamesObj } from "@/lib/dbConnect";
import Link from "next/link";

const TopProducts = async () => {
  const productsCollection = dbConnect(collectionNamesObj.productsCollection);
  const data = await productsCollection.find({}).limit(3).toArray();
 
  return (
    <div className="max-w-7xl mx-auto py-10 px-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">🔥 HighLight Products</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {data.map((p) => (
          <div
            key={p._id.toString()}
            className=" rounded-lg shadow hover:shadow-lg transition bg-white overflow-hidden"
          >
            {/* Image */}
            <div className="h-48 w-full overflow-hidden">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{p.name}</h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {p.description}
              </p>
              <p className="text-rose-600 font-bold mb-3">${p.price}</p>

              {/* Details Button */}
              <Link
                href={`/products/${p._id}`}
                className="block text-center px-4 py-2 bg-rose-600 text-white rounded hover:bg-rose-700 transition"
              >
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TopProducts;



 
