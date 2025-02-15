// import { client } from "@/sanity/lib/client";
// import { Product } from "./route";

// const fetchData = async () => {

//   const data: Product[] = await client.fetch(
//     `*[_type == "product" && slug.current == $slug]{
//         _id,
//         title,
//         description,
//         "slug": slug.current,
//         "imageUrl": image.asset->url
//     }`,
//   );

//   return data.length > 0 ? data[0] : null; 

// }

// export default fetchData

import { client } from "@/sanity/lib/client";
import { Product } from "./route";

const fetchData = async (title: string) => {
  if (!title) return null;

  const decodedTitle = decodeURIComponent(title); // ✅ Decode the title
  console.log("Searching for product with title:", decodedTitle);

  const data: Product[] = await client.fetch(
    `*[_type == "product" && title == $title]{
        _id,
        title,
        description,
        price,
        tags,
        dicountPercentage,
        isNew,
        "imageUrl": image.asset->url
    }`,
    { title: decodedTitle } // Pass decoded title
  );

  return data.length > 0 ? data[0] : null;
};

export default fetchData;


