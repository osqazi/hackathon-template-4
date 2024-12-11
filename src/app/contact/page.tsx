import { Heading } from "lucide-react";
import Image from "next/image";
import pagePic from "../../../public/images/contactpgpic.png";
import Hero2 from "../components/Hero2";

export default function Contact() {
  return (
    <div>
      <Hero2 name="Contact Us" add1="Home . Pages" add2=". Contact us" />
      <div className="mt-24 lg:mx-28 md:mx-32 mb-48">
        <div className="grid grid-cols-1 gap-24 md:grid-cols-2 lg:grid-cols-2 text-center md:text-start lg:text-start">
          <div className="col-span-1">
            <h1 className="font-bold text-3xl text-purple-950">
              Information About us
            </h1>
            <p className="text-purple-400 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
              tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
              vitae lobortis quis bibendum quam.
            </p>
            <div className="mt-6">
              <ul className="flex gap-4 justify-center md:justify-start lg:justify-start">
                <li className="h-6 w-6 rounded-full bg-purple-700"></li>
                <li className="h-6 w-6 rounded-full bg-pink-500"></li>
                <li className="h-6 w-6 rounded-full bg-sky-400"></li>
              </ul>
            </div>
          </div>
          <div className="col-span-1">
            <h1 className="font-bold text-3xl text-purple-950">Contact Way</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
              <div className="col-span-1 mt-10 flex">
                <div className="gap-6 lg:flex md:flex">
                  <div className="flex justify-center w-screen lg:w-auto md:w-auto">
                    <div className="h-12 w-12 rounded-full bg-purple-700"></div>
                  </div>
                  <div className="text-purple-400">
                    <p>Tel: 877-67-88-99</p>
                    <p>E-Mail: shop@store.com</p>
                  </div>
                </div>
              </div>
              <div className="col-span-1 mt-10 flex">
                <div className="gap-6 lg:flex md:flex">
                  <div className="flex justify-center w-screen lg:w-auto md:w-auto">
                    <div className="h-12 w-12 rounded-full bg-pink-500"></div>
                  </div>
                  <div className="text-purple-400">
                    <p>Support Forum</p>
                    <p>For over 24hr</p>
                  </div>
                </div>
              </div>
              <div className="col-span-1 mt-10 flex">
                <div className="gap-6 lg:flex md:flex">
                  <div className="flex justify-center w-screen lg:w-auto md:w-auto">
                    <div className="h-12 w-12 rounded-full bg-yellow-500"></div>
                  </div>
                  <div className="text-purple-400">
                    <p>20 Margaret st, London</p>
                    <p>Great britain, 3NM98-LK</p>
                  </div>
                </div>
              </div>
              <div className="col-span-1 mt-10 flex">
                <div className="gap-6 lg:flex md:flex">
                  <div className="flex justify-center w-screen lg:w-auto md:w-auto">
                    <div className="h-12 w-12 rounded-full bg-green-400"></div>
                  </div>
                  <div className="text-purple-400">
                    <p>Free standard shipping</p>
                    <p>on all orders.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-24 gap-14 mx-3 md:mx-0 lg:mx-0">
          <div className="col-span-1">
            <div className="text-2xl font-bold py-16">
              <h1 className="mb-7 text-4xl text-purple-950 flex justify-center md:justify-start lg:justify-start">
                Get in Touch
              </h1>
              <p className="text-purple-400 text-[16px] font-normal mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                neque ultrices tristique amet erat vitae eget dolor los vitae
                lobortis quis bibendum quam.
              </p>
              <form className="text-sm font-normal">
                <div className="lg:flex lg:justify-between gap-6">
                  <div className="form-group mb-6 flex-1">
                    <input
                      type="text"
                      className="form-control py-4 px-2 border border-gray-200 rounded-md w-full"
                      id="con_name"
                      placeholder="Your Name *"
                      required
                    />
                  </div>
                  <div className="form-group mb-6 flex-1">
                    <input
                      type="email"
                      className="form-control py-4 px-2 border border-gray-200 rounded-md w-full"
                      id="con_email"
                      placeholder="Your Email *"
                      required
                    />
                  </div>
                </div>

                <div className="form-group mb-6">
                  <input
                    type="text"
                    className="form-control py-4 px-2 border border-gray-200 rounded-md w-full"
                    id="con_subject"
                    placeholder="Subject *"
                    required
                  />
                </div>
                <div className="form-group mb-6">
                  <textarea
                    className="form-control py-4 px-2 border border-gray-200 rounded-md w-full"
                    id="con_message"
                    placeholder="Type Your Message *"
                    rows={10}
                  ></textarea>
                </div>
                <div className="form-group">
                  <input
                    type="button"
                    className="form-control py-3 px-3 border border-gray-200 rounded-md text-white bg-pink-600 w-full lg:w-40 hover:bg-pink-400 hover:cursor-pointer"
                    value={"Send Mail"}
                    required
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="col-span-1">
            <div className="lg:size-[650px] md:size-[550px] flex">
              <Image src={pagePic} alt="pagePic"></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
