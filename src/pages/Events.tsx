import { openDialog } from "../components/actions"
//import { FaBuilding, FaFacebook, FaPhone } from "react-icons/fa"
//import { FaLocationPin } from "react-icons/fa6";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context";
import { CiLocationOn, CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom"
import Select from 'react-select';

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
    const [locationOption, setLocationOption]=useState<any>(null);
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
	useEffect(()=>{
		window.scrollTo(0,0)
	},[])
    return (
        <div>
			<div className="flex w-full items-center justify-between">
                <p className="text-2xl capitalize">Hi, {username}</p>
                <button>
                    <IoIosNotificationsOutline className="w-[24px] h-[24px]"/>
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
                            <Link to={`/events?period=${event.period}`} className={searchParams.has(`${event.period}`)?"shadow-md w-fit px-2 h-full flex justify-center items-center rounded-[30px] bg-[var(--primary-01)] text-white":"w-fit px-2 h-full flex justify-center items-center rounded-[30px] hover:shadow-md hover:bg-[var(--primary-02)] hover:text-white"}>
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

            <div className="mt-3">
                <p className="font-semibold">New Events</p>
                <div className="mt-2"></div>
            </div>
            <button onClick={()=>openDialog("new_features_dialog")}>View new features</button>
        </div>
    );
};

