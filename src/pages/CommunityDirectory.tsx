import { useContext, useEffect } from "react";
import { GlobalContext } from "../context";
import Nav from "../components/Nav";
import { Directory, Municipal } from "../types/definitions";
import police from "../assets/images/police.svg";
import ambulance from "../assets/images/ambulance.svg";
import fire from "../assets/images/fire.svg";
import guardian from "../assets/images/guardian.svg";
import park from "../assets/images/park.svg";
import management from "../assets/images/management.svg";
import { MdEditLocationAlt } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";

import { CiShare2 } from "react-icons/ci";

export default function CommunityDirectory() {
  const { user } = useContext(GlobalContext);
  const { username, photo, location } = user;
  const directory: Directory[] = [
    {
      title: "Centrum Police",
      description: ` 128 Tulip Street, Centrum, Rotterdam`,
      telephone: "+31 6 7485 5396",
      image: police,
    },
    {
      title: "Lifeline Ambulance",
      description: `741 Canal Road, Centrum, Rotterdam`,
      telephone: "+31 6 1389 6775",
      image: ambulance,
    },
    {
      title: "Firehouse 98",
      description: `56 Windmill Avenue, Centrum, 
      Rotterdam`,
      telephone: "+31 6 8931 5776",
      image: fire,
    },
    {
      title: "Guardian Response Team",
      description: `102 River Lane, Centrum, Rotterdam`,
      telephone: "+31 6 4532 9007",
      image: guardian,
    },
  ];
  const municipal: Municipal[] = [
    {
      title: "Meadowbrook Park",
      description: ` 29 Cheese Street, Centrum, 
      Rotterdam`,
      telephone: "+31 6 9922 4568",
      image: park,
    },
    {
      title: "Braun Waste Management",
      description: `47 Bicycle Boulevard, Centrum, 
      Rotterdam`,
      telephone: "+31 6 8574 6935",
      image: management,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Nav data={{ username, photo, location }} />
      <div className="flex justify-between w-full">
        <p className="font-semibold text-2xl mb-4 mt-10 leading-10 ">
          Community Directory
          <br />
          Emergency Contacts
        </p>
      </div>
      <div className="grid max-sm:grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 mb-6">
        {directory.slice(0, 4).map((directory) => {
          return (
            <div className="flex rounded-[20px] gap-4 border-[1px]">
              <img
                src={directory.image}
                alt={directory.title}
                className="w-[182px] h-[200px] rounded-bl-[20px] rounded-tl-[20px]"
              />
              <div className="flex flex-col gap-1  p-4">
                <div className="flex items-center justify-center rounded-[50px]  px-1 ">
                  <p className="capitalize text-[18px] font-bold">{directory.title}</p>
                </div>
                <div className="flex flex-row gap-4 ">
                  <button>
                    <MdEditLocationAlt className="w-[20px] h-[20px] hover:text-[var(--primary-01)]" />
                  </button>

                  <p className="text-[13px] mt-2 text-[#323232]">
                    {directory.description}
                  </p>
                </div>
                <div className="flex flex-row gap-4">
                  <button>
                    <MdLocalPhone className="w-[20px] h-[20px] hover:text-[var(--primary-01)]" />
                  </button>
                  <p className="text-[13px] mt-2 text-[#323232]">
                    {directory.telephone}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between w-full">
        <p className="font-semibold text-2xl mb-4 mt-10 leading-10 ">
          Municipal services
        </p>
      </div>
      <div className="grid max-sm:grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 mb-6">
        {municipal.slice(0, 2).map((municipal) => {
          return (
            <div className="flex rounded-[20px] gap-4 border-[1px]">
              <img
                src={municipal.image}
                alt={municipal.title}
                className="w-[182px] h-[200px] rounded-bl-[20px] rounded-tl-[20px]"
              />
              <div className="flex flex-col gap-1  p-4">
                <div className="flex items-center justify-center rounded-[50px] px-1 ">
                  <p className="capitalize text-[18px] font-bold">{municipal.title}</p>
                </div>
                
                <div className="flex flex-row gap-4 ">
                  <button>
                    <MdEditLocationAlt className="w-[20px] h-[20px] hover:text-[var(--primary-01)]" />
                  </button>

                  <p className="text-[13px] mt-2 text-[#323232]">
                    {municipal.description}
                  </p>
                </div>
                <div className="flex flex-row gap-4">
                  <button>
                    <MdLocalPhone className="w-[20px] h-[20px] hover:text-[var(--primary-01)]" />
                  </button>
                  <p className="text-[13px] mt-2 text-[#323232]">
                    {municipal.telephone}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
