// import { RootState } from "@/app/redux/store";
// import { CartItem } from "@/components/CartItem";
import { CartItem } from "@/components/CartItem";
import { client } from "@/sanity/lib/client";
import { Customer } from "@/types/customer";




const CreateCustomerInSanity = async (customerInfo:Customer)=>

{


    try{
    const customerObject = {
        _type:"customer",
        firstName:customerInfo.firstName,
        lastName:customerInfo.lastName,
        email:customerInfo.email,
        phone:customerInfo.phone
    }

    const response = await client.create(customerObject)
    console.log("user created in sanity",response)
    return response
    }
    catch(error)
    {
        console.log("error created user in sanity",error)
        throw error
    }
}

const CreateOrderInSanity = async (cartItems:CartItem[], customer_id:string)=>
    {
        try
        {
            const orderObject = {
                _type:"order",
                customer:{
                    _type:"reference",
                    _ref:customer_id
                },
                items:cartItems.map((item)=>(
                    {
                        _type:"items",
                        _id : item.id,
                        product_name:item.name,
                        product_price:item.price,
                        quantity:1
                    }
                )),
                order_date:new Date().toISOString()
            }
        
            const response = await client.create(orderObject)
            console.log("order created in sanity",response)
            return response
        }   
        catch(error)
        {
            console.log("error created order in sanity",error)
            throw error
        }
    }
export default async function CheckOut(cartItems:CartItem[], customerInfo:Customer) {
    try{
        const customer = await CreateCustomerInSanity(customerInfo)
        await CreateOrderInSanity(cartItems,customer._id)
        console.log("checkout completed")
    }
    catch(error)
    {
        console.log("error created order and customer in sanity",error)
        throw error 
    }
}