import { type SchemaTypeDefinition } from 'sanity'
import products from '@/sanity/schemaTypes/products'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products],
}
