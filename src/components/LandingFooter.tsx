import footerbackground from "../assets/images/backgrounds/footerbackground.svg";

export default function LandingFooter() {
  return (
    <footer className="px-6 w-screen h-20">
      <figure className="relative  transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 w-full">
        <div>
          {" "}
          <img src={footerbackground} alt="footerbackground"  />
        </div>

        <figcaption className="absolute bottom-40 grid place-items-center mx-80 ">
          <h1 className="text-white font-mono font-bold text-5xl">
            Join our community and sign up for exclusive tips and insights
          </h1>
          <div className="">
        <form
        
          className=" pt-[30px]"
        >
          <div className="flex w-full">
            <input
              type="text"
              className="sm:mr-2 px-[6px] sm:px-[60px] 
              sm:py-3 border 
            border-gray-300 rounded-l-md 
            focus:outline-none focus:border-blue-500 bg-transparent"
              placeholder="Email Address"
              
            />
            <button
              className="px-2 sm:px-4 py-2 bg-[#DD384C] text-black
            rounded-r-md hover:bg-white
            focus:outline-none"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
        </figcaption>
      </figure>
    </footer>
  );
}
