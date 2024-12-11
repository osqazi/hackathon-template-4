import Hero2 from "../components/Hero2";

export default function Login() {
  return (
    <div>
      <Hero2 name="My Account" add1="Home . Pages" add2=". My Account" />

      <div className="flex justify-center items-center w-full px-0 sm:px-16 lg:px-0 mt-32 mb-16">
        {/* Form Section */}
        <div className="w-full sm:w-[90%] md:w-[50%] lg:w-[30%] text-center">
          <div className="text-3xl font-extrabold py-8 px-4 sm:px-8">
            <h1 className="mb-2">Login</h1>
            <p className="font-normal text-sm text-gray-400 mb-6">Please login using account detail below.</p>
            <form className="text-sm font-normal">
              <div className="form-group mb-4">
                <input
                  type="email"
                  className="form-control py-3 px-2 border border-gray-200 rounded-md w-full"
                  id="email"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="form-group mb-4">
                <input
                  type="password"
                  className="form-control py-3 px-2 border border-gray-200 rounded-md w-full"
                  id="password"
                  placeholder="Password"
                  required
                />
              </div>
              <a href="#" className="hover:cursor-pointer"><p className="font-normal text-sm text-gray-400 mb-6 text-left">Forgot your password?</p></a>
              <div className="form-group">
                <input
                  type="button"
                  className="form-control py-3 px-4 border border-gray-200 rounded-md text-white bg-pink-600 w-full hover:bg-pink-400 hover:cursor-pointer"
                  value={"Sign In"}
                  required
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Brand Image */}
      <div className="flex justify-center p-8 sm:p-16">
        <img
          src="/images/brand.png"
          alt="Brand"
          className="w-full max-w-[70rem] h-auto"
        />
      </div>
    </div>
  );
}
