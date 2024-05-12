import { openDialog } from "../components/actions"
//import { FaBuilding, FaFacebook, FaPhone } from "react-icons/fa"
//import { FaLocationPin } from "react-icons/fa6";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegSmile, FaRegThumbsUp } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { MdOutlineGroupAdd, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom"
import Select from 'react-select';
import { Comment, ImageDialog } from "../components/dialog"
import { EventType } from "../types/definitions"
import Nav from "../components/Nav"
import { CiPickerEmpty } from "react-icons/ci";
import { err_toast, success_toast } from "../components/Feedback";

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
    const API_URL=`https://townhouse-server.onrender.com`
    const searchParams = new URLSearchParams(window.location.search);
    const {user,loader,events}=useContext(GlobalContext);
    const {username,photo,location,email} =user;
    const [eventPeriod,setEventPeriod]=useState("")
    const [locationOption, setLocationOption]=useState<any>(null);
    const [filteredEvents,setFilteredEvents]=useState<EventType[]>([
        {
            title:"",
            description:"",
            sub_title:"",
            host:"",
            date:"",
            starting_time:"",
            event_location:"",
            attendees:[],
            likes:[],
            event_photo:"",
            creator_email:"",
            event_tags:[],
            comments:[],
            privacy:false,
            id:''
        }
    ])
    const [domEvents,setDomEvents]=useState<EventType[]>([
        {
            title:"",
            description:"",
            sub_title:"",
            host:"",
            date:"",
            starting_time:"",
            event_location:"",
            attendees:[],
            likes:[],
            event_photo:"",
            creator_email:"",
            event_tags:[],
            comments:[],
            privacy:false,
            id:''

        }
    ])



    function getEvents(){
        setFilteredEvents(events)
        setDomEvents(events)
        console.log(events)
    }

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
        const dialog_bg=document.getElementById(id);
        dialog_bg?.classList.add("ease-in-out");
        dialog_bg?.classList.toggle("none");
        dialog_bg?.classList.add("duration-1000");
        dialog_bg?.classList.add("delay-2000");
    }

    function filterEvents(period?:any){
        events.filter((event,index,array)=>{
            // if(event.date)
            console.log(event.date, index,period)
            return setDomEvents(array);
        })
    }

    async function handleDeleteEvent(event_id:string){
        try{
            loader.on()
            const url=`${API_URL}/api/events/${email}/${event_id}`
            const response=await fetch(url,{
                method:"DELETE"
            })
            const parseRes=await response.json()
            if(parseRes.error){
                loader.off()
                err_toast(parseRes.error)
            }else{
                loader.off()
                console.log(parseRes.msg)
                success_toast(parseRes.msg)
            }
        }catch(error:any){
            loader.off()
            const errorMessage = error.message;
            console.log(errorMessage)
            errorMessage==="Failed to fetch"?err_toast(`No internet`):err_toast(error.message)
        }
    }

	useEffect(()=>{
		window.scrollTo(0,0)
        if(searchParams.has("period")){
            setDomEvents(filteredEvents)
            filterEvents(searchParams.get("period"))
        }else{
            getEvents()
        }
        //console.log(searchParams.get("period"))
    },[eventPeriod])
    return (
        <div>
            <Nav data={{username,photo,location}}/>	
            {domEvents.length>0?(
            <>
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
                <p className="font-semibold text-lg">{searchParams.get("period")!==null?searchParams.get("period"):"All"} Events</p>
                <div className="mt-8 grid max-sm:grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {domEvents.map((event)=>{
                        return(
                            <div className="flex flex-col gap-3 p-3" key={event.id}>
                                <p className="text-[var(--primary-01)] font-semibold text-lg">{event.title}</p>
                                <p>{event.sub_title}</p>
                                <button onClick={()=>openDialog(`image_dialog_${event.id}`)} className="bg-gray-100 w-full rounded-md">
                                    <img src={`${API_URL}/drive/download/${event.event_photo}`} alt={event.title} className="rounded-md w-[533px] h-[130px] object-cover"/>
                                </button>
                                <div>
                                    <p>{event.description}</p>
                                </div>
                                <div className="flex gap-2">
                                    <div className="flex border-[1px]  border-[var(--gray-5-stroke)] items-center justify-center rounded-md h-[24px] px-4">
                                        <p>{event.date}</p>
                                    </div>
                                    <div className="flex border-[1px] border-[var(--gray-5-stroke)] items-center justify-center rounded-md h-[24px] px-4">
                                        <p>{event.event_location}</p>
                                    </div>
                                    <div className="flex border-[1px] border-[var(--gray-5-stroke)]  items-center justify-center rounded-md h-[24px] px-4">
                                        <p>{event.starting_time}</p>
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
                                    {event.creator_email===email?(
                                        <>
                                        <button className="hover:text-[var(--primary-01)] active:text-[var(--primary-01)]">
                                            <MdEdit className="w-[20px] h-[20px]"/>
                                        </button>

                                        <button onClick={()=>handleDeleteEvent(`${event.id}`)} className="text-red-500 active:text-red-500">
                                            <FaRegTrashCan className="w-[20px] h-[20px]"/>
                                        </button>
                                        </>
                                    ):""}
                                </div>
                                <ImageDialog data={{functions:{toggleDialog},imageUrl:`${API_URL}/drive/download/${event.event_photo}`,id:`${event.id}`}}/>
                            </div>
                        )
                    })} 
                </div>
            </div>
            </>):(
                <div className="flex-grow h-[70vh] gap-1 flex flex-col items-center justify-center">
                    <CiPickerEmpty className="w-[70px] h-[70px] text-gray-500"/>
                    <p className="text-lg">Oops, currently there are no events</p>
                    <Link to="/create_event" className='text-[var(--primary-01)] text-base'>Create an event</Link>
                </div>
            )}
            
            <div className="fixed bottom-0 px-10 sm:left-[150px] z-10 bg-white right-0 h-[70px]">
                <div className="flex items-center justify-between h-full">
                    <Link to="/create_event" className="flex gap-4 items-center justify-center">
                        <MdOutlineGroupAdd  className="w-[24px] text-[var(--primary-01)] h-[24px]"/>
                        <div className="flex flex-col items-start">
                            <p className="text-[var(--primary-01)] font-semibold text-base">Create group event</p>
                            <p className="text-gray-500 text-[13px]">Add a new event to the group</p>
                        </div>
                    </Link>

                    <Link to="/create_post" className="flex gap-4 items-center justify-center">
                        <MdEdit className="w-[24px] text-[var(--primary-01)] h-[24px]"/>
                        <div className="flex flex-col items-start">
                            <p className="text-[var(--primary-01)] font-semibold text-base">Create a new post</p>
                            <p className="text-gray-500 text-[13px]">Inform the community what's new</p>
                        </div>
                    </Link>
                </div>
            </div>
            <Comment data={{functions:{toggleDialog}}}/>
        </div>
    );
}

