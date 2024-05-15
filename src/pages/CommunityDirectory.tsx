import { useContext, useEffect } from "react";
import { GlobalContext } from "../context";
import Nav from "../components/Nav";
import { Directory } from "../types/definitions";
import sample11 from "../assets/images/sample11.svg";

export default function CommunityDirectory() {
  const { user } = useContext(GlobalContext);
  const { username, photo, location } = user;
  const directory: Directory[] = [
    {
      title: "Call Emergency Number",
      description: ` Police`,
      secondtitle: "Call Local Police Station Number",
      image: sample11,
    },
    {
      title: "Call Emergency Number",
      description: `Fire Department`,
      secondtitle: "Call Fire Station Number",
      image: sample11,
    },
    {
      title: "Call Emergency Number",
      description: `Ambulance`,
      secondtitle: "Call Health Center Number",
      image: sample11,
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
      <div className="grid max-sm:grid-rows-3 gap-4 sm:grid-rows-3 md:grid-rows-3">
        {directory.slice(0, 3).map((directory) => {
          return (
            <div className="flex rounded-[20px] gap-4 border-[1px] w-1/2">
              <img
                src={directory.image}
                alt={directory.title}
                className="w-[182px] h-[200px] rounded-bl-[20px] rounded-tl-[20px]"
              />
              <div className="flex flex-col gap-4  p-4">
                <div className="flex items-center justify-center rounded-[50px] border-[1px] h-[50px] px-1 w-[200px] text-white bg-[#DC0E62]">
                  <p className="capitalize text-[13px]">{directory.title}</p>
                </div>
                <div className="flex items-center justify-center rounded-[50px] border-[1px] h-[50px] px-1 w-[250px] bg-[#D2D0D2]">
                  <p className="capitalize text-[13px]">
                    {directory.secondtitle}
                  </p>
                </div>
                <p className="text-[20px] mt-2 text-black font-bold ">
                  {directory.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
