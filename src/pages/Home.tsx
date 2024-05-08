import { openDialog } from "../components/actions"
//import { FaBuilding, FaFacebook, FaPhone } from "react-icons/fa"
//import { FaLocationPin } from "react-icons/fa6";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../context";
import { CiLocationOn, CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom"

export default function Home() { 
    const {username,photo} =useContext(GlobalContext);

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
                    <Link to={`/events?period="new"`} className="shadow-md cursor-pointer w-[67px] h-full flex justify-center items-center rounded-[30px] bg-[var(--primary-01)] text-white">
                        <p>New</p>
                    </Link>
                    <div className="w-[87px] h-full flex justify-center items-center rounded-[30px] hover:shadow-md hover:bg-[var(--primary-02)] hover:text-white">
                        <p>Happening</p>
                    </div>
                    <div className="w-[87px] h-full flex justify-center items-center rounded-[30px]  hover:shadow-md hover:bg-[var(--primary-02)] hover:text-white">
                        <p>Tomorrow</p>
                    </div>
                    <div className="rounded-[30px] w-[67px] h-full flex justify-center items-center rounded-[30px]  hover:shadow-md hover:bg-[var(--primary-02)] hover:text-white">
                        <p>Passed</p>
                    </div>
                    <div className="rounded-[30px] w-[67px] h-full flex justify-center items-center rounded-[30px]  hover:shadow-md hover:bg-[var(--primary-02)] hover:text-white">
                        <p>Saved</p>
                    </div>
                    <div className="rounded-[30px] w-[87px] h-full flex justify-center items-center rounded-[30px]  hover:shadow-md hover:bg-[var(--primary-02)] hover:text-white">
                        <p>Cancelled</p>
                    </div>
                </div>

                <div className="flex justify-center items-center gap-2">
                    <p>Filter by Name</p>

                </div>
            </div>

            <button onClick={()=>openDialog("new_features_dialog")}>View new features</button>
        </div>
    );
};

