import { openDialog } from "../components/actions"
//import { FaBuilding, FaFacebook, FaPhone } from "react-icons/fa"
//import { FaLocationPin } from "react-icons/fa6";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context";
import { FaRegThumbsUp } from "react-icons/fa6";
import { FaRegSmile } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { MdOutlineGroupAdd, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom"
import Select from 'react-select';
import Sample3 from "../assets/images/sample3.svg"
import {Event} from "../types/definitions"
import { Comment } from "../components/dialog"
import Nav from "../components/Nav"

type OptionType={
    value:string,
    label:string
}
const options:OptionType[] = [
  { value: 'Rotterdam', label: 'Rotterdam' },
  { value: 'London', label: 'London' },
  { value: 'Ramsgate', label: 'Ramsgate' },
];

export default function Events() { 
    const searchParams = new URLSearchParams(window.location.search);
    const {username,photo} =useContext(GlobalContext);
    const [eventPeriod,setEventPeriod]=useState("")
    const [locationOption, setLocationOption]=useState<any>(null);
    const events:Event[]=[
        {
            id:"0",
            title:"Donations from UPs",
            image:Sample3,
            host:"John Doe",
            date:"50 May 2024",
            subTitle:`We've donating and helding fundraiser from UPs `,
            description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore.`,
            startingTime:"15:00",
            location:"City Museum",
            attendees:25
        },
        {
            id:"1",
            title:"Donations from UPs",
            image:Sample3,
            host:"John Doe",
            date:"50 May 2024",
            subTitle:`We've donating and helding fundraiser from UPs `,
            description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore.`,
            startingTime:"15:00",
            location:"City Museum",
            attendees:25
        },
        {
            id:"2",
            title:"Donations from UPs",
            image:Sample3,
            host:"John Doe",
            date:"50 May 2024",
            subTitle:`We've donating and helding fundraiser from UPs `,
            description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore.`,
            startingTime:"15:00",
            location:"City Museum",
            attendees:25
        },
        {
            id:"3",
            title:"Donations from UPs",
            image:Sample3,
            host:"John Doe",
            date:"50 May 2024",
            subTitle:`We've donating and helding fundraiser from UPs `,
            description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore.`,
            startingTime:"15:00",
            location:"City Museum",
            attendees:25
        }

    ]
    const eventTypes=[
        {
            period:"New"
        },
        {
            period:"Happening"
        },
        {
            period:"Tomorrow"
        },
        {
            period:"Passed"
        },
        {
            period:"Saved"
        },
        {
            period:"Cancelled"
        }
    ]

    function toggleDialog(id:string){
        let dialog_bg=document.getElementById(id);
        dialog_bg?.classList.add("ease-in-out");
        dialog_bg?.classList.toggle("none");
        dialog_bg?.classList.add("duration-1000");
        dialog_bg?.classList.add("delay-2000");
    }

	useEffect(()=>{
		window.scrollTo(0,0)
       
        //console.log(searchParams.get("period"))
    },[eventPeriod])
    return (
        <div>
            <Nav data={{username,photo}}/>	
			<div className="mt-12 text-[14px]">
				<div className="pb-1 border-b-[1px] ">
                    <p className="text-2xl font-semibold">Events</p>
					<p className="mt-1">View all events happening around you</p>
				</div>
			</div>

            <div className="flex justify-between items-center h-[64px] mt-3 w-full">
                <div className="flex h-[40px] items-center justify-center gap-6 capitalize">
                    {eventTypes.map((event:any)=>{
                        return(
                            <Link to={`/events?period=${event.period}`} id={`tag_${event.period}`} key={event.period} onClick={()=>{
                                setEventPeriod(event.period)
                            }} className={searchParams.get("period")===event.period?"shadow-md w-fit px-2 h-full flex justify-center items-center rounded-[30px] bg-[var(--primary-01)] text-white":"w-fit px-2 h-full flex justify-center items-center rounded-[30px] hover:shadow-md hover:bg-[var(--primary-02)] hover:text-white"}>
                                <p>{event.period}</p>
                            </Link>
                        )
                    })}
                </div>

                <div className="flex justify-center items-center gap-2">
                    <p>Filter by Name</p>
                    <Select
                        defaultValue={locationOption}
                        onChange={setLocationOption}
                        placeholder="Location"
                        options={options}
                        className="w-[200px]"
                    />
                </div>
            </div>

            <div className="mt-3 pb-[88px]">
                <p className="font-semibold">{searchParams.get("period")!==null?searchParams.get("period"):"All"} Events</p>
                <div className="mt-8 grid max-sm:grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {events?events.map((event)=>{
                        return(
                    <div className="flex flex-col gap-3 p-3" key={event.id}>
                        <p className="text-[var(--primary-01)] font-semibold text-base">{event.title}</p>
                        <p>{event.subTitle}</p>
                        <img src={event.image} alt={event.title} className="rounded-md w-[533px] h-[130px]"/>
                        <div>
                            <p>{event.description}</p>
                        </div>
                        <div className="flex gap-2">
                            <div className="flex border-[1px]  border-[var(--gray-5-stroke)] items-center justify-center rounded-md h-[24px] px-4">
                                <p>{event.date}</p>
                            </div>
                            <div className="flex border-[1px] border-[var(--gray-5-stroke)] items-center justify-center rounded-md h-[24px] px-4">
                                <p>{event.location}</p>
                            </div>
                            <div className="flex border-[1px] border-[var(--gray-5-stroke)]  items-center justify-center rounded-md h-[24px] px-4">
                                <p>{event.startingTime}</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <button className="text-[var(--primary-01)] font-semibold text-base">Save</button>
                            <Link to={`/events/${event.id}`}  className="text-[var(--primary-01)] font-semibold text-base">Read more</Link>
                        </div>
                        <div className="justify-end flex items-center gap-4">
                            <button className="hover:text-[var(--primary-01)] active:text-[var(--primary-01)]">
                                <FaRegThumbsUp className="w-[20px] h-[20px]"/>
                            </button>
                            <button className="hover:text-[var(--primary-01)] active:text-[var(--primary-01)]">
                                <FaRegSmile  className="w-[20px] h-[20px]"/>
                            </button>
                            <button onClick={()=>openDialog("comment_dialog")}  className="hover:text-[var(--primary-01)] active:text-[var(--primary-01)]">
                                <AiOutlineMessage className="w-[20px] h-[20px]"/>
                            </button>
                        </div>
                    </div>
                        )
                    }):(<p>No Events</p>)} 
                </div>
            </div>

            <div className="fixed bottom-0 px-10 sm:left-[150px] z-10 bg-white right-0 h-[70px]">
                <div className="flex items-center justify-between h-full">
                    <button className="flex gap-4 items-center justify-center">
                        <MdOutlineGroupAdd  className="w-[24px] text-[var(--primary-01)] h-[24px]"/>
                        <div className="flex flex-col items-start">
                            <p className="text-[var(--primary-01)] font-semibold text-base">Create group event</p>
                            <p className="text-gray-500 text-[13px]">Add a new event to the group</p>
                        </div>
                    </button>

                    <button className="flex gap-4 items-center justify-center">
                        <MdEdit className="w-[24px] text-[var(--primary-01)] h-[24px]"/>
                        <div className="flex flex-col items-start">
                            <p className="text-[var(--primary-01)] font-semibold text-base">Create a new post</p>
                            <p className="text-gray-500 text-[13px]">Inform the community what's new</p>
                        </div>
                    </button>
                </div>
            </div>
            <button onClick={()=>openDialog("new_features_dialog")}>View new features</button>
            <Comment data={{functions:{toggleDialog}}}/>
        </div>
    );
};

