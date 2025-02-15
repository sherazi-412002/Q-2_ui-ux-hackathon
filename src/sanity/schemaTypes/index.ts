import { type SchemaTypeDefinition } from 'sanity'
import { product } from './products'
import orderSchema from './order'
import customerSchema from './customer'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,orderSchema,customerSchema],
}
