import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ToastContainer } from 'react-toastify';
import { Toaster } from "react-hot-toast";
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';
import GetStarted from "./pages/GetStarted";
import Home from './pages/Home';
import Events from './pages/Events';
import Neighbours from './pages/Neighbours';
import BulletIn from './pages/BulletIn';
import Settings from './pages/Settings';
import SignIn from "./pages/SignIn";
import SignInWithEmail from "./pages/SignInWithEmail";
import SignUpWithEmail from "./pages/SignUpWithEmail";
import VerifyAccount from "./pages/VerifyAccount";
import { User } from "./types/definitions";
import { GlobalContext } from "./context";

function App() {
    let API_URL='https://townhouse-server.onrender.com'
    const searchParams = new URLSearchParams(window.location.search);

    let accessTokenQuery:any=searchParams.get('access_token');

  const [user,setUser]=useState<User>({
    photo:"",
    email:"",
    username:"",
    phoneNumber:0,
    emailVerified:false
  })
  const [isLoading,setIsLoading]=useState(true)
  const [isAuth,setIsAuth]=useState(false);

  let $userData:any=localStorage.getItem('user_data')
  let parsedUserData:User=JSON.parse($userData)
  async function authenticate(){
    try{
        let url=searchParams.has('access_token')===false&&$userData!==null?`${API_URL}/api/users/${parsedUserData.email}`:`${API_URL}/api/authenticate/${JSON.parse(accessTokenQuery)}`
        let response=await fetch(url,{
            method:"GET",
            headers:{
                authorization:searchParams.has('access_token')===false&&$userData!==null?`Bearer ${parsedUserData.accessToken}`:""
            }
        })
        let parseRes=await response.json()
        if(parseRes.error){
            setIsAuth(false)
            setIsLoading(false)
        }else{
            let user:any=parseRes.data;
            let userData:User={
                photo:user.photo,
                email:user.email,
                username:user.username,
                accessToken:user.access_token,
                phoneNumber:user.phone_number,
                emailVerified:user.email_verified
            }
            localStorage.setItem('user_data',JSON.stringify(userData))
            setUser(userData)
            setIsAuth(true)
            setIsLoading(false)
        }
    }catch(error:any){
        let errorMessage:string=error.message==="Fail to fetch"?"No internet":`${error.message}`
        console.log(errorMessage)
	    setIsAuth(false)
        setIsLoading(false)
    }
  }

  useEffect(()=>{
      if(searchParams.has('access_token')===true||$userData!==null){
            authenticate()
      }else{
        setIsAuth(true)
        setIsLoading(false)
      }
  },[isAuth]);

  return (
    <BrowserRouter>
      <GlobalContext.Provider value={user}>
        {isLoading?(
          <div className="fixed top-0 bottom-0 left-0 z-20 right-0 bg-white">
            <div className="flex flex-col items-center h-[100vh] justify-center">
              <p className="text-xl font-semibold text-[var(--primary-01)]">Loading...</p>
            </div>
          </div>
        ):(
          <>
            <ToastContainer 
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            <Toaster/>
            <Routes>
              <Route path="/getstarted" element={!isAuth?<GetStarted/>:<Navigate to="/"/>}/>
              <Route path="/sign_in" element={!isAuth?<SignIn />:<Navigate to="/"/>} />
              <Route path="/sign_in_with_email" element={!isAuth?<SignInWithEmail />:<Navigate to="/"/>} />
              <Route path="/verify_account" element={!isAuth?<VerifyAccount/>:<Navigate to="/"/>}/>
              <Route path="/sign_up_with_email" element={!isAuth?<SignUpWithEmail />:<Navigate to="/"/>} />
              <Route path="/" element={isAuth?<Layout />:<Navigate to="/getstarted"/>}>
                <Route index element={<Home />} />
                <Route path="events" element={<Events />} />
                <Route path="bulletin_board" element={<BulletIn />} />
                <Route path="neighbours" element={<Neighbours />} />
                <Route path="settings" element={<Settings />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </>
        )}
      </GlobalContext.Provider>
    </BrowserRouter>
  )
}

export default App
