import { openDialog } from "../components/actions"
//import { FaBuilding, FaFacebook, FaPhone } from "react-icons/fa"
//import { FaLocationPin } from "react-icons/fa6";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../context";
import Nav from "../components/Nav"
import { MdEdit } from "react-icons/md";


export default function Profile(){
    const {username,photo,email} =useContext(GlobalContext);


	useEffect(()=>{
		window.scrollTo(0,0)
       
    },[])

    return(
        <div>
            <Nav data={{username,photo}}/>	
            <div className="flex flex-col mt-10">
                <div className="flex gap-3">
                    <div className="flex gap-4">
                        <div>
                            {photo===null?(
                                <div className="bg-gray-300 flex items-center justify-center w-[80px] h-[80px] rounded-[30px]">
                                    <span className="uppercase">{username.slice(0,2)}</span>
                                </div>
                            ):(
                                <img src={photo} alt="user profile" className="w-[80px] h-[80px] rounded-[30px]"/>
                            )}
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-xl">{username}</p>
                            <p className="text-gray-500 text-[13px]">{email}</p>
                            <div className="flex gap-2">
                                <p className="text-gray-500 text-[13px]">Rotterdam</p>
                            </div>
                        </div>
                        <MdEdit onClick={()=>openDialog("")} className="w-[24px] h-[24px]"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
