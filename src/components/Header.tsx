
import landinglogo from "../assets/images/logos/landinglogo.svg";
import { Link } from "react-router-dom";


export default function Header () {

  return (
    <nav className="bg-white">
      <div className="fixed top-0 right-0 left-0 bg-gradient z-40 bg-white p-2 border-y ">
        <div className="flex gap-2 justify-center items-center px-10 pt-8 pr-10">
          <img src={landinglogo} alt="landinglogo" />

          <ul className="flex m-auto gap-16 ">
            <li className="hidden md:inline-block text-black text-xl font-serif hover:text-[#DC0E62] ">
              <Link to="/">Home</Link>
            </li>
            <li className="hidden md:inline-block text-black text-xl font-serif hover:text-[#DC0E62]">
              <Link to="/about">About</Link>
            </li>
            <li className="hidden md:inline-block  text-black text-xl font-serif hover:text-[#DC0E62]">
              <Link to="/contact">Contact</Link>
            </li>
           
          </ul>

          <Link
              to="/log-in"
              style={{ textDecoration: "none", color: "#ffffff" }}
            >
              {" "}
              <button className="bg-[#DC0E62] hover:bg-[##FF5100] text-[#ffffff] font-bold py-2 px-4 border border-[#DC0E62] rounded w-40">
                Log in{" "}
              </button>
            </Link>

          
          </div>
        </div>
      

      
    </nav>
  )
}


