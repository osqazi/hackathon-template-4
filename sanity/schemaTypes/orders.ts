export default {
  name: 'order',
  type: 'document',
  title: 'Orders',
  fields: [
    {
      name: 'username',
      type: 'string',
      title: 'Username'
    },
    {
      name: 'firstName',
      type: 'string',
      title: 'First Name'
    },
    {
      name: 'lastName',
      type: 'string',
      title: 'Last Name'
    },
    {
      name: 'phone',
      type: 'string',
      title: 'Phone / Mobile Number',
      
    },
    {
      name: 'address',
      type: 'string',
      title: 'Address'
    },
    {
      name: 'city',
      type: 'string',
      title: 'City'
    },
    {
      name: 'postalCode',
      type: 'string',
      title: 'Postal Code'
    },
    {
      name: 'country',
      type: 'string',
      title: 'Country'
    },
    {
      name: 'orderId',
      type: 'string',
      title: 'Order ID'
    },
    {
      name: 'orderDate',
      type: 'datetime',
      title: 'Order Date'
    },
    {
      name: 'orderStatus',
      type: 'string',
      title: 'Order Status',
      options: {
        list: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled']
      }
    },
    {
      name: 'paymentStatus',
      type: 'string',
      title: 'Payment Status',
      options: {
        list: ['Pending', 'Failed', 'Paid', 'Refunded']
      }
    },
    {
      name: 'totalAmount',
      type: 'number',
      title: 'Total Amount'
    },
    {
      name: 'products',
      type: 'array',
      title: 'Products',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'productId',
              type: 'string',
              title: 'Product ID'
            },
            {
              name: 'productName',
              type: 'string',
              title: 'Product Name'
            },
            {
              name: 'productImage',
              type: 'string',
              title: 'Product Image'
            },
            {
              name: 'productPrice',
              type: 'number',
              title: 'Product Price'
            },
            {
              name: 'productQuantity',
              type: 'number',
              title: 'Product Quantity'
            }
          ]
        }
      ]
    }
  ]
};
