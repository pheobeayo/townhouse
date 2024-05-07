import { useState } from "react"
import backgroundPattern from "../assets/images/backgrounds/Background_pattern.png"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { err_toast, success_toast } from "../components/Feedback";
import { Link } from "react-router-dom";
import { User } from "../types/definitions"
import { useNavigate } from "react-router-dom"

export default function SignInWithEmail() {
    let date=new Date()    
    let API_URL=`https://townhouse-server.onrender.com`
    let [eye_icon,setEye_icon]=useState(<FaEye className="h-5 w-5"/>);
    let [disable,setDisable]=useState(false); 
    let navigate=useNavigate()

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
                password:e.target.password.value,
                last_time_loggedin:`${date}`, user_browser:`${navigator.userAgent}`
            }
            let url=`${API_URL}/api/sign_in`
            let response=await fetch(url,{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(userInput)
            });
            const parseRes=await response.json();
            console.log(parseRes)
            if(parseRes.error){
                setDisable(false)
                err_toast(parseRes.error)
            }else{
                let verification_code=parseRes.verification_code
                let user:any=parseRes.data;
                let userData:User={
                    photo:user.photo,
                    email:user.email,
                    username:user.username,
                    accessToken:user.access_token,
                    phoneNumber:user.phone_number,
                    emailVerified:user.email_verified
                }
                sessionStorage.setItem("verification_code",verification_code)
                sessionStorage.setItem("user_data",JSON.stringify(userData))
                setDisable(false)
                navigate("/verify_account")
            }
        } catch (error:any) {
            setDisable(false)
            const errorMessage = error.message;
            console.log(errorMessage)
            errorMessage==="Failed to fetch"?err_toast(`No internet`):err_toast(error.message)
        }
    }
    return (
        <main style={{background:`url(${backgroundPattern})`}} className={`flex h-screen justify-center flex-col items-center`}>
            <div className="sm:m-[40px] items-center sm:shadow-lg bg-white flex flex-col sm:w-[520px] max-sm:px-[6vw]">
            <div className="sm:w-[360px] my-[40px]">
                 <div className="sm:mb-[40px] gap-[8px] flex flex-col items-center max-sm:my-[20px]">
                    <p className="text-[30px] font-semibold">Sign in</p>
                    <p className="text-[var(--secondary-08)] text-[14px]">Get you connected with your community</p>
                </div>
                <form onSubmit={(e)=>handleLogin(e)} className="flex flex-col gap-[12px] text-sm">
                <div className="flex flex-col mb-3">
                    <label className="mb-[8px] font-semibold text-[var(--primary-01)]" htmlFor="email">Email</label>
                    <div className="pb-4">
                        <input id="email" name="email" type="email" className={`px-[10px] w-full py-2 focus:outline-[var(--primary-01)] focus:outline-[1px] bg-white border-[1px] rounded-lg`} placeholder="johndoe@gmail.com" required/>
                    </div>

                    <label htmlFor="password" className="font-semibold mb-[8px] text-[var(--primary-01)]">Password</label>
                    <div className="flex flex-col">
                        <div className="flex">
                            <input id="password" name="password" placeholder="Enter password" type="password" className={`flex-grow px-[10px] py-2 focus:outline-[var(--primary-01)] focus:outline-[1px] bg-white border-[1px] rounded-l-lg`} minLength={8} maxLength={24} required/>
                            <button type="button" onClick={toggle_password} className="rounded-r-lg px-3 py-2 border-[1px] w-[53px] bg-white text-[var(--gray-7-text)]">
                            {eye_icon}
                            </button>
                        </div>
                    </div>
                </div>

                <a href="#" target="_blank" rel="noopener noreferrer" className="text-[var(--primary-01)] underline text-sm ml-auto">Forget Password?</a>
                <button disabled={disable} className={disable===true?"cursor-wait mt-5 capitalize py-3 px-6 text-[var(--white)] rounded-md bg-[var(--primary-02)] border-[1px]":"mt-5 capitalize py-3 px-6 text-white rounded-md bg-[var(--primary-01)]"}>
                    {disable===false?(<span>
                        Sign in
                    </span>):(
                        <i className="italic">Signing in...</i>
                    )}
                </button>
                <div className="flex items-center justify-center mt-5">
                    <p className="mr-3">{"Don't have an account"}</p>
                    <Link to="/sign_up_with_email" className="underline text-[var(--primary-01)]">Create an account</Link>
                </div>

                <div className="mt-[30px] text-sm flex items-center justify-center gap-x-1 text-[var(--secondary-08)]">
                        <p className="text-center">By tapping "Continue", you understand and agree to <Link to="/" className="underline text-[var(--primary-01)]">TownHouse's Terms and Policies</Link></p>
                </div>
                </form>
            </div>
            </div>
        </main>
    );
};
