// import type { Rule } from '@sanity/types';

// const customerSchema = {
//   name: 'customer',
//   title: 'Customer',
//   type: 'document',
//   fields: [
//     {
//       name: 'firstName',
//       title: 'First Name',
//       type: 'string',
//       validation: (Rule: Rule) => Rule.required(),
//     },
//     {
//       name: 'lastName',
//       title: 'Last Name',
//       type: 'string',
//       validation: (Rule: Rule) => Rule.required(),
//     },
//     {
//       name: 'email',
//       title: 'Email',
//       type: 'string',
//       validation: (Rule: Rule) => Rule.required().email(),
//     },
//     {
//         name: 'phone',
//         title: 'Phone',
//         type: 'string',
//         validation: (Rule: Rule) =>
//           Rule.required()
//             .regex(/^\+?[0-9]{10,15}$/, 'phone')
//             .error('Enter a valid phone number with 10-15 digits.'),
//     },
//   ],
// };

// export default customerSchema;




import type { Rule } from '@sanity/types';

const customerSchema = {
  name: 'customer',
  title: 'Customer',
  type: 'document',
  fields: [
    { name: 'firstName', title: 'First Name', type: 'string', validation: (Rule: Rule) => Rule.required() },
    { name: 'lastName', title: 'Last Name', type: 'string', validation: (Rule: Rule) => Rule.required() },
    { name: 'email', title: 'Email', type: 'string', validation: (Rule: Rule) => Rule.required().email().unique() },
    { name: 'phone', title: 'Phone', type: 'string', validation: (Rule: Rule) => Rule.required().regex(/^\+?[0-9]{10,15}$/, 'phone').unique() },
  ],
};

export default customerSchema;
