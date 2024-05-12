import { MdClose } from "react-icons/md";
import { User } from "../../types/definitions";
import Illustration from "../../assets/images/icons/Illustration.png"
import { CiLock } from "react-icons/ci";
import { IoMdSend } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";

type CongratulationProps={
    data:{
        user:User,
        functions:{
            toggleDialog:any
        },
        message:string
    }
}

export function CongratulationDialog(props:CongratulationProps){
    const location=useLocation()
    const navigate=useNavigate()
    return(
        <div id={`congratulation_dialog`} onDoubleClick={()=>props.data.functions.toggleDialog(`congratulation_dialog`)}className="fixed top-0 bottom-0 left-0 right-0 z-20 bg-[#101828]/40 none">
            <div className="flex flex-col justify-center items-center h-[100vh]">
                <div id="dialog" className="items-center flex flex-col bg-[var(--grey-1-fill)] rounded-md justify-center p-6 focus:ring-1 focus:ring-violet-300">
                    {/*<div className="flex ml-auto mb-[8px] justify-end h-[22px] pb-[4px]">
                        <MdClose onClick={()=>props.data.functions.toggleDialog(`congratulation_dialog`)} className="md-16 cursor-pointer"/>
                    </div>*/}    
                    <div className="flex flex-col justify-center items-center w-[452px] h-[230px] max-sm:w-[80vw]"> 
                        <img src={Illustration} alt="illustration"/> 
                        <div className="flex flex-col items-center justify-center gap-3 mt-2 pb-4">
                            <p className="text-3xl font-semibold">Congratulations</p>
                            <p className="text-sm text-center">{props.data.message}</p>
                        </div>
                        <div className="flex gap-2 w-full">
                           <button onClick={()=>props.data.functions.toggleDialog(`congratulation_dialog`)} className={"flex-grow font-semibold mt-5 capitalize py-3 px-6 text-[var(--gray-7-text)] rounded-md bg-[var(--white)] border-[1px]"}>
                                Dismiss
                            </button>

                            <button onClick={()=>{
                                if(location.pathname==="/create_event"){
                                    navigate("/events")
                                }else{
                                    navigate("/home")
                                }
                            }} className={"flex-grow mt-5 capitalize py-3 px-6 text-white rounded-md bg-[var(--primary-01)]"}>
                                View more
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

type NewFeaturesProps={
    data:{
        //user:User,
        functions:{
            toggleDialog:any
        }
    }
}


export function NewFeatures(props:NewFeaturesProps){
    return(
        <div id={`new_features_dialog`} onDoubleClick={()=>props.data.functions.toggleDialog(`new_features_dialog`)} className="fixed top-0 bottom-0 left-0 right-0 z-20 bg-[#101828]/40 none">
            <div className="flex flex-col justify-center items-center h-[100vh]">
                <div id="dialog" className="items-center flex flex-col bg-[var(--grey-1-fill)] rounded-md justify-center p-6 focus:ring-1 focus:ring-violet-300">
                    <div className="flex ml-auto mb-[8px] justify-end h-[22px] pb-[4px]">
                        <MdClose onClick={()=>props.data.functions.toggleDialog(`new_features_dialog`)} className="w-[20px] h-[20px] cursor-pointer"/>
                    </div>    
                    <div className="flex flex-col justify-center items-center w-[452px] h-[230px] max-sm:w-[80vw]"> 
                        <CiLock className="w-[34px] h-[34px]"/>
                        <div className="flex flex-col items-center justify-center mt-2 gap-3 pb-4">
                            <p className="text-base font-semibold">Feature one</p>
                            <p className="text-sm text-center">We are introducing <strong>Alex</strong>, your Townhouse AI assistance.</p>
                        </div>
                        <div className="flex gap-2 w-full">
                           <button onClick={()=>props.data.functions.toggleDialog(`new_features_dialog`)} className={"flex-grow font-semibold mt-5 capitalize py-3 px-6 text-[var(--gray-7-text)] rounded-md bg-[var(--white)] border-[1px]"}>
                                Next
                            </button>

                            <button onClick={()=>props.data.functions.toggleDialog(`new_features_dialog`)} className={"flex-grow mt-5 capitalize py-3 px-6 text-white rounded-md bg-[var(--primary-01)]"}>
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

type ImageDialogProps={
    data:{
        imageUrl:string,
        id:string,
        functions:{
            toggleDialog:any
        }
    }
}


export function ImageDialog(props:ImageDialogProps){
    return(
        <div id={`image_dialog_${props.data.id}`} onClick={()=>props.data.functions.toggleDialog(`image_dialog_${props.data.id}`)} className="fixed top-0 bottom-0 left-0 right-0 z-20 bg-[#101828]/40 none">
            <div className="flex flex-col justify-center items-center h-[100vh]">
                <img src={props.data.imageUrl} alt="image" className="w-[70vw] h-[80vh] object-cover"/>
            </div>
        </div>
    )
}



type CommentProps={
    data:{
        //user:User,
        functions:{
            toggleDialog:any
        }
    }
}


export function Comment(props:CommentProps){
    return(
        <div id={`comment_dialog`} onDoubleClick={()=>props.data.functions.toggleDialog(`comment_dialog`)} className="fixed top-0 bottom-0 left-0 right-0 z-20 bg-[#101828]/10 none">
            <div className="flex items-center h-screen">

                <div className="fixed md:scale-[0.9] md:ml-auto md:w-[500px] md:h-[600px] bg-[var(--grey-1-fill)] focus:ring-1 focus:ring-violet-300 rounded-md right-10">

                <div id="dialog" className="items-center flex flex-col  justify-center">
                    <div className="rounded-t-md p-6 text-white w-full h-[185px] bg-[var(--primary-01)]">
                        <div className="flex ml-auto mb-[8px] justify-end h-[22px] pb-[4px]">
                            <MdClose onClick={()=>props.data.functions.toggleDialog(`comment_dialog`)} className="w-[24px] h-[24px] cursor-pointer"/>
                        </div>
                        <div className="flex gap-4">
                            <img src="/favicon.png" className="w-[30px] h-[30px] rounded-[50]" alt=""/>
                            <div className="flex flex-col gap-3">
                                <div>
                                    <p className="text-lg font-semibold">Alan Walker</p>
                                    <p className="text-[14px]">Member since May 2024</p>
                                </div>
                                <div>
                                    <p className="text-lg font-semibold">Pet Sitter Needed for the weekend</p>
                                    <p className="text-[14px]">I need a pet sitter for my cat for the weekend from 10th to 13th May. Your recommendation would be helpful. Thanks</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center w-full p-6"> 
                        <div className="flex w-full h-[320px] flex-col gap-3 pb-4">
                            <div className="w-full">
                                <p className="text-gray-500 font-semibold">You</p>
                                <div className="rounded-md bg-[var(--primary-01)] p-2 text-white">
                                    <p className="flex">I'll be expecting, Thank you.</p>
                                </div>
                            </div>
                            <div></div>
                        </div>
                        <div className="flex gap-2 w-full">
                            <form className="flex gap-2 text-[gray-7-text] items-center justify-center border-[1px] px-4 py-2 rounded-[20px] border-[var(--gray-5-stroke)]">
                                <input type="text" placeholder="Comment" className="outline-none sm:w-[400px]"/>
                                <button>
                                    <IoMdSend  className="w-[20px] h-[20px] text-[var(--primary-01)]"/>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            </div>
        </div>
    )
}
