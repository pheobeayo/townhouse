import { useNavigate } from "react-router-dom";
import background from "../assets/images/backgrounds/Screen.jpg";
import backgroundPattern from "../assets/images/backgrounds/Background_pattern.svg";
import emailIcon from "../assets/images/icons/email_icon.svg";
import googleIcon from "../assets/images/icons/google_icon.svg";
import orIcon from "../assets/images/icons/or_icon.svg";
import Logo from "../assets/images/logos/Logo2.svg"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react"

export default function CreateAccount() {
    const API_URL='https://townhouse-server.onrender.com'
    const navigate=useNavigate()
    const [screenBackground,setScreenBackground]=useState(``)
    const [showLogo,setShowLogo]=useState(true)
    window.onresize=()=>{
        const screen_width=window.innerWidth;
        if(screen_width>768){
            setScreenBackground(`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${background}),no-repeat`)
            setShowLogo(true)
        }else{
            setScreenBackground(`url(${backgroundPattern})`)
            setShowLogo(false)
        }
    }
    useEffect(()=>{
        const screen_width=window.innerWidth;
        if(screen_width>768){
            setScreenBackground(`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${background}),no-repeat`)
            setShowLogo(true)
        }else{
            setScreenBackground(`url(${backgroundPattern})`)
            setShowLogo(false)
        }
    },[screenBackground])
    return (
        <main style={{background:`${screenBackground}`,backgroundPosition:'center',backgroundSize:'cover'}} className={`flex h-screen justify-center max-md:flex-col max-md:items-center `}>
            {showLogo?(
                <Link to="/" className="mr-auto h-full flex-grow flex items-center justify-center">
                    <img src={Logo} className="w-[363px] h-[87px]" alt="logo"/>
                </Link>
            ):""}
            <div className="md:ml-auto sm:m-[40px] items-center sm:rounded-sm sm:shadow-lg bg-white flex flex-col sm:w-[520px] max-sm:px-[3vw]">
                <div className="sm:w-[360px] my-[40px]">
                <div className="sm:mb-[40px] gap-[8px] flex flex-col items-center max-sm:my-[20px]">
                    <p className="text-[30px] font-semibold">Welcome Back</p>
                    <p className="text-[var(--secondary-08)] text-[14px]">Get you connected with your community</p>
                </div>
                <div  className="flex flex-col gap-[12px] text-sm">
                    <button onClick={()=>window.location.href=`${API_URL}/auth/googleOAuth/google`} className={`flex justify-center items-center py-3 px-6 bg-white border-[1px] rounded-lg`}>
                        <img src={googleIcon} alt="google's icon" className="sm:w-[24px] mr-auto sm:h-[24px]"/>
                        <span className="text-base flex-grow">Sign in with Google </span>
                    </button>

                   

                    <img src={orIcon} className="h-[20px]" alt="Or"/>

                    <button onClick={()=>navigate('/sign_in_with_email')} className={`flex justify-center items-center py-3 px-6 rounded-md bg-white border-[1px]`}>
                        <img src={emailIcon} alt="google's icon" className="sm:w-[24px] mr-auto sm:h-[24px]"/>
                        <span className="text-base flex-grow">Sign in with Email Address</span>
                    </button>


                    <div className="flex items-center justify-center mt-5">
                        <p className="mr-3">{"Don't have an account?"}</p>
                        <Link to="/getstarted" className="underline text-[var(--primary-01)]">Create an Account</Link>
                    </div>
                    <div className="sm:mt-[110px] max-sm:mt-[50px] text-sm flex items-center justify-center gap-x-1 text-[var(--secondary-08)]">
                        <p className="text-center">By tapping "Continue", you understand and agree to <Link to="/" className="underline text-[var(--primary-01)]">TownHouse's Terms and Policies</Link></p>
                    </div>
                </div>
                </div>
            </div>
        </main>
    );
}


