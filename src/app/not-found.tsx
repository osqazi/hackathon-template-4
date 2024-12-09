import Link from "next/link";
import Image from "next/image";
import pnf from '../../public/images/pagenotfound.png'


export default function Custom404() {
  return (
    <div>
      <div className="bg-purple-100 p-28 px-72">
        <div>
          <h1 className="text-3xl font-bold text-black-600">404 Not Found</h1>
        </div>
        <div>
          <span>Home.Pages<span className="text-red-700">.404 Not Found</span></span>
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center py-6">
          <Image src={pnf} alt="pnf.png"></Image>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="bg-red-500 text-white py-2 px-4 rounded-md mb-16 hover:cursor-pointer">
          <a href="../">Back to Home</a>
        </div>
      </div>
     
      {/* Brand Image */}
      <div className="flex justify-center p-16">
        <img src="/images/brand.png" alt="Brand" className="w-full max-w-[70rem] h-auto" />
      </div>
    </div>


  );
}
