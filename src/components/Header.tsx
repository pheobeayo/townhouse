import landinglogo from "../assets/images/logos/landinglogo.svg";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const links = [
    {
      label: "Home",
      path: "/landing_page",
    },
    {
      label: "About",
      path: "/about",
    },
    {
      label: "Contact",
      path: "/contact",
    },
  ];

  return (
    <nav className="w-screen">
      <div className="fixed top-0 right-0 left-0 bg-gradient z-40 bg-white px-6 py-3 border-y ">
        <div className="flex gap-2 justify-center items-center">
          <img
            src={landinglogo}
            className="h-[40px] w-[160px]"
            alt="landinglogo"
          />

          <ul className="flex m-auto gap-16 text-lg">
            {links.map((link, i) => (
              <li
                className={`hidden md:inline-block font-medium ${
                  location.pathname === link.path
                    ? "text-[var(--primary-01)]"
                    : "hover:text-[var(--primary-01)]"
                }`}
                key={i}
              >
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>

          <Link to="/sign_in">
            <button className="bg-[var(--primary-01)] hover:bg-[var(--primary-02)] text-white font-semibold py-2 px-4 border border-[var(--primary-01)] rounded w-40">
              Sign in
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
