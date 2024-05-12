//import { FaBuilding, FaFacebook, FaPhone } from "react-icons/fa"
//import { FaLocationPin } from "react-icons/fa6";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../context";
import { CiLocationOn, CiCalendarDate, CiShare2 } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { AiOutlineMessage } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom"
import { MdChevronRight } from "react-icons/md";
import Sample2 from "../assets/images/sample2.png"
import { Bulletin } from "../types/definitions";
import Nav from "../components/Nav"
import { CiPickerEmpty } from "react-icons/ci";


export default function Home() { 
    const navigate=useNavigate()
    const API_URL=`https://townhouse-server.onrender.com`
    const {user,events}=useContext(GlobalContext);
    const {username,photo,location}=user;
    
    let bulletins:Bulletin[]=[
        {
            title:"Babysitter available",
            description:`Experienced and reliable babysitter offering childcare service
            in the neighbourhood.`,
      postedOn: "25 mins ago",
      image: Sample2,
    },
    {
      title: "Babysitter available",
      description: `Experienced and reliable babysitter offering childcare service
            in the neighbourhood.`,
      postedOn: "25 mins ago",
      image: Sample2,
    },
    {
      title: "Babysitter available",
      description: `Experienced and reliable babysitter offering childcare service
            in the neighbourhood.`,
      postedOn: "25 mins ago",
      image: Sample2,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Nav data={{ username, photo, location }} />
      <p className="mt-10 text-lg sm:w-[600px]">
        Welcome to Townhouse. Here, you'll find everything you need to get
        acquainted with your neighbourhood.
      </p>

            <div className="flex mt-6 flex-col gap-10 py-2 pb-10">
                <div>
                    <div className="flex justify-between w-full">
                        <p className="font-semibold text-xl mb-4">Events</p>
                        <Link to="/events" className="flex text-base gap-[2px] items-center justify-center">
                            <span>View all events</span>
                            <MdChevronRight className="w-[20px] h-[20px] mt-1"/>
                        </Link>
                    </div>
                    <div className="flex items-center justify-center">
                        {events.length>0?(
                            <div className="grid max-sm:grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                            {events.slice(0,5).map((event)=>{
                            return(
                                <div className="flex rounded-[20px] gap-4 border-[1px] flex-col p-4" key={event.id}>
                                    <div className="flex gap-4">
                                        <div className="flex flex-col items-center justify-center rounded-md bg-gray-100">
                                        <img src={`${API_URL}/drive/download/${event.event_photo}`} alt="" className="w-full h-[136px] rounded-md "/>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <p className="capitalize text-lg font-semibold">{event.title}</p>
                                            <p className="text-[14px] font-semibold"><span className="font-normal text-gray-500">Hosted by </span>{event.host}</p>
                                            <div className="flex gap-2 text-[13px]">
                                                <CiCalendarDate className="w-[20px] h-[20px]"/>
                                                <p>{event.date} - {event.starting_time}</p>
                                            </div>
                                            <div className="flex gap-2 text-[13px]">
                                                <CiLocationOn className="w-[20px] h-[20px]"/>
                                                <p>{event.event_location}</p>
                                            </div>
                                            <div className="flex gap-2 mt-2 text-[13px]">
                                                <p className="w-[20px] h-[20px]">😊</p>
                                                {event.attendees===null?"":(
                                                    <p>{event.attendees.length} people are going</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-10 items-center justify-center">
                                            <button>
                                                <IoIosHeartEmpty className="w-[20px] h-[20px] hover:text-[var(--primary-01)]"/>
                                            </button>
                                            <button>
                                                <AiOutlineMessage className="w-[20px] h-[20px] hover:text-[var(--primary-01)]"/>
                                            </button>
                                            <button>
                                                <CiShare2 className="w-[20px] h-[20px] hover:text-[var(--primary-01)]"/>
                                            </button>
                                        </div>
                                        <div className="flex gap-3 items-center justify-center">
                                            <button onClick={()=>navigate(`/events/${event.id}`)} className="flex items-center h-[36px] bg-[var(--secondary-07)] px-3 rounded-md justify-center">
                                                View Details
                                            </button>
                                            <button className="uppercase text-white rounded-md px-3 h-[36px] bg-[var(--primary-01)] flex items-center justify-center">
                                                rsvp
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )})}
                            </div>
                        ):(
                            <div className="flex-grow h-[40vh] gap-1 flex flex-col items-center justify-center">
                                <CiPickerEmpty className="w-[70px] h-[70px] text-gray-500"/>
                                <p className="text-lg">Oops, currently there are no events</p>
                                <Link to="/create_event" className='text-[var(--primary-01)] text-base'>Create an event</Link>
                            </div>
                        )}
                    </div>
                </div>

        <div>
          <div className="flex justify-between w-full">
            <p className="font-semibold text-xl mb-4">Bulletin board</p>
            <Link
              to="/bulletin_board"
              className="flex text-base gap-[2px] items-center justify-center"
            >
              <span>View all posts</span>
              <MdChevronRight className="w-[20px] h-[20px] mt-1" />
            </Link>
          </div>
          <div className="grid max-sm:grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {bulletins.slice(0, 5).map((bulletin) => {
              return (
                <div className="flex rounded-[20px] gap-4 border-[1px]">
                  <img
                    src={bulletin.image}
                    alt={bulletin.title}
                    className="w-[182px] h-[200px] rounded-bl-[20px] rounded-tl-[20px]"
                  />
                  <div className="flex flex-col gap-1  p-4">
                    <div className="flex items-center justify-center rounded-[50px] border-[1px] h-[30px] px-1 w-[190px]">
                      <p className="capitalize text-[13px]">{bulletin.title}</p>
                    </div>
                    <p className="text-[13px] mt-2 text-gray-500">
                      {bulletin.description}
                    </p>

                    <p className="mt-2 text-[13px] text-[var(--primary-01)]">
                      {bulletin.postedOn}
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
                          src={bulletin.image}
                          alt={bulletin.title}
                          className="w-[30px] h-[30px] rounded-[50px]]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
