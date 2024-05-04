import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ToastContainer } from 'react-toastify';
import { Toaster } from "react-hot-toast";
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';
import About from './pages/About';
import GetStarted from "./pages/GetStarted";
import SignIn from "./pages/SignIn";
import SignInWithEmail from "./pages/SignInWithEmail";
import SignUpWithEmail from "./pages/SignUpWithEmail";
import { User } from "./types/definitions";
import { GlobalContext } from "./context";

function App() {
  const [user,setUser]=useState<User>({
    uid:"",
    photoURL:"",
    email:"",
    displayName:"",
    phoneNumber:0,
    emailVerified:false
  })
  const [isLoading,setIsLoading]=useState(true)
  const [isAuth,setIsAuth]=useState(false);

    async function getUserCreds(){
        try{
            let url=``
            let response=await fetch(url,{
                method:"GET"
            })
            let parseRes:any=await response.json()
            console.log(parseRes.data)
            if(parseRes.error){
                // User is signed out
                console.log(parseRes.error,"user is signed out")
	            setIsAuth(false)
                setIsLoading(false)
            }else{
                let user=parRes.data.user;
                let userData:User={
                    uid:user.uid,
                    photoURL:user.photoURL,
                    email:user.email,
                    displayName:user.displayName,
                    phoneNumber:user.phoneNumber,
                    emailVerified:user.emailVerified
                }
                setUser(userData)
                setIsAuth(true)
                setIsLoading(false)
            }
        }catch(error:any){
            // User is signed out
            console.log(error.message,"user is signed out")
	        setIsAuth(false)
            setIsLoading(false)
        }
    }

  useEffect(()=>{
      getUserCreds()
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

              <Route path="/sign_up_with_email" element={!isAuth?<SignUpWithEmail />:<Navigate to="/"/>} />
              <Route path="/" element={isAuth?<Layout />:<Navigate to="/getstarted"/>}>
                <Route index element={<About />} />
                {/*<Route path="chat_room" element={<ChatRoom />} />*/}
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
