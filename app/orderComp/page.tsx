import Link from "next/link";
import Image from "next/image";
import pnf from '../../public/images/orderComp.png'
import Hero2 from "../components/Hero2";



export default function OrderComplete() {
  return (
    <div>
      <Hero2 name='Order Complete' add1='Home . Page' add2=' . Order Complete'/>
      <div>
        <div className="flex justify-center items-center pt-32">
          <Image src={pnf} alt="pnf.png" className="h-72 w-[700px]"></Image>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="bg-red-500 text-white py-2 px-4 text-center rounded-md mb-16 hover:cursor-pointer">
          <Link href={"/orders"}>Proceed to your Placed Order for Making Payment</Link>
        </div>
      </div>
     
      {/* Brand Image */}
      <div className="flex justify-center p-16">
        <img src="/images/brand.png" alt="Brand" className="w-full max-w-[70rem] h-auto" />
      </div>
    </div>


  );
}
