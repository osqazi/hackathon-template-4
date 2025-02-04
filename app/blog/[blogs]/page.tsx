import Hero2 from "@/app/components/Hero2";
import RelatedItemsBlog from "@/app/components/RelatedItemsBlog";
import Link from "next/link";
export default function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "Mauris at orci non vulputate diam tincidunt nec.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, ",
      author: "Surf Auxion",
      date: "Aug 09 2020",
      href: "/blog/",
      pic: "/images/blog/img1.png",
    },
  ];

  return (
    <div>
      <Hero2 name="Single Blog" add1="Home . Pages" add2=". Single Blog" />

      <div className="lg:mx-44 md:mx-32 mx-2 mt-28">
      <div className="grid lg:grid-cols-[70%_30%] md:grid-cols-[70%_30%] grid-cols-1 gap-6">

          <div className="col-span-1">
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
                      <p className=" bg-pink-200 lg:px-12 md:px-6 px-2">
                        {blog.author}
                      </p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <i className="fa-solid fa-calendar-days text-yellow-500"></i>
                      <p className=" bg-pink-200 lg:px-10 md:px-4 px-2">
                        {blog.date}
                      </p>
                    </div>
                  </div>
                  <p className="text-xl text-purple-900 font-bold my-5">
                    {blog.title}
                  </p>
                  <p className="text-purple-900 text-sm lg:text-start md:text-start text-justify leading-6">
                    {blog.desc}
                  </p>
                  <p className="mt-20 text-justify text-purple-900 text-sm leading-6">
                    {blog.detail}
                  </p>
                  <div className="bg-green-50 border-pink-600 border-l-4 my-16 py-8">
                    <p className="text-justify text-lg leading-relaxed text-purple-400 italic">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Commodo dictum sapien, amet, consequat. Lorem ipsum dolor
                      sit amet, consectetur adipiscing elit. Commodo dictum
                      sapien, amet, consequat toamk risusu”
                    </p>
                  </div>
                </div>
              );
            })}

            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 mt-14">
              <div className="col-span-1 relative">
                {/* Video */}
                <div>
                  <video
                    src="img15.mp4"
                    poster="/images/blog/img15.png"
                    className="w-96 h-52 hover:cursor-pointer object-cover"
                  ></video>
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex justify-center items-center z-50 h-52">
                  <div className="bg-white bg-opacity-75 text-red-700 rounded-full p-4 text-4xl">
                    ▶
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div>
                  <img
                    src="/images/blog/img16.png"
                    className="object-cover w-96 h-52"
                  ></img>
                </div>
              </div>
            </div>
            <div>
              <p className="text-justify text-purple-900 text-sm mt-12 leading-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                dapibus est, nunc, montes, lacus consequat integer viverra. Sit
                morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante
                posuere malesuada.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Velit dapibus est, nunc, montes, lacus
                consequat integer viverra. Sit morbi etiam quam rhoncus. Velit
                in arcu platea donec vitae ante posuere malesuada.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Velit dapibus est,
                nunc,
              </p>
            </div>
            <div>
              <RelatedItemsBlog/>
            </div>
            <div>
              <p className="text-justify text-purple-900 text-sm mt-12 leading-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                dapibus est, nunc, montes, lacus consequat integer viverra. Sit
                morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante
                posuere malesuada.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Velit dapibus est, nunc, montes, lacus
                consequat integer viverra. Sit morbi etiam quam rhoncus. Velit
                in arcu platea donec vitae ante posuere malesuada.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Velit dapibus est,
                nunc,
              </p>
            </div>
            <div>
              <p className="text-justify text-purple-900 text-sm mt-16 leading-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                dapibus est, nunc, montes, lacus consequat integer viverra. Sit
                morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante
                posuere malesuada.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Velit dapibus est, nunc, montes, lacus
                consequat integer viverra. Sit morbi etiam quam rhoncus. Velit
                in arcu platea donec vitae ante posuere malesuada.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Velit dapibus est,
                nunc,
              </p>
            </div>
            <div className="mt-10 flex justify-center">
              <div className="flex gap-4 lg:justify-start md:justify-start justify-center">
                <div>
                  <Link href="https://www.facebook.com/osqazi">
                    <i className="fa-brands fa-facebook text-blue-600 text-2xl"></i>
                  </Link>
                </div>
                <div>
                  <Link href="https://www.instagram.com/osqazi.khatri">
                    <i className="fa-brands fa-square-instagram text-pink-500 text-2xl"></i>
                  </Link>
                </div>
                <div>
                  <Link href="https://x.com/osqazi">
                    <i className="fa-brands fa-square-twitter text-sky-400 text-2xl"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex justify-between text-gray-400 bg-blue-50 px-6 py-4 mt-6">
              <Link href={'#'}><div className="flex gap-2">
              <p>&lt;--</p>
                <p>Previous Post</p>
              </div></Link>
              <Link href={'#'}><div className="flex gap-2">
                <p>Next Post</p>
                <p>--&gt;</p>
              </div></Link>
            </div>
            <div className="shadow-4-sides mt-24">
              <div className="flex p-3 gap-3 items-center">
                <div>
                  <img src="/images/blog/img21.png" alt="img.png" className="h-32 w-32 object-cover"></img>
                </div>
                <div>
                  <div className="flex gap-4">
                    <p className="font-bold text-lg text-purple-900">Sapien ac</p>
                    <p className="text-gray-400">Jan 09 2020</p>
                  </div>
                  <p className="text-purple-300 leading-relaxed mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate consectetur.</p>
                </div>
              </div>
            </div>
            <div className="shadow-4-sides mt-10">
              <div className="flex p-3 gap-3 items-center">
                <div>
                  <img src="/images/blog/img22.png" alt="img.png" className="h-32 w-32 object-cover"></img>
                </div>
                <div>
                  <div className="flex gap-4">
                    <p className="font-bold text-lg text-purple-900">Augue conva</p>
                    <p className="text-gray-400">Aug 18 2020</p>
                  </div>
                  <p className="text-purple-300 leading-relaxed mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate consectetur.</p>
                </div>
              </div>
            </div>
            <form className="text-sm font-normal mt-28">
                <div className="lg:flex lg:justify-between gap-6">
                  <div className="form-group mb-6 flex-1">
                    <input
                      type="text"
                      className="form-control py-4 px-2 border border-gray-400 shadow-md rounded-md w-full"
                      id="con_name"
                      placeholder="Your Name *"
                      required
                    />
                  </div>
                  <div className="form-group mb-6 flex-1">
                    <input
                      type="email"
                      className="form-control py-4 px-2 border border-gray-400 shadow-md rounded-md w-full"
                      id="con_email"
                      placeholder="Write Your Email *"
                      required
                    />
                  </div>
                </div>
               
                <div className="form-group mb-6">
                  <textarea
                    className="form-control py-4 px-2 border border-gray-400 shadow-md rounded-md w-full"
                    id="con_message"
                    placeholder="Write your comment*"
                    rows={10}
                  ></textarea>
                </div>
                <div className="form-group">
                  <input
                    type="button"
                    className="form-control py-3 text-lg px-3 border border-gray-200 rounded-md text-white bg-pink-600 w-full hover:bg-pink-400 hover:cursor-pointer"
                    value={"Continue Shopping"}
                    required
                  />
                </div>
                <div className="mt-10 mb-24">
                <label className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    className="h-4 w-4 rounded text-green-600 border-gray-300"
                  />
                  <span className="text-purple-500">Save my name, email, and website in this browser for the next time I comment.</span>
                </label>
              </div>
              </form>

            
          </div>

          <div className="col-span-1 w-full">
            <div>
              <p className="font-bold text-lg flex lg:justify-start md:justify-start justify-center mt-8 lg:mt-0 md:mt-0">
                Search
              </p>
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
              <h1 className="font-bold text-lg mb-4 flex lg:justify-start md:justify-start justify-center">
                Categories
              </h1>
              <div className="flex lg:justify-between justify-center md:justify-between gap-8 mb-2 ">
                <button className="bg-pink-500 w-40 py-2 pl-2 rounded-sm text-white font-normal text-start">
                  Hobbies (14)
                </button>
                <button className=" w-40 py-2  pl-2 rounded-sm text-gray-700 font-normal text-start">
                  Women (21)
                </button>
              </div>
              <div className="flex lg:justify-between justify-center md:justify-between gap-8 mb-2">
                <button className=" w-40 py-2  pl-2 rounded-sm text-gray-700 font-normal text-start">
                  Women (21)
                </button>
                <button className=" w-40 py-2  pl-2 rounded-sm text-gray-700 font-normal text-start">
                  Women (21)
                </button>
              </div>
              <div className="flex lg:justify-between justify-center md:justify-between gap-8 mb-2">
                <button className=" w-40 py-2  pl-2 rounded-sm text-gray-700 font-normal text-start">
                  Women (21)
                </button>
                <button className=" w-40 py-2  pl-2 rounded-sm text-gray-700 font-normal text-start">
                  Women (21)
                </button>
              </div>
            </div>
            <div className="mt-10">
              <h1 className="font-bold text-lg mb-4 flex justify-center lg:justify-start md:justify-start">
                Recent Post
              </h1>
              <div className="flex justify-center lg:justify-start md:justify-start">
                <ul>
                  <li>
                    <div className="flex gap-2 mb-6">
                      <div className="">
                        <img
                          src="/images/blog/img4.png"
                          alt="img.png"
                          className="object-cover w-24 h-16"
                        ></img>
                      </div>
                      <div>
                        <p className="font-bold text-purple-900">
                          It is a long established fact
                        </p>
                        <p className="text-purple-900">Aug 09 2020</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-2 mb-6">
                      <div className="">
                        <img
                          src="/images/blog/img5.png"
                          alt="img.png"
                          className="object-cover w-24 h-16"
                        ></img>
                      </div>
                      <div>
                        <p className="font-bold text-purple-900">
                          It is a long established fact
                        </p>
                        <p className="text-purple-900">Aug 09 2020</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-2 mb-6">
                      <div className="">
                        <img
                          src="/images/blog/img6.png"
                          alt="img.png"
                          className="object-cover w-24 h-16"
                        ></img>
                      </div>
                      <div>
                        <p className="font-bold text-purple-900">
                          It is a long established fact
                        </p>
                        <p className="text-purple-900">Aug 09 2020</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-2 mb-6">
                      <div className="">
                        <img
                          src="/images/blog/img7.png"
                          alt="img.png"
                          className="object-cover w-24 h-16"
                        ></img>
                      </div>
                      <div>
                        <p className="font-bold text-purple-900">
                          It is a long established fact
                        </p>
                        <p className="text-purple-900">Aug 09 2020</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-10">
              <h1 className="font-bold text-lg mb-4 flex justify-center lg:justify-start">
                Sale Product
              </h1>
              <div className="flex lg:justify-start md:justify-start justify-center">
                <ul>
                  <li>
                    <div className="flex gap-2 mb-6">
                      <div className="">
                        <img
                          src="/images/blog/img8.png"
                          alt="img.png"
                          className="object-cover w-24 h-16"
                        ></img>
                      </div>
                      <div>
                        <p className="font-bold text-purple-900">
                          Elit ornare in enim mauris.
                        </p>
                        <p className="text-purple-900">Aug 09 2020</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-2 mb-6">
                      <div className="">
                        <img
                          src="/images/blog/img9.png"
                          alt="img.png"
                          className="object-cover w-24 h-16"
                        ></img>
                      </div>
                      <div>
                        <p className="font-bold text-purple-900">
                          Viverra pulvinar et enim.
                        </p>
                        <p className="text-purple-900">Aug 09 2020</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-2 mb-6">
                      <div className="">
                        <img
                          src="/images/blog/img10.png"
                          alt="img.png"
                          className="object-cover w-24 h-16"
                        ></img>
                      </div>
                      <div>
                        <p className="font-bold text-purple-900">
                          Mattis varius donec fdsfd
                        </p>
                        <p className="text-purple-900">Aug 09 2020</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-10">
              <h1 className="font-bold text-lg mb-4 flex lg:justify-start md:justify-start justify-center">
                Offer Product
              </h1>
              <div className="flex gap-4 mb-6 lg:justify-start md:justify-start justify-center">
                <div>
                  <div>
                    <img
                      src="/images/blog/img11.png"
                      alt="img.png"
                      className="object-cover w-32 h-20"
                    ></img>
                  </div>
                  <div className="text-center w-32 text-purple-900 text-sm">
                    <p className="font-bold">Duis lectus est.</p>
                    <p>$12.00 - $15.00</p>
                  </div>
                </div>
                <div>
                  <div>
                    <img
                      src="/images/blog/img13.png"
                      alt="img.png"
                      className="object-cover w-32 h-20"
                    ></img>
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
                    <img
                      src="/images/blog/img12.png"
                      alt="img.png"
                      className="object-cover w-32 h-20"
                    ></img>
                  </div>
                  <div className="text-center w-32 text-purple-900 text-sm">
                    <p className="font-bold">Netus proin.</p>
                    <p>$12.00 - $15.00</p>
                  </div>
                </div>
                <div>
                  <div>
                    <img
                      src="/images/blog/img14.png"
                      alt="img.png"
                      className="object-cover w-32 h-20"
                    ></img>
                  </div>
                  <div className="text-center w-32 text-purple-900 text-sm">
                    <p className="font-bold">Platea in.</p>
                    <p>$12.00 - $15.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <h1 className="font-bold text-lg mb-6 text-center lg:text-start md:text-start">
                Follow
              </h1>
              <div className="flex gap-4 lg:justify-start md:justify-start justify-center">
                <div>
                  <Link href="https://www.facebook.com/osqazi">
                    <i className="fa-brands fa-facebook text-blue-600 text-2xl"></i>
                  </Link>
                </div>
                <div>
                  <Link href="https://www.instagram.com/osqazi.khatri">
                    <i className="fa-brands fa-square-instagram text-pink-500 text-2xl"></i>
                  </Link>
                </div>
                <div>
                  <Link href="https://x.com/osqazi">
                    <i className="fa-brands fa-square-twitter text-sky-400 text-2xl"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-10 text-center lg:text-start md:text-start">
              <h1 className="font-bold text-lg mb-6">Tags</h1>
              <div>
                <ul className="lg:flex gap-6">
                  <li className="underline text-purple-900 text-lg  hover:text-pink-500 hover:cursor-pointer my-2 lg:my-0 md:my-0">
                    General
                  </li>
                  <li className="underline text-purple-900 text-lg  hover:text-pink-500 hover:cursor-pointer my-2 lg:my-0 md:my-0">
                    Atsanil
                  </li>
                  <li className="underline text-purple-900 text-lg  hover:text-pink-500 hover:cursor-pointer my-2 lg:my-0 md:my-0">
                    Insas.
                  </li>
                  <li className="underline text-purple-900 text-lg  hover:text-pink-500 hover:cursor-pointer my-2 lg:my-0 md:my-0">
                    Bibsaas
                  </li>
                  <li className="underline text-purple-900 text-lg  hover:text-pink-500 hover:cursor-pointer my-2 lg:my-0 md:my-0">
                    Nulla.
                  </li>
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
