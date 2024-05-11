import { useContext, useEffect } from "react";
import { GlobalContext } from "../context";
import Nav from "../components/Nav";
import { Connect } from "../types/definitions";
import sample6 from "../assets/images/sample6.svg";
import sample5 from "../assets/images/sample5.svg";
import sample7 from "../assets/images/sample7.svg";
import sample8 from "../assets/images/sample8.svg";
import { IoIosHeartEmpty } from "react-icons/io";
import { AiOutlineMessage } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CiShare2 } from "react-icons/ci";

export default function Neighbours() {
  const { username, photo, location } = useContext(GlobalContext);

  const connect: Connect[] = [
    {
      title: "Advice request",
      description: `Does anyone know how to get an aztec 984 drone to work?!`,
      postedOn: "25 mins ago",
      image: sample5,
    },
    {
      title: "Handyman available",
      description: `Professional and skilled handyman
      available for all your home repair needs.
      No job is too small.`,
      postedOn: "25 mins ago",
      image: sample6,
    },
    {
      title: "Tool available",
      description: `I have a drill and some gardening tools available if anyone needs any!`,
      postedOn: "25 mins ago",
      image: sample7,
    },
    {
      title: "Advice request",
      description: `Does anyone know how to get an aztec 984 drone to work?!`,
      postedOn: "25 mins ago",
      image: sample5,
    },
    {
        title: "Advice request",
        description: `Does anyone know how to get an aztec 984 drone to work?!`,
        postedOn: "25 mins ago",
        image: sample5,
      },
      {
        title: "Companion available",
        description: `Hey! I have two spare tickets to the Adele concert @8pm tomorrow! Who wants to join me?!`,
        postedOn: "25 mins ago",
        image: sample8,
      },
      {
        title: "Handyman available",
        description: `Professional and skilled handyman
        available for all your home repair needs.
        No job is too small.`,
        postedOn: "25 mins ago",
        image: sample6,
      },
      {
        title: "Tool available",
        description: `I have a drill and some gardening tools available if anyone needs any!`,
        postedOn: "25 mins ago",
        image: sample7,
      },
      {
        title: "Companion available",
        description: `Hey! I have two spare tickets to the Adele concert @8pm tomorrow! Who wants to join me?!`,
        postedOn: "25 mins ago",
        image: sample8,
      },
      {
        title: "Handyman available",
        description: `Professional and skilled handyman
        available for all your home repair needs.
        No job is too small.`,
        postedOn: "25 mins ago",
        image: sample6,
      },

  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <Nav data={{ username, photo, location }} />
      <div className="flex justify-between w-full">
        <p className="font-semibold text-xl mb-4 mt-10">
          Welcome to the{" "}
          <span className="text-[#DC0E62]">Neighbour Connect! </span>
          <br />
          Here you can offer or request advice, to borrow or lend something, or
          organize to meet a neighbour for a
          <br />
          cup of tea and exchange stories.
        </p>
        <Link
          to="/create_post"
          className="flex text-base gap-[2px] items-center justify-center"
        >
          <span>
            <button className="px-2 sm:px-4 py-2 bg-[var(--primary-01)] hover:bg-[var(--primary-02)] text-white rounded-lg w-40 focus:outline-none ">
              Create Listing
            </button>
          </span>
        </Link>
      </div>
      <div className="grid max-sm:grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2">
        {connect.slice(0, 10).map((connect) => {
          return (
            <div className="flex rounded-[20px] gap-4 border-[1px]">
              <img
                src={connect.image}
                alt={connect.title}
                className="w-[182px] h-[200px] rounded-bl-[20px] rounded-tl-[20px]"
              />
              <div className="flex flex-col gap-1  p-4">
                <div className="flex items-center justify-center rounded-[50px] border-[1px] h-[30px] px-1 w-[190px]">
                  <p className="capitalize text-[13px]">{connect.title}</p>
                </div>
                <p className="text-[13px] mt-2 text-gray-500">
                  {connect.description}
                </p>

                <p className="mt-2 text-[13px] text-[var(--primary-01)]">
                  {connect.postedOn}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex gap-4 items-center justify-center">
                    <button>
                      <IoIosHeartEmpty className="w-[20px] h-[20px] hover:text-[var(--primary-01)]" />
                    </button>
                    <button>
                      <AiOutlineMessage className="w-[20px] h-[20px] hover:text-[var(--primary-01)]" />
                    </button>
                    <button>
                      <CiShare2 className="w-[20px] h-[20px] hover:text-[var(--primary-01)]" />
                    </button>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <Link
                      to=""
                      className="text-[var(--primary-01)] font-semibold"
                    >
                      Contact
                    </Link>
                    <img
                      src={connect.image}
                      alt={connect.title}
                      className="w-[30px] h-[30px] rounded-[50px]]"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
