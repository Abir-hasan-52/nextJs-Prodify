import { collectionNamesObj } from "@/lib/dbConnect";
import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";

export const POST = async (req) => {

    const body = await req.json();
    const productsCollection = dbConnect(collectionNamesObj.productsCollection)
    const result = await productsCollection.insertOne(body)

    return NextResponse.json(result)
}