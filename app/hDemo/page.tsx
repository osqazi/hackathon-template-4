import Hero2 from "../components/Hero2";
import Link from "next/link";

export default function HektoDemo() {
  const items = [
    {
      name: "Ut diam consequat",
      color: "Brown",
      size: "XL",
      pic: "/images/HDemo/Item1.png",
      price: "$32.00",
      href: "../products"
    },
    {
      name: "Ut diam consequat",
      color: "Brown",
      size: "XL",
      pic: "/images/HDemo/Item2.png",
      price: "$32.00",
      href: "../products"
    },
    {
      name: "Ut diam consequat",
      color: "Brown",
      size: "XL",
      pic: "/images/HDemo/Item3.png",
      price: "$32.00",
      href: "../products"
    },
    {
      name: "Ut diam consequat",
      color: "Brown",
      size: "XL",
      pic: "/images/HDemo/Item4.png",
      price: "$32.00",
      href: "../products"
    },
    {
      name: "Ut diam consequat",
      color: "Brown",
      size: "XL",
      pic: "/images/HDemo/Item5.png",
      price: "$32.00",
      href: "../products"
    },
  ];

  return (
    <div>
        <div>
            <Hero2 name='Hekto Demo'/>
        </div>
    <div className="lg:mx-36 md:mx-24">
      <div className="text-purple-900 pt-16 pb-8 mx-2">
        <h1 className="text-2xl font-bold">Hekto Demo</h1>
        <p>Cart/ Information/ Shipping/ Payment</p>
      </div>
      <div>
      <div className="container grid grid-cols-1 lg:grid-cols-[2fr_1fr] md:grid-cols-[2fr_1fr] gap-10 w-screen lg:mb-72 md:-mb-60 mb-40">
        {/* Form Section */}
        <div className="col-span-1">
          <div className="bg-blue-50 text-2xl font-bold py-16 px-6 sm:px-12 mx-2 lg:mx-0 md:mx-0">
            <div className="lg:flex lg:justify-between text-center text-nowrap">
              <h1 className="mb-8 text-purple-900">Contact Information</h1>
              <Link href="/login">
                <p className="font-normal text-sm text-gray-400">
                  Already have an account? Login.
                </p>
              </Link>
            </div>
            <form className="text-sm font-normal">
              <div className="form-group mb-6">
                <input
                  type="text"
                  className="form-control py-4 px-2 border-b-4 bg-transparent rounded-md w-full"
                  id="faq_name"
                  placeholder="Email or mobile phone number"
                  required
                />
              </div>
              <div className="mt-10 mb-24">
                <label className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    className="h-4 w-4 rounded text-green-600 border-gray-300"
                  />
                  <span>Keep me up to date on news and exclusive offers</span>
                </label>
              </div>
              <div>
                <h1 className="text-purple-900 font-bold text-2xl mb-12">
                  Shipping Address
                </h1>
              </div>
              <div className="lg:flex lg:justify-between gap-6">
                <div className="form-group mb-6 flex-1">
                  <input
                    type="text"
                    className="form-control py-4 px-2 bg-transparent border-b-4 rounded-md w-full"
                    id="con_name"
                    placeholder="First Name (Optional)"
                  />
                </div>
                <div className="form-group mb-6 flex-1">
                  <input
                   type="text"
                   className="form-control py-4 px-2 bg-transparent border-b-4 rounded-md w-full"
                   id="con_last_name"
                   placeholder="Last Name"
                   required
                  />
                </div>
              </div>
              <div className="form-group mb-6">
                <input
                  type="text"
                  className="form-control py-4 px-2 bg-transparent border-b-4 rounded-md w-full"
                  id="faq_address"
                  placeholder="Address"
                  required
                />
              </div>
              <div className="form-group mb-6">
                <input
                  type="text"
                  className="form-control py-4 px-2 bg-transparent border-b-4 rounded-md w-full"
                  id="faq_apartment"
                  placeholder="Apartment, suite, etc. (optional)"
                />
              </div>
              <div className="form-group mb-6">
                <input
                  type="text"
                  className="form-control py-4 px-2 bg-transparent border-b-4 rounded-md w-full"
                  id="faq_city"
                  placeholder="City"
                  required
                />
              </div>
              <div className="lg:flex lg:justify-between gap-6">
                <div className="form-group mb-6 flex-1">
                  <input
                    type="text"
                    className="form-control py-4 px-2 bg-transparent border-b-4 rounded-md w-full"
                    id="con_country"
                    placeholder="Pakistan"
                    required
                  />
                </div>
                <div className="form-group mb-6 flex-1">
                  <input
                   type="text"
                   className="form-control py-4 px-2 bg-transparent border-b-4 rounded-md w-full"
                   id="con_postal"
                   placeholder="Postal Code"
                   required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <input
                  type="button"
                  className="form-control py-3 px-3 border border-gray-200 rounded-md text-white bg-pink-600 w-full lg:w-44 md:w-36 hover:bg-pink-400 hover:cursor-pointer"
                  value="Continue Shopping"
                />
              </div>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="col-span-1 mx-2 lg:mx-0 md:mx-0">
          {items.map((item, index) => (
            <Link href={`${item.href}/${item.name}` } key={index}><ul>
              <li className="hover:bg-sky-100 hover:cursor-pointer">
                <div className="flex justify-between">
                  <div className="flex gap-6">
                    <div>
                      <img
                        src={item.pic}
                        alt="pic"
                        className="object-cover w-24 h-28"
                      />
                    </div>

                    <div>
                      <h4 className="font-bold my-2">{item.name}</h4>
                      <p className="text-gray-400">Color: {item.color}</p>
                      <p className="text-gray-400">Size: {item.size}</p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center ml-24 font-bold">
                    <p>$32.00</p>
                  </div>
                </div>
                <div className="text-gray-500 my-4">
                  <hr />
                </div>
              </li>
            </ul></Link>
          ))}
          <div className="py-12 bg-gray-100 rounded-sm px-8">
            <div className="flex justify-between font-bold text-lg">
                <p>Subtotals:</p>
                <p>$219.00</p>
            </div>
            <div className="my-4">
            <hr className="border-gray-300 border-2" />
                </div>
            <div className="flex justify-between font-bold text-lg pt-10">
                <p>Totals:</p>
                <p>$325.00</p>
            </div>
            <div className="my-4">
            <hr className="border-gray-300 border-2" />
                </div>
            <label className="flex items-center space-x-2 pt-10 pb-8">
                  <input 
                    type="checkbox" 
                    className="h-4 w-4 rounded text-green-600 border-gray-300"
                  />
                  <span>Shipping and Taxes calculated at checkout</span>
                </label>
                <div className="form-group">
                <input
                  type="button"
                  className="form-control py-3 px-3 border border-gray-200 rounded-md text-white bg-green-500 w-full  hover:bg-green-400 hover:cursor-pointer"
                  value="Proceed to Checkout"
                />
              </div>
          </div>
        </div>
        
      </div>
      </div>
    </div>
    </div>
  );
}
