import { MdClose } from "react-icons/md";
import { User } from "../../types/definitions";
import Illustration from "../../assets/images/icons/Illustration.png"
import { CiLock } from "react-icons/ci";

type CongratulationProps={
    data:{
        userInfo:User,
        functions:{
            toggleDialog:any
        }
    }
}

export function CongratulationDialog(props:CongratulationProps){
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
                            <p className="text-sm text-center">Your account experience has been personalized successfully</p>
                        </div>
                        <div className="flex gap-2 w-full">
                           <button onClick={()=>props.data.functions.toggleDialog(`congratulation_dialog`)} className={"flex-grow font-semibold mt-5 capitalize py-3 px-6 text-[var(--gray-7-text)] rounded-md bg-[var(--white)] border-[1px]"}>
                                Dismiss
                            </button>

                            <button onClick={()=>props.data.functions.toggleDialog(`congratulation_dialog`)} className={"flex-grow mt-5 capitalize py-3 px-6 text-white rounded-md bg-[var(--primary-01)]"}>
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
        //userInfo:User,
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
