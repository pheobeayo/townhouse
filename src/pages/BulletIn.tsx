import { useContext, useEffect } from "react";
import { GlobalContext } from "../context";
import Nav from "../components/Nav"
import { Bulletin } from "../types/definitions";
import Sample2 from "../assets/images/sample2.png";
import Sample4 from "../assets/images/Sample4.svg";
import { IoIosHeartEmpty } from "react-icons/io";
import { AiOutlineMessage } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CiShare2 } from "react-icons/ci";

export default function BulletIn(){
    const {user}=useContext(GlobalContext);
    const {username,photo,location}=user;
    const bulletins:Bulletin[]=[
        {
            title:"Laura Newcombe",
            description:`I wish I had come across this video during my early days of being a cat mom!`,
            postedOn:"25 mins ago",
            image:Sample2
        },
        {
            title:"Clarissa Kearney",
            description:`Finally, a colorful wallpaper for all my devices. Thanks Unsplash! 😍`,
            postedOn:"25 mins ago",
            image:Sample4
        },
        {
            title:"Evie Langwallner",
            description:`Finally, a colorful wallpaper for all my devices. Thanks Unsplash! 😍`,
            postedOn:"25 mins ago",
            image:Sample2
        },
        {
            title:"Evie Langwallner",
            description:`Teach me how to forget about you, the way you forgot about me. 💔`,
            postedOn:"25 mins ago",
            image:Sample4
        }
    ]

	useEffect(()=>{
		window.scrollTo(0,0)
	},[])

	
    return(
        <main>
            <Nav data={{username,photo,location}}/>	
                    <div className="flex justify-between w-full">
                        <p className="font-semibold text-xl mb-4 mt-10">Welcome to the <span className="text-[#DC0E62]">Bulletin board! </span>
                        <br/> 
                        Here you can find all listings available in your community.</p>
                        <Link to="/create_post" className="flex text-base gap-[2px] items-center justify-center">
                            <span><button  className="px-2 sm:px-4 py-2 bg-[var(--primary-01)] hover:bg-[var(--primary-02)] text-white rounded-lg w-40 focus:outline-none ">Create Post</button></span>

                        </Link>
                    </div>
                    <div className="grid max-sm:grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2">
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
        </main>
    );
}
