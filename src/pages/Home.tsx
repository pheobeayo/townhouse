import { openDialog } from "../components/actions"
//import { FaBuilding, FaFacebook, FaPhone } from "react-icons/fa"
//import { FaLocationPin } from "react-icons/fa6";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../context";
import { CiLocationOn, CiSearch, CiCalendarDate, CiShare2 } from "react-icons/ci";
import { IoIosNotificationsOutline, IoIosHeartEmpty } from "react-icons/io";
import { AiOutlineMessage } from "react-icons/ai";
import { Link } from "react-router-dom"
import { MdChevronRight } from "react-icons/md";
import Sample1 from "../assets/images/sample1.svg"
import Sample2 from "../assets/images/sample2.png"
import { Event, Bulletin } from "../types/definitions";

export default function Home() { 
    const {username,photo} =useContext(GlobalContext);

    const events:Event[]=[
        {
            title:"Fiesta Lane Block Party",
            host:"Molly Foers",
            startingTime:"3pm",
            date:"Friday, May 31st",
            attendees:25,
            location:"10 Fiesta Lane, Rotterdam, Netherland",
            image:Sample1,
        },
        {
            title:"Fiesta Lane Block Party",
            host:"Molly Foers",
            startingTime:"3pm",
            date:"Friday, May 31st",
            attendees:25,
            location:"10 Fiesta Lane, Rotterdam, Netherland",
            image:Sample1,
        },
        {
            title:"Fiesta Lane Block Party",
            host:"Molly Foers",
            startingTime:"3pm",
            date:"Friday, May 31st",
            attendees:25,
            location:"10 Fiesta Lane, Rotterdam, Netherland",
            image:Sample1,
        }
    ]

    let bulletins:Bulletin[]=[
        {
            title:"Babysitter available",
            description:`Experienced and reliable babysitter offering childcare service
            in the neighbourhood.`,
            postedOn:"25 mins ago",
            image:Sample2
        },
        {
            title:"Babysitter available",
            description:`Experienced and reliable babysitter offering childcare service
            in the neighbourhood.`,
            postedOn:"25 mins ago",
            image:Sample2
        },
        {
            title:"Babysitter available",
            description:`Experienced and reliable babysitter offering childcare service
            in the neighbourhood.`,
            postedOn:"25 mins ago",
            image:Sample2
        }
    ]

	useEffect(()=>{
		window.scrollTo(0,0)
	},[])
    return (
        <div>
			<div className="flex w-full max-sm:text-base  items-center justify-between">
                <p className="text-2xl max-sm:text-base capitalize">Hi, {username}</p>
                <button onClick={()=>openDialog("new_features_dialog")}>
                    <IoIosNotificationsOutline className="w-[24px] h-[24px] hover:text-[var(--primary-01)]"/>
                </button>
                <form className="flex gap-2 text-[gray-7-text] items-center justify-center border-[1px] px-4 py-2 rounded-[20px] border-[var(--gray-5-stroke)]">
                    <CiSearch className="w-[20px] h-[20px]"/>
                    <input type="text" placeholder="Search" className="outline-none sm:w-[400px]"/>
                </form>
                <div className="flex justify-center items-center gap-2">
                    <CiLocationOn className="w-[16px] h-[16px]"/>
                    <p>Rotterdam</p>
                </div>
                <div>
                    {photo===null?(
                        <div className="bg-gray-300 flex items-center justify-center w-[42px] h-[42px] rounded-[30px]">
                            <span className="uppercase">{username.slice(0,2)}</span>
                        </div>
                    ):(
                        <img src={photo} alt="user profile" className="w-[42px] h-[42px] rounded-[30px]"/>
                    )}
                </div> 
			</div>

		    <p className="mt-10 text-lg sm:w-[600px]">Welcome to Townhouse. Here, you'll find everything you need to get acquainted with your neighbourhood.</p>

            <div className="flex mt-6 flex-col gap-10 py-2 pb-10">
                <div>
                    <div className="flex justify-between w-full">
                        <p className="font-semibold text-xl mb-4">Events</p>
                        <Link to="/events" className="flex text-base gap-[2px] items-center justify-center">
                            <span>View all events</span>
                            <MdChevronRight className="w-[20px] h-[20px] mt-1"/>
                        </Link>
                    </div>
                    <div className="grid max-sm:grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                        {events.slice(0,5).map((event)=>{
                            return(
                                <div className="flex rounded-[20px] gap-4 border-[1px] flex-col p-4">
                                    <div className="flex gap-4">
                                        <img src={event.image} alt="" className="w-[131px] h-[136px] rounded-[10px]"/>
                                        <div className="flex flex-col gap-1">
                                            <p className="capitalize text-lg font-semibold">{event.title}</p>
                                            <p className="text-[14px] font-semibold"><span className="font-normal text-gray-500">Hosted by </span>{event.host}</p>
                                            <div className="flex gap-2 text-[13px]">
                                                <CiCalendarDate className="w-[20px] h-[20px]"/>
                                                <p>{event.date} - {event.startingTime}</p>
                                            </div>
                                            <div className="flex gap-2 text-[13px]">
                                                <CiLocationOn className="w-[20px] h-[20px]"/>
                                                <p>{event.location}</p>
                                            </div>
                                            <div className="flex gap-2 mt-2 text-[13px]">
                                                <p className="w-[20px] h-[20px]">😊</p>
                                                <p>{event.attendees} people are going</p>
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
                                            <button className="flex items-center h-[36px] bg-[var(--secondary-07)] px-3 rounded-md justify-center">
                                                View Details
                                            </button>
                                            <button className="uppercase text-white rounded-md px-3 h-[36px] bg-[var(--primary-01)] flex items-center justify-center">
                                                rsvp
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div>
                    <div className="flex justify-between w-full">
                        <p className="font-semibold text-xl mb-4">Bulletin board</p>
                        <Link to="/bulletin_board" className="flex text-base gap-[2px] items-center justify-center">
                            <span>View all posts</span>
                            <MdChevronRight className="w-[20px] h-[20px] mt-1"/>
                        </Link>
                    </div>
                    <div className="grid max-sm:grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                        {bulletins.slice(0,5).map((bulletin)=>{
                            return(
                                <div className="flex rounded-[20px] gap-4 border-[1px]">
                                    <img src={bulletin.image} alt={bulletin.title} className="w-[182px] h-[200px] rounded-bl-[20px] rounded-tl-[20px]"/>
                                    <div className="flex flex-col gap-1  p-4">
                                        <div className="flex items-center justify-center rounded-[50px] border-[1px] h-[30px] px-1 w-[190px]">
                                            <p className="capitalize text-[13px]">{bulletin.title}</p>
                                        </div>
                                        <p className="text-[13px] mt-2 text-gray-500">
                                            {bulletin.description}
                                        </p>
                                        
                                       <p className="mt-2 text-[13px] text-[var(--primary-01)]">{bulletin.postedOn}</p>

                                        <div className="flex justify-between items-center">
                                            <div className="flex gap-4 items-center justify-center">
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
                                            <div className="flex items-center justify-center gap-3">
                                                <Link to="" className="text-[var(--primary-01)] font-semibold">Contact</Link>
                                                <img src={bulletin.image} alt={bulletin.title} className="w-[30px] h-[30px] rounded-[50px]]"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
           </div>
        </div>
    );
};

