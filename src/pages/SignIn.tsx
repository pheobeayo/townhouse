import { useState } from "react"
import { useNavigate } from "react-router-dom";
import backgroundPattern from "../assets/images/backgrounds/Background_pattern.png";
import facebookIcon from "../assets/images/icons/facebook_icon.svg";
import emailIcon from "../assets/images/icons/email_icon.svg";
import googleIcon from "../assets/images/icons/google_icon.svg";
import orIcon from "../assets/images/icons/or_icon.svg";
import { FaEye, FaEyeSlash, FaInfoCircle } from "react-icons/fa";
import { err_toast, success_toast } from "../components/Feedback";
import { Link } from "react-router-dom";

export default function CreateAccount() {
    let navigate=useNavigate()
    let [eye_icon,setEye_icon]=useState(<FaEye className="h-5 w-5"/>);
    let [disable,setDisable]=useState(false); 

    function toggle_password(){
        let password=document.getElementById("password");
        if(password?.getAttribute("type")=="password"){
          password?.setAttribute("type","text");
          setEye_icon(<FaEyeSlash className="h-5 w-5"/>);
          return;
        }
        password?.setAttribute("type","password");
        setEye_icon(<FaEye className="h-5 w-5"/>);
    }

    

    async function handleLogin(e:any){
        try {
            e.preventDefault();
            setDisable(true)
            let userInput={
                email:e.target.email.value,
                password:e.target.password.value
            }
            let url=``
            let response=await fetch(url,{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(userInput)
            });
            const parseRes=await response.json();
            console.log(parseRes)
            success_toast(`Sign in successfull`)
            setDisable(false)
        } catch (error:any) {
            setDisable(false)
            const errorMessage = error.message;
            console.log(errorMessage)
            errorMessage==="failed to fetch"?err_toast(`No internet`):err_toast(error.message)
        }
    }
    return (
        <main style={{background:`url(${backgroundPattern})`}} className={`flex h-screen justify-center flex-col items-center`}>
            <div className="sm:m-[40px] items-center sm:shadow-lg bg-white flex flex-col sm:w-[520px] max-sm:px-[3vw]">
                <div className="sm:w-[360px] my-[40px]">
                <div className="sm:mb-[40px] gap-[8px] flex flex-col items-center max-sm:my-[20px]">
                    <p className="text-[30px] font-semibold">Sign in</p>
                    <p className="text-[var(--secondary-08)] text-[14px]">Get you connected with your community</p>
                </div>
                <form  className="flex flex-col gap-[12px] text-sm">
                    <div className="flex flex-col gap-4">
                        <button className={`flex justify-center items-center py-3 px-6 rounded-md bg-white border-[1px] rounded-lg`}>
                            <img src={googleIcon} alt="google's icon" className="sm:w-[24px] mr-auto sm:h-[24px]"/>
                            <span className="text-base flex-grow">Sign in with Google </span>
                        </button>

                    </div>

                    <div className="flex flex-col gap-4">
                        <button className={`flex justify-center items-center py-3 px-6 rounded-md bg-white border-[1px] rounded-lg`}>
                            <img src={facebookIcon} alt="google's icon" className="sm:w-[24px] mr-auto sm:h-[24px]"/>
                            <span className="text-base flex-grow">Sign in with Facebook </span>
                        </button>

                    </div>

                    <img src={orIcon} className="h-[20px]" alt="Or"/>

                    <div className="flex flex-col gap-4">
                        <button onClick={()=>navigate('/sign_in_with_email')} className={`flex justify-center items-center py-3 px-6 rounded-md bg-white border-[1px] rounded-lg`}>
                            <img src={emailIcon} alt="google's icon" className="sm:w-[24px] mr-auto sm:h-[24px]"/>
                            <span className="text-base flex-grow">Sign in with Email Address</span>
                        </button>

                    </div>

                    <div className="flex items-center justify-center mt-5">
                        <p className="mr-3">{"Don't have an account?"}</p>
                        <Link to="/getstarted" className="underline text-[var(--primary-01)]">Create an Account</Link>
                    </div>
                    <div className="sm:mt-[110px] max-sm:mt-[50px] text-sm flex items-center justify-center gap-x-1 text-[var(--secondary-08)]">
                        <p className="text-center">By tapping "Continue", you understand and agree to <Link to="/" className="underline text-[var(--primary-01)]">TownHouse's Terms and Policies</Link></p>
                    </div>
                </form>
                </div>
            </div>
        </main>
    );
};


