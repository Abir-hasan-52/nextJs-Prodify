import dbConnect from "@/lib/dbConnect";

  const TopProducts = async () => {
    const productsCollection=dbConnect("products")
    const data=await  productsCollection.find({}).toArray();
  // const productsCollection = await dbConnect("products");
  // const products = await productsCollection.find({}).toArray();
  return (
    <div>
      {data.map(p => (
        <p key={p._id.toString()}>{p.name}</p>
      ))}
    </div>
  );
};
export default TopProducts