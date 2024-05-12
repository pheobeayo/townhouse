import footerbackground from "../assets/images/backgrounds/footerbackground.svg";

export default function LandingFooter() {
  return (
    <footer className="p-6 h-20">
      <figure className="relative  transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 w-full">
        <div>
          {" "}
          <img src={footerbackground} alt="footerbackground"  />
        </div>

        <figcaption className="absolute bottom-40 grid place-items-center mx-80 ">
          <h1 className="text-white font-semibold text-5xl">
            Join our community and sign up for exclusive tips and insights
          </h1>
          <div className="">
        <form
        
          className=" pt-[30px]"
        >
          <div className="flex w-full">
            <input
              type="text"
              className=" px-[6px] sm:px-[60px] 
              sm:py-3 border 
            border-gray-300 rounded-l-md 
            focus:outline-none focus:border-[var(--primary-01)] bg-transparent"
              placeholder="Your Email Address Here"
              
            />
            <button
                className="px-2 sm:px-4 py-2 bg-[var(--primary-01)] hover:bg-[var(--primary-02)] text-white rounded-r-md focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
        </figcaption>
      </figure>
      <div className="flex items-center justify-center py-1">
        <p className="text-[13px]">2024 Copyright. All rigths reserved</p>
      </div>
    </footer>
  );
}
