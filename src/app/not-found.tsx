import Link from "next/link";
import Image from "next/image";
import pnf from '../../public/images/pagenotfound.png'
import Hero2 from "./components/Hero2";


export default function Custom404() {
  return (
    <div>
      <Hero2 name='404 Not Found' add1='Home . Page' add2=' . 404 Not Found'/>
     
      <div>
        <div className="flex justify-center items-center py-6">
          <Image src={pnf} alt="pnf.png"></Image>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="bg-red-500 text-white py-2 px-4 rounded-md mb-16 hover:cursor-pointer">
          <Link href="../">Back to Home</Link>
        </div>
      </div>
     
      {/* Brand Image */}
      <div className="flex justify-center p-16">
        <img src="/images/brand.png" alt="Brand" className="w-full max-w-[70rem] h-auto" />
      </div>
    </div>


  );
}
