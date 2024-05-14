import { openDialog } from "../components/actions";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../context";
import Nav from "../components/Nav";
import { MdOutlineEdit } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import CircleProgressBar from "../components/CircleProgressBar";
import vector from "../assets/images/icons/Vector.svg";
import filledVector from "../assets/images/icons/Vector_filled.svg";
import ProgressBar from "../components/ProgressBar";
import Panel from "../components/Panel";
import PanelGroup from "../components/PanelGroup";
import Tag from "../components/Tag";
import av1 from "../assets/images/avatars/Mask group-1.png";
import av2 from "../assets/images/avatars/Mask group-2.png";
import av3 from "../assets/images/avatars/Mask group-3.png";
import av4 from "../assets/images/avatars/Mask group-4.png";
import av5 from "../assets/images/avatars/Mask group-5.png";
import av6 from "../assets/images/avatars/Mask group-6.png";
import av7 from "../assets/images/avatars/Mask group-7.png";
import Avatar from "../components/Avatar";

export default function Profile() {
  const { user } = useContext(GlobalContext);
  const { username, photo, location, email } = user;

  const tags = [
    { name: "Football" },
    { name: "Fine dining" },
    { name: "Poetry" },
    { name: "Cars" },
    { name: "Arts" },
    { name: "History" },
    { name: "Science & Tech" },
    { name: "Travel" },
    { name: "Film" },
    { name: "Film" },
    { name: "Film" },
    { name: "Film" },
  ];
  const avatars = [
    { src: av1 },
    { src: av2 },
    { src: av3 },
    { src: av4 },
    { src: av5 },
    { src: av6 },
    { src: av7 },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Nav data={{ username, photo, location }} />

      <div>
        <div className="flex gap-28 mb-8 mt-20">
          <div className="flex gap-7">
            <div>
              {photo ? (
                <img
                  src={photo}
                  alt="user profile"
                  className="w-[120px] h-[120px] rounded-[60px]"
                />
              ) : (
                <div className="bg-gray-300 flex items-center justify-center w-[120px] h-[120px] rounded-full">
                  <span className="uppercase text-xl">
                    {username.slice(0, 2)}
                  </span>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-2 py-3">
              <p className="text-2xl">{username}</p>
              <p className="text-gray-500 text-base">{email}</p>
              {!location.includes("null") && (
                <div className="flex gap-1 items-center ">
                  <CiLocationOn className="w-[16px] text-black h-[16px]" />
                  <p className="text-black text-[13px]">{location}</p>
                </div>
              )}
            </div>
            <MdOutlineEdit
              onClick={() => openDialog("")}
              className="hover:text-[var(--primary-01)] cursor-pointer w-[24px] ml-10 h-[24px]"
            />
          </div>

          <div className="flex gap-6 items-center text-2xl">
            <CircleProgressBar
              sqSize={100}
              circleWidth={120}
              progress={70}
              strokeWidth={10}
            />
            <p>Profile Completeness</p>
          </div>
        </div>

        <PanelGroup className="mt-10">
          <div>
            <h2 className="font-medium text-2xl mb-5">Experience points</h2>

            <Panel>
              <div className="flex gap-6 mb-6">
                <div>
                  <img src={vector} alt="vector" />
                </div>

                <div className="w-full">
                  <p className="font-medium text-2xl mb-3">
                    278 experience points
                  </p>
                  <ProgressBar />
                </div>
              </div>
              <div className="flex gap-4 px-10 py-5 bg-[#F8F8F8] rounded-2xl">
                <img src={filledVector} alt="Filled Vector" />
                <p className="text-base">
                  You received 25 points by RSVPing to the Street Gourmet
                  Festival.
                </p>
              </div>
            </Panel>
          </div>

          <div className="flex flex-col">
            <h2 className="font-medium text-2xl mb-5">
              Community Engagement Metrics
            </h2>

            <Panel className="grid grid-cols-2 gap-x-36 flex-1 content-between">
              <div>
                <p className="text-lg">Volunteer hours</p>
                <ProgressBar progress={60} strokeWidth="15px" />
              </div>

              <div>
                <p className="text-lg">Neighbourhood watch</p>
                <ProgressBar progress={85} strokeWidth="15px" />
              </div>
              <div>
                <p className="text-lg">Group membership</p>
                <ProgressBar progress={40} strokeWidth="15px" />
              </div>

              <div>
                <p className="text-lg">Event participation</p>
                <ProgressBar progress={45} strokeWidth="15px" />
              </div>
            </Panel>
          </div>

          <div className="flex flex-col">
            <div className="flex justify-between">
              <h2 className="font-medium text-2xl mb-5">Interests</h2>

              <MdOutlineEdit
                onClick={() => openDialog("")}
                className="hover:text-[var(--primary-01)] cursor-pointer w-[24px] ml-10 h-[24px]"
              />
            </div>

            <Panel className="flex items-start flex-wrap h-full content-start gap-3">
              {tags && tags.map((tag, i) => <Tag key={i}>{tag.name}</Tag>)}
            </Panel>
          </div>

          <div className="flex flex-col">
            <h2 className="font-medium text-2xl mb-5">
              Matchmaking suggestions
            </h2>

            <Panel className="h-full content-start">
              <p className="mb-6">
                Hi James! We’ve noticed that you and these people in your
                neighbourhood have some of the same interests. Maybe you could
                reach out to them to see what else you have in common.
              </p>

              <div className="flex flex-wrap gap-4">
                {avatars.map((avatar, i) => (
                  <Avatar src={avatar.src} key={i} />
                ))}
              </div>
            </Panel>
          </div>
        </PanelGroup>
      </div>
    </div>
  );
}
