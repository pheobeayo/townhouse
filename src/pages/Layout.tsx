import { Outlet, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { NewFeatures } from "../components/dialog";
import {
  MdClose,
  MdMenu,
  MdHome,
  MdOutlineHome,
  MdGroup,
  MdOutlineGroup,
  MdAssignment,
  MdOutlineAssignment,
  MdLogout,
  MdSettings,
  MdOutlineSettings,
  MdEventNote,
  MdOutlineEventNote,
  MdHelpCenter,
} from "react-icons/md";
import { FaUser, FaRegUser } from "react-icons/fa6";
import { err_toast, success_toast } from "../components/Feedback";
import Logo from "../assets/images/logos/logo.svg";
import { toggleDialog } from "../components/actions";

export default function Layout() {
  let [showMobileSidebar, setShowMobileSidebar] = useState(false);
  let [isMobile, setIsMobile] = useState(false);

  const location = useLocation();
  async function logout() {
    try {
      //sign out
      localStorage.clear();
      success_toast(`Successfull sign out`);
      window.location.href = "/?access_token=''";
    } catch (error: any) {
      console.log(error);
      err_toast(error.message);
    }
  }

  let links = [
    {
      name: "Home",
      icon: <MdHome className="w-[28px] h-[28px]" />,
      OutlineIcon: <MdOutlineHome className="w-[28px] h-[28px]" />,
      to: "/",
    },
    {
      name: "Events",
      icon: <MdEventNote className="w-[28px] h-[28px]" />,
      OutlineIcon: <MdOutlineEventNote className="w-[28px] h-[28px]" />,
      to: "/events",
    },
    {
      name: "Bulletin Board",
      icon: <MdAssignment className="w-[28px] h-[28px]" />,
      OutlineIcon: <MdOutlineAssignment className="w-[28px] h-[28px]" />,
      to: "/bulletin_board",
    },
    {
      name: "Neighbour Connect",
      icon: <MdGroup className="w-[28px] h-[28px]" />,
      OutlineIcon: <MdOutlineGroup className="w-[28px] h-[28px]" />,
      to: "/neighbours",
    },
    {
      name: "Community Drectory",
      icon: <FaUser className="w-[28px] h-[28px]" />,
      OutlineIcon: <FaRegUser className="w-[28px] h-[28px]" />,
      to: "/community_directory",
    },
    {
      name: "Profile",
      icon: <FaUser className="w-[28px] h-[28px]" />,
      OutlineIcon: <FaRegUser className="w-[28px] h-[28px]" />,
      to: "/profile",
    },

    {
      name: "Settings",
      icon: <MdSettings className="w-[28px] h-[28px]" />,
      OutlineIcon: <MdOutlineSettings className="w-[28px] h-[28px]" />,
      to: "/settings",
    },
    {
      name: "Help",
      icon: <MdHelpCenter className="w-[28px] h-[28px]" />,
      OutlineIcon: <MdHelpCenter className="w-[28px] h-[28px]" />,
      to: "/help",
    },

  ];

  // Close the dropdown if the user clicks outside of it
  window.onclick = function (event: any) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };

  let show_mobile_sidebar_btn = document.querySelector(
    "#show_mobile_sidebar_btn"
  );
  show_mobile_sidebar_btn?.addEventListener("click", () => {
    setShowMobileSidebar(true);
  });

  window.onresize = () => {
    if (screen.width < 640) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    console.log("screen changed");
  };

  useEffect(() => {
    console.log(location.pathname);
  }, [location.pathname]);
  return (
    <>
      <div className={"flex max-sm:flex-col h-screen"}>
        {!isMobile ? (
          <nav className="sm:w-[150px] bg-[var(--gray-1-fill)] fixed h-screen">
            <div className="flex flex-col py-4 h-full w-full items-center">
              <Link to="/">
                <img src={Logo} alt="Logo" className="w-[42px] h-[46px]" />
              </Link>
              <div className="flex flex-col items-center gap-[10px] mt-[15px] w-[81px]">
                {links.map((link, index) => (
                  <Link
                    to={link.to}
                    className={
                      location.pathname === link.to
                        ? "flex flex-col items-center text-[var(--primary-01)]"
                        : "hover:text-[var(--primary-01)] flex flex-col items-center"
                    }
                    key={index}
                  >
                    {location.pathname === link.to
                      ? link.icon
                      : link.OutlineIcon}
                    <span className="text-center text-sm">{link.name}</span>
                  </Link>
                ))}
                <button
                  onClick={logout}
                  className="flex flex-col text-sm items-center hover:text-[var(--primary-01)]"
                >
                  <MdLogout className="w-[28px] h-[28px]" />
                  Log out
                </button>
              </div>
            </div>
          </nav>
        ) : (
          <nav className="bg-[var(--primary-01)] text-white shadow-sm">
            <div className="px-2 py-2 flex items-center justify-between ">
              <div className="flex gap-2 items-center">
                <img src={Logo} alt="Logo" width={25} height={25} />
                <p className="text-base font-semibold">Townhouse</p>
              </div>
              <button
                id="show_mobile_sidebar_btn"
                onClick={() => setShowMobileSidebar(true)}
                className="rounded-md p-1 border-[1px]"
              >
                <MdMenu className="w-5 h-5" />
              </button>
            </div>
          </nav>
        )}

        <div className="sm:ml-[150px] bg-[var(--grey-1-fill)] flex flex-col flex-grow p-10">
          <Outlet />
        </div>
      </div>

      {showMobileSidebar === true ? (
        <div
          id="mobile-sidebar"
          className="max-md-nav py-6 bg-white z-10 fixed top-0 bottom-0 left-0 right-0 h-[100vh]"
        >
          <div className="flex flex-col">
            <div className="flex items-center px-5">
              <button
                onClick={() => setShowMobileSidebar(false)}
                className="ml-auto"
              >
                <MdClose className="w-7 h-7" />
              </button>
            </div>

            <div className="flex flex-col overflow-y-auto">
              {links.map((link, index) => (
                <Link
                  to={link.to}
                  className={
                    location.pathname === link.to
                      ? "px-9 py-4 bg-white text-[#213547]"
                      : "px-9 py-4 hover:bg-slate-200 hover:text-[#213547]"
                  }
                  onClick={() => setShowMobileSidebar(false)}
                  key={index}
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={logout}
                className="px-9 py-4 text-left text-[#213547]"
              >
                Log out
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <NewFeatures data={{ functions: { toggleDialog } }} />
    </>
  );
}
