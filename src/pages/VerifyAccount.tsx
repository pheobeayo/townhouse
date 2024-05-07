import backgroundPattern from "../assets/images/backgrounds/Background_pattern.png"
import { err_toast } from "../components/Feedback";
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function VerifyAccount(){
    let [disable,setDisable]=useState(false); 
    let navigate=useNavigate()
    let user_data:any=sessionStorage.getItem("user_data")
    let userEmail:any=user_data===null?null:JSON.parse(user_data)

    async function handleVerification(e:any){
        try{
            e.preventDefault();
            setDisable(true)
            let verification_code=sessionStorage.getItem("verification_code")
            if(e.target.verification_code.value!==verification_code){
                setDisable(false)
                err_toast("You've enter a wrong verification code, Try again!")
                navigate(-1)
                sessionStorage.clear()
            }else{
                let userData:any=sessionStorage.getItem("user_data")
                localStorage.setItem("user_data",userData)
                setDisable(false)
            }
        }catch(error:any){
            setDisable(false)
            const errorMessage = error.message;
            console.log(errorMessage)
            errorMessage==="Failed to fetch"?err_toast(`No internet`):err_toast(error.message)
        }
    }
    useEffect(()=>{
        if(userEmail===null){
            navigate(-1)
        }
    },[])
    return(
        <main style={{background:`url(${backgroundPattern})`}} className={`flex h-screen justify-center flex-col items-center`}>
            <div className="sm:m-[40px] items-center sm:shadow-lg bg-white flex flex-col sm:w-[520px] max-sm:px-[6vw]">
                {userEmail&&<div className="sm:w-[360px] my-[40px]">
                    <div className="sm:mb-[30px] gap-[8px] flex flex-col items-center max-sm:my-[20px]">
                        <p className="text-[30px] font-semibold">Account Verification</p>
                        <p className="text-[var(--secondary-08)] text-[14px]">Enter verification code sent to {`${userEmail.email.slice(0,2)}....${userEmail.email.slice(userEmail.email.length-12, userEmail.email.length)}`}</p>
                    </div>

                    <form onSubmit={(e)=>handleVerification(e)} className="flex flex-col gap-[12px] text-sm">
                        <div className="flex flex-col mb-3">
                            <div className="pb-4">
                                <input id="verification_code" maxLength={6} minLength={6} name="verification_code" type="text" className={`px-[10px] w-full py-3 focus:outline-[var(--primary-01)] focus:outline-[1px] bg-white border-[1px] rounded-lg`} placeholder="Enter your verification code" required/>
                            </div>

                            <div className="flex gap-2 w-full items-center">
                                <button onClick={()=>navigate(-1)} className={"flex-grow font-semibold cursor-wait mt-5 capitalize py-3 px-6 text-[var(--gray-7-text)] rounded-md bg-[var(--white)] border-[1px]"}>
                                    Back
                                </button>

                                <button disabled={disable} className={disable===true?"flex-grow font-semibold cursor-wait mt-5 capitalize py-3 px-6 text-[var(--white)] rounded-md bg-[var(--primary-02)] border-[1px]":"font-semibold flex-grow mt-5 capitalize py-3 px-6 text-white rounded-md bg-[var(--primary-01)]"}>
                    {disable===false?(
                                    <span>
                                        Send
                                    </span>):(
                                        <i className="italic">Sending...</i>
                                    )}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>}
            </div>
        </main>
    )
}
