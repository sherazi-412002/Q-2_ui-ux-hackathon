export interface Order {
    _type:string,
    customer: string;
    items: {
      product_name: string;
      product_price: number;
      quantity: number;
    }[];
    order_date: string;
    status: "pending" | "processing" | "shipped" | "delivered" | "cancelled"; // Added status field
  }
  