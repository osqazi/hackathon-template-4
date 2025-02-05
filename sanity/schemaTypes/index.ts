import { type SchemaTypeDefinition } from 'sanity'
import products from './products'
import orders from './orders'
import subscribers from './subscribers'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products, orders, subscribers],
}
