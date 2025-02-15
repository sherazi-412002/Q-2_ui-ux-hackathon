// import { RootState } from "@/app/redux/store";
// import { CartItem } from "@/components/CartItem";
// import { Product } from "@/app/api/product/route";
// import { client } from "@/sanity/lib/client";
// import { Customer } from "@/types/customer";




// const CreateCustomerInSanity = async (customerInfo:Customer)=>

// {


//     try{
//     const customerObject = {
//         _type:"customer",
//         firstName:customerInfo.firstName,
//         lastName:customerInfo.lastName,
//         email:customerInfo.email,
//         phone:customerInfo.phone
//     }

//     const response = await client.create(customerObject)
//     console.log("user created in sanity",response)
//     return response
//     }
//     catch(error)
//     {
//         console.log("error created user in sanity",error)
//         throw error
//     }
// }


// const CreateOrderInSanity = async (cartItems: Product[], customer_id: string) => {
//   try {
//     console.log("Creating order for customer:", customer_id);
//     console.log("Cart items:", cartItems);

//     const orderObject = {
//       _type: "order",
//       customer: {
//         _type: "reference",
//         _ref: customer_id,
//       },
//       items: cartItems.map((item) => ({
//         _type: "items",
//         _id: item._id,
//         product_name: item.title,
//         product_price: item.price,
//         quantity: 1,
//       })),
//       order_date: new Date().toISOString(),
//     };

//     console.log("Order object:", JSON.stringify(orderObject, null, 2));

//     const response = await client.create(orderObject);
//     console.log("Order created in Sanity:", response);

//     return response;
//   } catch (error) {
//     console.log("Error creating order in Sanity:", error);
//     throw error;
//   }
// };


// export default async function CheckOut(cartItems:Product[], customerInfo:Customer) {
//   try{
//       const customer = await CreateCustomerInSanity(customerInfo)
//       await CreateOrderInSanity(cartItems,customer._id)
//       console.log("checkout completed")
//   }
//   catch(error)
//   {
//       console.log("error created order and customer in sanity",error)
//       throw error 
//   }
// }



// const CreateOrderInSanity = async (cartItems:CartItem[], customer_id:string)=>
//     {
//         try
//         {
//             const orderObject = {
//                 _type:"order",
//                 customer:{
//                     _type:"reference",
//                     _ref:customer_id
//                 },
//                 items:cartItems.map((item)=>(
//                     {
//                         _type:"items",
//                         _id : item.id,
//                         product_name:item.name,
//                         product_price:item.price,
//                         quantity:1
//                     }
//                 )),
//                 order_date:new Date().toISOString()
//             }
        
//             const response = await client.create(orderObject)
//             console.log("order created in sanity",response)
//             return response
//         }   
//         catch(error)
//         {
//             console.log("error created order in sanity",error)
//             throw error
//         }
//     }
// export default async function CheckOut(cartItems:CartItem[], customerInfo:Customer) {
//     try{
//         const customer = await CreateCustomerInSanity(customerInfo)
//         await CreateOrderInSanity(cartItems,customer._id)
//         console.log("checkout completed")
//     }
//     catch(error)
//     {
//         console.log("error created order and customer in sanity",error)
//         throw error 
//     }
// }



import { Product } from "@/app/api/product/route";
import { client } from "@/sanity/lib/client";
import { Customer } from "@/types/customer";
import { Order } from "@/types/order"; // Import Order interface

const CreateCustomerInSanity = async (customerInfo: Customer) => {
  try {
    const customerObject = {
      _type: "customer",
      firstName: customerInfo.firstName,
      lastName: customerInfo.lastName,
      email: customerInfo.email,
      phone: customerInfo.phone,
    };

    const response = await client.create(customerObject);
    console.log("User created in Sanity", response);
    return response;
  } catch (error) {
    console.error("Error creating user in Sanity", error);
    throw error;
  }
};

const CreateOrderInSanity = async (cartItems: Product[], customer_id: string) => {
  try {
    console.log("Creating order for customer:", customer_id);

    const orderObject: Order = { // Enforce type safety
      _type: "order",
      customer: customer_id,
      items: cartItems.map((item) => ({
        product_name: item.title,
        product_price: item.price,
        quantity: 1,
      })),
      order_date: new Date().toISOString(),
      status: "pending", // Default status
    };

    const response = await client.create(orderObject);
    console.log("Order created in Sanity:", response);
    return response;
  } catch (error) {
    console.error("Error creating order in Sanity:", error);
    throw error;
  }
};

export default async function CheckOut(cartItems: Product[], customerInfo: Customer) {
  try {
    const customer = await CreateCustomerInSanity(customerInfo);
    await CreateOrderInSanity(cartItems, customer._id);
    console.log("Checkout completed");
  } catch (error) {
    console.error("Error creating order and customer in Sanity", error);
    throw error;
  }
}

