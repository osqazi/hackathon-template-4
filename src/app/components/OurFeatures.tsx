import React from "react";
import Link from "next/link";

const OurFeatures: React.FC = () => {
  const offers = [
    { id: 1, title: "Free Delivery", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/images/offer1.png", href: "../products" },
    { id: 2, title: "100% Cash Back", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/images/offer2.png", href: "../products" },
    { id: 3, title: "Quality Product", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/images/offer3.png", href: "../products" },
    { id: 4, title: "24/7 Support", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/images/offer4.png", href: "../products" },
  ];

  return (
    <div className="py-10 px-5 bg-gray-50 lg:mx-32 md:mx-24 mx-3">
      <h2 className="text-4xl font-bold text-center mb-5">Our Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-64">
        {offers.map((offer) => (
          <Link href={`${offer.href}/${offer.title}`} key={offer.id}><div className="text-center p-4 hover:border-orange-500 hover:border-b-4">
            <img src={offer.image} alt={offer.title} className="w-40 h-32 mx-auto mb-4" />
            <h3 className="text-lg font-semibold">{offer.title}</h3>
            <p className="text-gray-500">{offer.description}</p>
          </div></Link>
        ))}
      </div>
      <div className="mb-64">
      <div className="text-center">
      <h2 className="text-4xl font-bold mb-12">Our Client Say!</h2>
      <div  className="flex justify-center gap-4">
        <div className="h-16 w-16">
          <img src="/images/clientsay/img1.png" alt="img.png" className="object-cover w-full h-16">
          </img>
        </div>
        <div className="h-16 w-16">
          <img src="/images/clientsay/img2.png" alt="img.png" className="object-cover w-full h-16">
          </img>
        </div>
        <div className="h-16 w-16">
          <img src="/images/clientsay/img3.png" alt="img.png" className="object-cover w-full h-16">
          </img>
        </div>
      </div>
      <h3 className="text-black  text-3xl font-sans mt-8">Selina Gomez</h3>
      <h5 className="text-purple-900">Ceo At Webecy Digital</h5>
      <p className="text-gray-400 lg:px-96 md:px-72 text-lg font-bold mt-6 mb-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.</p>
      </div>
      <div>
        <ul className="flex justify-center gap-2">
          <li><div className="border-4 border-pink-400 w-14"></div></li>
          <li><div className="border-4 border-pink-600 w-20"></div></li>
          <li><div className="border-4 border-pink-400 w-14"></div></li>
          </ul>
      </div>
      </div>
    </div>
  );
};

export default OurFeatures;
