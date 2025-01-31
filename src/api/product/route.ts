import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";



type Product = {
    _id: string;
    title: string;
    imageUrl: string;
    price: number;
    tags: string[];
    dicountPercentage: number;
    description: string;
    isNew: boolean;
  };
  
  export type ProductResponse = Product[];


export default async function GET() {
  try {
    const data:ProductResponse = await client.fetch(`*[_type=="product"]{
    _id,
    title,
    "imageUrl" :productImage.asset -> url,
    price,
    tags,
    dicountPercentage,
    description,
    isNew
}`);

    return  NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Error fetching data from Sanity:', error);
    return new NextResponse('Error fetching data', { status: 500 });
  }
}