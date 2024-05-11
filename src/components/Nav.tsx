import { Link, useLocation } from "react-router-dom"
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiLocationOn, CiSearch } from "react-icons/ci";

type NavProp={
    data:{
        username:string
        photo:string,
        location:string
    }
}

export default function Nav(props:NavProp){
    let location=useLocation()
    return(
        <div className="flex w-full items-center justify-between">
            {location.pathname==="/profile"?(
                <p className="text-3xl font-semibold capitalize">My Profile</p>
            ):(
                 <p className="text-2xl capitalize">Hi, {props.data.username}</p>
            )}
                <button>
                    <IoIosNotificationsOutline className="w-[24px] h-[24px]"/>
                </button>
                <form className="flex gap-2 text-[gray-7-text] items-center justify-center border-[1px] px-4 py-2 rounded-[20px] border-[var(--gray-5-stroke)]">
                    <CiSearch className="w-[20px] h-[20px]"/>
                    <input type="text" placeholder="Search" className="outline-none sm:w-[400px]"/>
                </form>
                <div className="flex justify-center items-center gap-2">
                    <CiLocationOn className="w-[16px] h-[16px]"/>
                    {props.data.location.includes('null')?(
                        <button>Enable Location</button>
                    ):(
                        <p>{props.data.location}</p>
                    )}
                </div>
                <Link to="/profile">
                    {props.data.photo===null?(
                        <div className="bg-gray-300 flex items-center justify-center w-[42px] h-[42px] rounded-[30px]">
                            <span className="uppercase">{props.data.username.slice(0,2)}</span>
                        </div>
                    ):(
                        <img src={props.data.photo} alt="user profile" className="w-[42px] h-[42px] rounded-[30px]"/>
                    )}
                </Link> 
		</div>
    )
}
