import { openDialog } from "../components/actions"
//import { FaBuilding, FaFacebook, FaPhone } from "react-icons/fa"
//import { FaLocationPin } from "react-icons/fa6";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../context";
import Nav from "../components/Nav"
import { MdOutlineEdit } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

export default function Profile(){
    const {user}=useContext(GlobalContext);
    const {username,photo,location,email}=user;


	useEffect(()=>{
		window.scrollTo(0,0)
       
    },[])

    return(
        <div>
            <Nav data={{username,photo,location}}/>	
            <div className="flex flex-col mt-10">
                <div className="flex gap-3">
                    <div className="flex gap-4">
                        <div>
                            {photo===null?(
                                <div className="bg-gray-300 flex items-center justify-center w-[80px] h-[80px] rounded-[30px]">
                                    <span className="uppercase">{username.slice(0,2)}</span>
                                </div>
                            ):(
                                <img src={photo} alt="user profile" className="w-[80px] h-[80px] rounded-[60px]"/>
                            )}
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-xl">{username}</p>
                            <p className="text-gray-500 text-[13px]">{email}</p>
                            {location.includes('null')?"":(
                                <div className="flex gap-1 items-center ">
                                    <CiLocationOn className="w-[16px] text-black h-[16px]"/>
                                    <p className="text-black text-[13px]">{location}</p>
                                </div>
                            )}
                        </div>
                        <MdOutlineEdit onClick={()=>openDialog("")} className="hover:text-[var(--primary-01)] cursor-pointer w-[24px] ml-10 h-[24px]"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
