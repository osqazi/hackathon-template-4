import React from "react";
import Link from "next/link";

const ShopexOffer: React.FC = () => {
  const offers = [
    { id: 1, title: "Free Delivery", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/images/offer1.png", href: "../products" },
    { id: 2, title: "100% Cash Back", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/images/offer2.png", href: "../products" },
    { id: 3, title: "Quality Product", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/images/offer3.png", href: "../products" },
    { id: 4, title: "24/7 Support", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/images/offer4.png", href: "../products" },
  ];

  return (
    <div className="py-10 px-5 bg-gray-50 mx-32">
      <h2 className="text-3xl font-bold text-center mb-5">What Shopex Offer!</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {offers.map((offer) => (
          <Link href={`${offer.href}/${offer.title}`} key={offer.id}><div className="text-center p-4  hover:border-orange-500 hover:border-b-4">
            <img src={offer.image} alt={offer.title} className="w-40 h-32 mx-auto mb-4" />
            <h3 className="text-lg font-semibold">{offer.title}</h3>
            <p className="text-gray-500">{offer.description}</p>
          </div></Link>
        ))}
      </div>
    </div>
  );
};

export default ShopexOffer;
