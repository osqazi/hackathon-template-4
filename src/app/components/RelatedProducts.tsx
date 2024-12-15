import Link from "next/link";

export default function RelatedProducts() {
  const relProd = [
    {
      id:"1",
      name: "Mens Fashion Wear",
      Rating: (
        <div className="flex items-center mt-2 lg:justify-start md:justify-start justify-center">
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-solid fa-star text-gray-400"></i>
          <p>(22)</p>
        </div>
      ),
      Price: "$43.00",
      pic: "/images/products/Item5.png",
      href: "../products",
    },
    {
      id:"2",
      name: "Womens Fashion",
      Rating: (
        <div className="flex items-center mt-2 lg:justify-start md:justify-start justify-center">
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-solid fa-star text-yellow-400"></i>
          <p>(22)</p>
        </div>
      ),
      Price: "$43.00",
      pic: "/images/products/Item6.png",
      href: "../products",
    },
    {
      id:"3",
      name: "Wolx Dummy Fashion",
      Rating: (
        <div className="flex items-center mt-2 lg:justify-start md:justify-start justify-center">
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-solid fa-star text-gray-400"></i>
          <p>(22)</p>
        </div>
      ),
      Price: "$43.00",
      pic: "/images/products/Item7.png",
      href: "../products",
    },
    {
      id:"4",
      name: "Top Wall Digital Clock",
      Rating: (
        <div className="flex items-center mt-2 lg:justify-start md:justify-start justify-center">
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-solid fa-star text-gray-400"></i>
          <i className="fa-solid fa-star text-gray-400"></i>
          <p>(22)</p>
        </div>
      ),
      Price: "$43.00",
      pic: "/images/products/Item8.png",
      href: "../products",
    },
  ];

  return (
    <div className="lg:mx-44 md:mx-32 mx-3 mb-20">
      <p className="font-bold text-purple-900 text-3xl mb-10">
        Related Products
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2">
        {relProd.map((item, i) => {
          return (
            <Link href={`${item.href}/${item.name}`} key={item.id}><div key={item.id}>
              <div className="col-span-1">
                <div className="lg:w-64 md:w-52 shadow-4-sides lg:hover:cursor-pointer mb-4 p-2">
                <div className="flex justify-center lg:h-72 w-full lg:hover:h-80 lg:ease-in">
                  <img
                    src={item.pic}
                    alt="img"
                    className="object-cover h-full w-full"
                  ></img>
                </div>
                <div className="flex justify-between text-purple-900  my-3 items-center">
                  <p className="font-bold mx-1">Mens Fashion</p>
                  <p>{item.Rating}</p>
                </div>
                <div>
                <p className="text-purple-900">{item.Price}</p>
                </div>
              </div>
              </div>
            </div></Link>

          );
        })}
      </div>
    </div>
  );
}
