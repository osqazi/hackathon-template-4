import Link from "next/link";

export default function RelatedItemsBlog() {
  const relProdBlog = [
    {
      id: "1",
      name: "Mens Fashion Wear",
      Rating: (
        <div className="flex items-center lg:justify-start md:justify-start justify-center">
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-solid fa-star text-gray-400"></i>
        </div>
      ),
      Price: "$32.00",
      oldPrice: "$56.00",
      pic: "/images/blog/img17.png",
      href: "../products",
    },
    {
      id: "2",
      name: "Womens Fashion",
      Rating: (
        <div className="flex items-center lg:justify-start md:justify-start justify-center">
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-solid fa-star text-yellow-400"></i>
        </div>
      ),
      Price: "$32.00",
      oldPrice: "$56.00",
      pic: "/images/blog/img18.png",
      href: "../products",
    },
    {
      id: "3",
      name: "Wolx Dummy Fashion",
      Rating: (
        <div className="flex items-center lg:justify-start md:justify-start justify-center">
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-solid fa-star text-gray-400"></i>
        </div>
      ),
      Price: "$32.00",
      oldPrice: "$56.00",
      pic: "/images/blog/img19.png",
      href: "../products",
    },
    {
      id: "4",
      name: "Top Wall Digital Clock",
      Rating: (
        <div className="flex items-center lg:justify-start md:justify-start justify-center">
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-solid fa-star text-gray-400"></i>
          <i className="fa-solid fa-star text-gray-400"></i>
        </div>
      ),
      Price: "$32.00",
      oldPrice: "$56.00",
      pic: "/images/blog/img20.png",
      href: "../products",
    },
  ];

  return (
    <div className=" mt-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
        {relProdBlog.map((item, i) => {
          return (
            <Link href={`${item.href}/${item.name}`} key={item.id}>
              <div key={item.id}>
                <div className="col-span-1">
                  <div className="w-full mb-4">
                    <div className="flex justify-center w-full">
                      <img
                        src={item.pic}
                        alt="img"
                        className="object-cover w-full h-auto lg:h-52 md:h-40 sm:h-32"
                      />
                    </div>
                    <div>
                      <p className="mx-3 text-sm">{item.name}</p>
                    </div>
                    <div className="flex justify-between text-purple-900 my-1 items-center text-xs">
                      <p className="text-purple-900">{item.Price}</p>
                      <p className="text-pink-500 line-through">
                        {item.oldPrice}
                      </p>
                      <p>{item.Rating}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
