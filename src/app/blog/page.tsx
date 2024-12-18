import Link from "next/link";
import Hero2 from "../components/Hero2";
export default function Blog() {
  const blogs = [
    {
      id: 1,
      title: "Mauris at orci non vulputate diam tincidunt nec.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
      author: "Surf Auxion",
      date: "Aug 09 2020",
      href: "/blog/",
      pic: "/images/blog/img1.png",
    },
    {
      id: 2,
      title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
      author: "Surf Auxion",
      date: "Aug 09 2020",
      href: "/blog/",
      pic: "/images/blog/img2.png",
    },
    {
      id: 3,
      title: "Sit nam congue feugiat nisl, mauris amet nisi. ",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
      author: "Surf Auxion",
      date: "Aug 09 2020",
      href: "/blog/",
      pic: "/images/blog/img3.png",
    },
  ];

  return (
    <div>
      <Hero2 name="Blog Page" add1="Home . Pages" add2=". Blog Page" />      
      <div className="lg:mx-44 md:mx-32 mx-2 mt-28">
      <div className="grid lg:grid-cols-[70%_30%] md:grid-cols-[70%_30%] grid-cols-1 gap-6">



          <div className="col-span-1 ">
            {blogs.map((blog, i) => {
              return (
                <div key={blog.id}>
                  <div className="w-full">
                    <img
                      src={blog.pic}
                      alt="img.png"
                      className="object-contain w-full"
                    ></img>
                  </div>
                  <div className="flex gap-4 text-purple-900 lg:mt-8 md:mt-6 mt-3 lg:justify-start md:justify-start justify-center">
                    <div className="flex gap-2 items-center">
                      <i className="fa-solid fa-pen-nib text-pink-600"></i>
                      <p className=" bg-pink-200 lg:px-12 md:px-6 px-2">{blog.author}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <i className="fa-solid fa-calendar-days text-yellow-500"></i>
                      <p className=" bg-pink-200 lg:px-10 md:px-4 px-2">{blog.date}</p>
                    </div>
                  </div>
                  <p className="text-xl text-purple-900 font-bold my-5">
                    {blog.title}
                  </p>
                  <p className="text-purple-900 text-sm lg:text-start md:text-start text-justify">{blog.desc}</p>
                  <div className="flex gap-2 items-center lg:my-5 md:my-4 mt-2 mb-5 lg:justify-start md:justify-start justify-center">
                    <Link href={`${blog.href}${blog.id}`}>
                      <p className="text-purple-900 font-bold text-sm ">
                        Read More
                      </p>
                    </Link>
                    <div className="h-2 w-2 rounded-full bg-pink-500"></div>
                  </div>
                </div>
              );
            })}
            <div className="flex justify-center items-center gap-5">
              <Link href={"#"}>
                <div className="bg-pink-600 text-white h-6 w-8 text-center rounded-sm">
                  1
                </div>
              </Link>
              <Link href={"#"}>
                <div className="text-gray-500 h-6 w-8 text-center rounded-sm border border-gray-500">
                  2
                </div>
              </Link>
              <Link href={"#"}>
                <div className="text-gray-500 h-6 w-8 text-center rounded-sm border border-gray-500">
                  3
                </div>
              </Link>
              <Link href={"#"}>
                <div className="text-gray-500 h-6 w-8 text-center rounded-sm border border-gray-500">
                  4
                </div>
              </Link>
            </div>
          </div>

          <div className="col-span-1 w-full">
            <div>
                <p className="font-bold text-lg flex lg:justify-start md:justify-start justify-center mt-8 lg:mt-0 md:mt-0">Search</p>
                <div className="lg:flex justify-between border border-gray-300 rounded-sm mt-3 flex ">
            <input
              type="text"
              className="px-2 py-2 outline-none placeholder:text-gray-200"
              placeholder="Search for Posts"
            />
            <button className=" px-4 py-1 text-gray-200">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
            </div>
            <div className="mt-10 w-full ">
                <h1 className="font-bold text-lg mb-4 flex lg:justify-start md:justify-start justify-center">Categories</h1>
                <div className="flex lg:justify-between justify-center md:justify-between gap-8 mb-2 ">
                <button className="bg-pink-500 w-40 py-2 pl-2 rounded-sm text-white font-normal text-start">Hobbies (14)</button>
                <button className=" w-40 py-2  pl-2 rounded-sm text-gray-700 font-normal text-start">Women (21)</button>
                </div>
                <div className="flex lg:justify-between justify-center md:justify-between gap-8 mb-2">
                <button className=" w-40 py-2  pl-2 rounded-sm text-gray-700 font-normal text-start">Women (21)</button>
                <button className=" w-40 py-2  pl-2 rounded-sm text-gray-700 font-normal text-start">Women (21)</button>
                </div>
                <div className="flex lg:justify-between justify-center md:justify-between gap-8 mb-2">
                <button className=" w-40 py-2  pl-2 rounded-sm text-gray-700 font-normal text-start">Women (21)</button>
                <button className=" w-40 py-2  pl-2 rounded-sm text-gray-700 font-normal text-start">Women (21)</button>
                </div>
                    
            </div>
            <div className="mt-10">
            <h1 className="font-bold text-lg mb-4 flex justify-center lg:justify-start md:justify-start">Recent Post</h1>
            <div className="flex justify-center lg:justify-start md:justify-start">
              <ul>
                <li>
                  <div className="flex gap-2 mb-6">
                    <div className="">
                      <img src="/images/blog/img4.png" alt="img.png" className="object-cover w-24 h-16">
                      </img>
                    </div>
                    <div>
                      <p className="font-bold text-purple-900">It is a long established fact</p>
                      <p className="text-purple-900">Aug 09 2020</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex gap-2 mb-6">
                    <div className="">
                      <img src="/images/blog/img5.png" alt="img.png" className="object-cover w-24 h-16">
                      </img>
                    </div>
                    <div>
                      <p className="font-bold text-purple-900">It is a long established fact</p>
                      <p className="text-purple-900">Aug 09 2020</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex gap-2 mb-6">
                    <div className="">
                      <img src="/images/blog/img6.png" alt="img.png" className="object-cover w-24 h-16">
                      </img>
                    </div>
                    <div>
                      <p className="font-bold text-purple-900">It is a long established fact</p>
                      <p className="text-purple-900">Aug 09 2020</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex gap-2 mb-6">
                    <div className="">
                      <img src="/images/blog/img7.png" alt="img.png" className="object-cover w-24 h-16">
                      </img>
                    </div>
                    <div>
                      <p className="font-bold text-purple-900">It is a long established fact</p>
                      <p className="text-purple-900">Aug 09 2020</p>
                    </div>
                  </div>
                </li>
                
              </ul>

            </div>
            
            </div>
            <div className="mt-10">
            <h1 className="font-bold text-lg mb-4 flex justify-center lg:justify-start">Sale Product</h1>
            <div  className="flex lg:justify-start md:justify-start justify-center">
              <ul>
                <li>
                  <div className="flex gap-2 mb-6">
                    <div className="">
                      <img src="/images/blog/img8.png" alt="img.png" className="object-cover w-24 h-16">
                      </img>
                    </div>
                    <div>
                      <p className="font-bold text-purple-900">Elit ornare in enim mauris.</p>
                      <p className="text-purple-900">Aug 09 2020</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex gap-2 mb-6">
                    <div className="">
                      <img src="/images/blog/img9.png" alt="img.png" className="object-cover w-24 h-16">
                      </img>
                    </div>
                    <div>
                      <p className="font-bold text-purple-900">Viverra pulvinar et enim.</p>
                      <p className="text-purple-900">Aug 09 2020</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex gap-2 mb-6">
                    <div className="">
                      <img src="/images/blog/img10.png" alt="img.png" className="object-cover w-24 h-16">
                      </img>
                    </div>
                    <div>
                      <p className="font-bold text-purple-900">Mattis varius donec fdsfd</p>
                      <p className="text-purple-900">Aug 09 2020</p>
                    </div>
                  </div>
                </li>
                
              </ul>

            </div>
            
            </div>
            <div className="mt-10">
            <h1 className="font-bold text-lg mb-4 flex lg:justify-start md:justify-start justify-center">Offer Product</h1>
            <div className="flex gap-4 mb-6 lg:justify-start md:justify-start justify-center">
            <div>
              <div>
                <img src="/images/blog/img11.png" alt="img.png" className="object-cover w-32 h-20">
                </img>
              </div>
              <div className="text-center w-32 text-purple-900 text-sm">
                <p className="font-bold">Duis lectus est.</p>
                <p>$12.00 - $15.00</p>
              </div>
            </div>
            <div>
              <div>
                <img src="/images/blog/img13.png" alt="img.png" className="object-cover w-32 h-20">
                </img>
              </div>
              <div className="text-center w-32 text-purple-900 text-sm">
                <p className="font-bold">Sed placerat.</p>
                <p>$12.00 - $15.00</p>
              </div>
            </div>
            </div>
            <div className="flex gap-4 mb-6 lg:justify-start md:justify-start justify-center">
            <div>
              <div>
                <img src="/images/blog/img12.png" alt="img.png" className="object-cover w-32 h-20">
                </img>
              </div>
              <div className="text-center w-32 text-purple-900 text-sm">
                <p className="font-bold">Netus proin.</p>
                <p>$12.00 - $15.00</p>
              </div>
            </div>
            <div>
              <div>
                <img src="/images/blog/img14.png" alt="img.png" className="object-cover w-32 h-20">
                </img>
              </div>
              <div className="text-center w-32 text-purple-900 text-sm">
                <p className="font-bold">Platea in.</p>
                <p>$12.00 - $15.00</p>
              </div>
            </div>
            </div>
            </div>
            <div className="mt-10">
            <h1 className="font-bold text-lg mb-6 text-center lg:text-start md:text-start">Follow</h1>
            <div className="flex gap-4 lg:justify-start md:justify-start justify-center">
              <div>
              <Link href="https://www.facebook.com/osqazi"><i className="fa-brands fa-facebook text-blue-600 text-2xl"></i></Link>
              </div>
              <div>
              <Link href="https://www.instagram.com/osqazi.khatri"><i className="fa-brands fa-square-instagram text-pink-500 text-2xl"></i></Link>
              </div>
              <div>
              <Link href="https://x.com/osqazi"><i className="fa-brands fa-square-twitter text-sky-400 text-2xl"></i></Link>
              </div>
            </div>
            </div>
            <div className="mt-10 text-center lg:text-start md:text-start">
            <h1 className="font-bold text-lg mb-6">Tags</h1>
            <div>
              <ul className="lg:flex gap-6">
                <li className="underline text-purple-900 text-lg  hover:text-pink-500 hover:cursor-pointer my-2 lg:my-0 md:my-0">General</li>
                <li className="underline text-purple-900 text-lg  hover:text-pink-500 hover:cursor-pointer my-2 lg:my-0 md:my-0">Atsanil</li>
                <li className="underline text-purple-900 text-lg  hover:text-pink-500 hover:cursor-pointer my-2 lg:my-0 md:my-0">Insas.</li>
                <li className="underline text-purple-900 text-lg  hover:text-pink-500 hover:cursor-pointer my-2 lg:my-0 md:my-0">Bibsaas</li>
                <li className="underline text-purple-900 text-lg  hover:text-pink-500 hover:cursor-pointer my-2 lg:my-0 md:my-0">Nulla.</li>
              </ul>
            </div>
            </div>


          </div>


        </div>
      </div>
       {/* Brand Image */}
       <div className="flex justify-center my-5">
        <img
          src="/images/brand.png"
          alt="Brand"
          className="w-full max-w-[70rem] h-auto"
        />
      </div>
    </div>
  );
}
