import Link from "next/link";
import OurFeatures from "../components/OurFeatures";
import Hero2 from "../components/Hero2";

export default function AboutUs() {
  return (
    <div>
        <Hero2 name="About Us" add1="Home . Pages" add2=". About us" />
        
      <div className="lg:mx-80 md:mx-60 mx-3 my-32 ">
        <div className="grid lg:grid-cols-2 grid-cols-1  gap-8">
          <div className="col-span-1">
            <div className="flex justify-center lg:h-96 w-full shadow-2xl shadow-blue-700">
              <img
                src="/images/aboutus.png"
                alt="img"
                className="object-cover h-full w-full"
              ></img>
            </div>
          </div>
          <div className="col-span-1">
            <div>
              <h1 className="text-3xl text-purple-900 font-bold text-wrap my-8 lg:text-left md:text-left text-center">
                Know About Our Ecomerce Business, History
              </h1>
              <p className="text-purple-900 lg:text-left md:text-left text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
                tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
                vitae lobortis quis bibendum quam.
              </p>
              <Link href={'../contact'}>
              <div className="lg:justify-start md:justify-start justify-center flex">
              <button className="bg-pink-500 text-white text-xl py-2 px-6 rounded-md my-20">
                Contact Us
              </button></div>
              </Link>
            </div>
          </div>
        </div>
      </div>      
      <OurFeatures/>
    </div>
  );
}
