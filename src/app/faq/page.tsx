import Hero2 from "../components/Hero2";

export default function Faq() {
  return (
    <div>
      <Hero2 name="FAQ" add1="Home . Pages" add2=". Faq" />

      <div className="container grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-10 w-screen px-8 sm:px-16 lg:px-28 mt-32 mb-16">
        
        {/* FAQ Section */}
        <div className="col-span-1">
          <h1 className="text-4xl font-bold mb-10">General Information</h1>
          <div>
            <h4 className="font-bold mb-6 mt-10">Eu dictumst cum at sed euismood condimentum?</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
          </div>
          <div>
            <h4 className="font-bold mb-6 mt-10">Magna bibendum est fermentum eros.</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
          </div>
          <div>
            <h4 className="font-bold mb-6 mt-10">Odio muskana hak eris conseekin sceleton?</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
          </div>
          <div>
            <h4 className="font-bold mb-6 mt-10">Elit id blandit sabara boi velit gua mara?</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
          </div>
        </div>

        {/* Form Section */}
        <div className="col-span-1">
          <div className="bg-blue-50 text-2xl font-bold py-16 px-6 sm:px-12">
            <h1 className="mb-8">Ask a Question</h1>
            <form className="text-sm font-normal">
              <div className="form-group mb-6">
                <input
                  type="text"
                  className="form-control py-4 px-2 border border-gray-200 rounded-md w-full"                  
                  placeholder="Your Name *"
                  required
                />
              </div>
              <div className="form-group mb-6">
                <input
                  type="text"
                  className="form-control py-4 px-2 border border-gray-200 rounded-md w-full"
                  placeholder="Subject *"
                  required
                />
              </div>
              <div className="form-group mb-6">
  <textarea
    className="form-control py-4 px-2 border border-gray-200 rounded-md w-full"    
    placeholder="Type Your Message *"
    rows="10"
  ></textarea>
</div>

              <div className="form-group">
                <input
                  type="button"
                  className="form-control py-3 px-3 border border-gray-200 rounded-md text-white bg-pink-600 w-full sm:w-32 hover:bg-pink-400 hover:cursor-pointer"                  
                  value={"Send Mail"}
                  required
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Brand Image */}
      <div className="flex justify-center p-8 sm:p-16">
        <img src="/images/brand.png" alt="Brand" className="w-full max-w-[70rem] h-auto" />
      </div>
    </div>
  );
}
