import { color } from '@sanity/color-input';

export default {
  name: 'products',
  type: 'document',
  title: 'Products',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule: any) => Rule.required().error('Name is required'),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
      description: 'Upload an image of the product.',
    },
    {
      name: 'price',
      type: 'string',
      title: 'Price',
      validation: (Rule: any) => Rule.required().error('Price is required'),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (Rule: any) => Rule.max(150).warning('Keep the description under 150 characters.'),
    },
    {
      name: 'discountPercentage',
      type: 'number',
      title: 'Discount Percentage',
      validation: (Rule: any) => Rule.min(0).max(100).warning('Discount must be between 0 and 100.'),
    },
    {
      name: 'isFeaturedProduct',
      type: 'boolean',
      title: 'Is Featured Product',
    },
    {
      name: 'stockLevel',
      type: 'number',
      title: 'Stock Level',
      validation: (Rule: any) => Rule.min(0).error('Stock level must be a positive number.'),
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
      options: {
        list: [
          { title: 'Chair', value: 'Chair' },
          { title: 'Sofa', value: 'Sofa' },
        ],
      },
      validation: (Rule: any) => Rule.required().error('Category is required'),
    },
    {
      name: 'createdOn',
      type: 'datetime',
      title: 'Created On',
      validation: (Rule: any) => Rule.required().error('Creation date is required'),
    },
    {
      name: 'soldQuantity',
      type: 'number',
      title: 'Sold Quantity',
      validation: (Rule: any) => Rule.min(0).error('Sold quantity must be a positive number.'),
    },
    {
      name: 'discount',
      type: 'number',
      title: 'Discount',
      validation: (Rule: any) => Rule.min(0).max(10000).warning('Discount must be between 0 and 100.'),
    },
    {
      name: 'onOffer',
      type: 'boolean',
      title: 'On Offer',
    },
    {
      name: 'isUnique',
      type: 'boolean',
      title: 'Is Unique',
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Rating',
      validation: (Rule: any) => Rule.min(0).max(500).warning('Rating must be between 0 and 5.'),
    },
    {
      name: 'rating_5',
      type: 'number',
      title: '5 Star',
    },
    {
      name: 'rating_4',
      type: 'number',
      title: '4 Star',
    },
    {
      name: 'rating_3',
      type: 'number',
      title: '3 Star',
    },
    {
      name: 'rating_2',
      type: 'number',
      title: '2 Star',
    },
    {
      name: 'rating_1',
      type: 'number',
      title: '1 Star',
    },
    {
      name: 'colors',
      type: 'array',
      title: 'Available Colors',
      of: [
        {
          type: 'color',
          title: 'Color',
        },
      ],
      description: 'Select multiple colors for this product.',
    },
    {
      name: 'onSale',
      type: 'boolean',
      title: 'On Sale',
    },
  ],
};
