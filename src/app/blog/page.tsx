import Link from "next/link";
export default function Blog() {
  const blogs = [
    {
      id: 1,
      title: "Mauris at orci non vulputate diam tincidunt nec.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
      author: "Surf Auxion",
      date: "Aug 09 2020",
      href: "/blogs/",
      pic: "/images/blog/img1.png",
    },
    {
      id: 2,
      title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
      author: "Surf Auxion",
      date: "Aug 09 2020",
      href: "/blogs/",
      pic: "/images/blog/img2.png",
    },
    {
      id: 3,
      title: "Sit nam congue feugiat nisl, mauris amet nisi. ",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
      author: "Surf Auxion",
      date: "Aug 09 2020",
      href: "/blogs/",
      pic: "/images/blog/img3.png",
    },
  ];

  return (
    <div>
      <div className="mx-44 my-28">
        <div className="grid grid-cols-2 gap-[420px]">
          <div className="col-span-1 w-[700px]">
            {blogs.map((blog, i) => {
              return (
                <div>
                  <div className="w-full">
                    <img
                      src={blog.pic}
                      alt="img.png"
                      className="object-contain w-full"
                    ></img>
                  </div>
                  <div className="flex gap-4 text-purple-900 mt-8">
                    <div className="flex gap-2 items-center">
                      <i className="fa-solid fa-pen-nib text-pink-600"></i>
                      <p className=" bg-pink-200 px-12">{blog.author}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <i className="fa-solid fa-calendar-days text-yellow-500"></i>
                      <p className=" bg-pink-200 px-10">{blog.date}</p>
                    </div>
                  </div>
                  <p className="text-xl text-purple-900 font-bold my-5">
                    {blog.title}
                  </p>
                  <p className="text-purple-900 text-sm">{blog.desc}</p>
                  <div className="flex gap-2 items-center mt-5">
                    <Link href={`${blog.href}${blog.id}`}>
                      <p className="text-purple-900 font-bold text-sm">
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
                <p className="font-bold text-lg">Search</p>
                <div className="lg:flex justify-between border border-gray-300 rounded-sm mt-3">
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
            <div className="mt-10 w-full">
                <h1 className="font-bold text-lg mb-4">Categories</h1>
                <div className="flex justify-between gap-4 mb-2">
                <button className="bg-pink-500 w-40 py-2 pl-2 rounded-sm text-white font-normal text-start">Hobbies (14)</button>
                <button className=" w-40 py-2  pl-2 rounded-sm text-gray-700 font-normal text-start">Women (21)</button>
                </div>
                <div className="flex justify-between gap-4 mb-2">
                <button className=" w-40 py-2  pl-2 rounded-sm text-gray-700 font-normal text-start">Women (21)</button>
                <button className=" w-40 py-2  pl-2 rounded-sm text-gray-700 font-normal text-start">Women (21)</button>
                </div>
                <div className="flex justify-between gap-4 mb-2">
                <button className=" w-40 py-2  pl-2 rounded-sm text-gray-700 font-normal text-start">Women (21)</button>
                <button className=" w-40 py-2  pl-2 rounded-sm text-gray-700 font-normal text-start">Women (21)</button>
                </div>
                    
            </div>


          </div>


        </div>
      </div>
    </div>
  );
}
