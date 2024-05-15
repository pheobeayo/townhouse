
import landinglogo from "../assets/images/logos/landinglogo.svg";
import { Link } from "react-router-dom";


export default function Header () {

  return (
    <nav className='w-screen'>
      <div className="fixed top-0 right-0 left-0 bg-gradient z-40 bg-white border-y ">
        <div className="flex gap-2 justify-center items-center">
          <img src={landinglogo} className="h-[40px] w-[160px]" alt="landinglogo" />

          <ul className="flex m-auto gap-16 text-lg">
              <li className="hidden md:inline-block hover:text-[var(--primary-01)] ">
              <Link to="/">Home</Link>
            </li>
            <li className="hidden md:inline-block hover:text-[var(--primary-01)]">
              <Link to="/about">About</Link>
            </li>
            <li className="hidden md:inline-block hover:text-[var(--primary-01)]">
              <Link to="/contact">Contact</Link>
            </li>
           
          </ul>

          <Link
              to="/sign_in"
            >
              {" "}
              <button className="bg-[var(--primary-01)] hover:bg-[var(--primary-02)] text-white font-semibold py-2 px-4 border border-[var(--primary-01)] rounded w-40">
                Sign in
              </button>
            </Link>

          
          </div>
        </div>
      

      
    </nav>
  )
}


