import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";



export type Product = {
    _id: number;
    title: string;
    imageUrl: string;
    price: number;
    tags: string[];
    dicountPercentage: number;
    description: string;
    isNew: boolean;
    slug:string
  };
  
//  export type ProductResponse = Product[];


// export default async function GET() {
//   try {
//     const data:ProductResponse = await client.fetch(`*[_type=="product" && slug.current == $slug][0]]{
//     _id,
//     title,
//     "imageUrl" :productImage.asset -> url,
//     price,
//     tags,
//     "slug":slug.current,
//     dicountPercentage,
//     description,
//     isNew
// }`);

//     return  NextResponse.json(data, { status: 200 });
//   } catch (error) {
//     console.error('Error fetching data from Sanity:', error);
//     return new NextResponse('Error fetching data', { status: 500 });
//   }
// }


export default async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return new NextResponse("Missing slug", { status: 400 });
  }

  try {
    const query = `*[_type=="product" && slug.current == $slug][0]{
      _id,
      title,
      "imageUrl": productImage.asset->url,
      price,
      tags,
      "slug": slug.current,
      dicountPercentage,
      description,
      isNew
    }`;

    const product: Product | null = await client.fetch(query, { slug });

    if (!product) {
      return new NextResponse("Product not found", { status: 404 });
    }

    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
    return new NextResponse("Error fetching data", { status: 500 });
  }
}
