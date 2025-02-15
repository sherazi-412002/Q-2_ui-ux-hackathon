// import type { Rule } from '@sanity/types';

// const orderSchema = {
//   name: 'order',
//   title: 'Order',
//   type: 'document',
//   fields: [
//     {
//       name: 'customer',
//       title: 'Customer',
//       type: 'reference',
//       to: [{ type: 'customer' }],
//       validation: (Rule: Rule) => Rule.required(),
//     },
//     {
//       name: 'items',
//       title: 'Items',
//       type: 'array',
//       of: [
//         {
//           type: 'object',
//           fields: [
//             {
//               name: 'product_name',
//               title: 'Product Name',
//               type: 'string',
//               validation: (Rule: Rule) => Rule.required(),
//             },
//             {
//               name: 'product_price',
//               title: 'Product Price',
//               type: 'number',
//               validation: (Rule: Rule) => Rule.required().min(0),
//             },
//             {
//               name: 'quantity',
//               title: 'Quantity',
//               type: 'number',
//               validation: (Rule: Rule) => Rule.required().min(1),
//             },
//           ],
//         },
//       ],
//     },
//     {
//       name: 'order_date',
//       title: 'Order Date',
//       type: 'datetime',
//       validation: (Rule: Rule) => Rule.required(),
//     },
//   ],
// };

// export default orderSchema;


import type { Rule } from '@sanity/types';

const orderSchema = {
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    {
      name: 'customer',
      title: 'Customer',
      type: 'reference',
      to: [{ type: 'customer' }],
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'product_name', title: 'Product Name', type: 'string', validation: (Rule: Rule) => Rule.required() },
            { name: 'product_price', title: 'Product Price', type: 'number', validation: (Rule: Rule) => Rule.required().min(0) },
            { name: 'quantity', title: 'Quantity', type: 'number', validation: (Rule: Rule) => Rule.required().min(1) },
          ],
        },
      ],
    },
    {
      name: 'order_date',
      title: 'Order Date',
      type: 'datetime',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'status',
      title: 'Order Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Processing', value: 'processing' },
          { title: 'Shipped', value: 'shipped' },
          { title: 'Delivered', value: 'delivered' },
          { title: 'Cancelled', value: 'cancelled' },
        ],
      },
      validation: (Rule: Rule) => Rule.required(),
      initialValue: 'pending',
    },
  ],
};

export default orderSchema;


  