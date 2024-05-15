import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";
import GetStarted from "./pages/GetStarted";
import Home from "./pages/Home";
import CreateGroup from "./pages/CreateGroup";
import CreatePost from "./pages/CreatePost";
import CreateEvent from "./pages/CreateEvent";
import Events from "./pages/Events";
import Event from "./pages/Event";
import CommunityDirectory from "./pages/CommunityDirectory";
import Profile from "./pages/Profile";
import Neighbours from "./pages/Neighbours";
import BulletIn from "./pages/BulletIn";
import Settings from "./pages/Settings";
import Help from "./pages/Help";
import SignIn from "./pages/SignIn";
import SignInWithEmail from "./pages/SignInWithEmail";
import SignUpWithEmail from "./pages/SignUpWithEmail";
import VerifyAccount from "./pages/VerifyAccount";
import { User, EventType } from "./types/definitions";
import { GlobalContext } from "./context";
import LandingPage from "./pages/LandingPage";
import { err_toast } from "./components/Feedback";
import About from "./pages/About";

function App() {
  const API_URL = "https://townhouse-server.onrender.com";
  const searchParams = new URLSearchParams(window.location.search);

  const accessTokenQuery: any = searchParams.get("access_token");

  const [user, setUser] = useState<User>({
    photo: "",
    email: "",
    username: "",
    phoneNumber: 0,
    emailVerified: false,
    location: "",
  });
  let [events, setEvents] = useState<EventType[]>([
    {
      title: "",
      description: "",
      sub_title: "",
      host: "",
      date: "",
      starting_time: "",
      event_location: "",
      attendees: [],
      likes: [],
      event_photo: "",
      creator_email: "",
      event_tags: [],
      comments: [],
      privacy: false,
      id: "",
    },
  ]);

  const [isLoading, setIsLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  const $userData: any = localStorage.getItem("user_data");
  const parsedUserData: User = JSON.parse($userData);
  async function authenticate() {
    try {
      const url =
        searchParams.has("access_token") === false && $userData !== null
          ? `${API_URL}/api/users/${parsedUserData.email}`
          : `${API_URL}/api/authenticate/${JSON.parse(accessTokenQuery)}`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          authorization:
            searchParams.has("access_token") === false && $userData !== null
              ? `Bearer ${parsedUserData.accessToken}`
              : "",
        },
      });
      const parseRes = await response.json();
      if (parseRes.error) {
        setIsAuth(false);
        setIsLoading(false);
      } else {
        const user: any = parseRes.data;
        const userData: User = {
          photo: user.photo,
          email: user.email,
          username: user.username,
          accessToken: user.access_token,
          phoneNumber: user.phone_number,
          emailVerified: user.email_verified,
          location: user.location,
        };
        localStorage.setItem("user_data", JSON.stringify(userData));
        setUser(userData);
        setIsAuth(true);
        setIsLoading(false);
      }
    } catch (error: any) {
      setIsAuth(false);
      setIsLoading(false);
    }
  }

  async function getEvents() {
    try {
      const url = `${API_URL}/api/events`;
      const response = await fetch(url);
      const parseRes = await response.json();
      if (parseRes.error) {
        console.log(parseRes.error);
      } else {
        const events: EventType[] = parseRes.data;
        setEvents(events);
      }
    } catch (error: any) {
      const errorMessage: string =
        error.message === "Fail to fetch" ? "No internet" : `${error.message}`;
      err_toast(errorMessage);
    }
  }

  const loader = {
    on: () => {
      setIsLoading(true);
    },
    off: () => {
      setIsLoading(false);
    },
  };

  const actions = {
    getEvents: getEvents(),
  };

  useEffect(() => {
    if (searchParams.has("access_token") === true || $userData !== null) {
      authenticate();
    } else {
      setIsAuth(false);
      setIsLoading(false);
    }
    //setIsAuth(true)
  }, [isAuth]);

  return (
    <BrowserRouter>
      <GlobalContext.Provider value={{ user, loader, events, actions }}>
        {isLoading ? (
          <div className="fixed top-0 bottom-0 left-0 z-20 right-0 bg-white">
            <div className="flex flex-col items-center h-[100vh] justify-center">
              <p className="text-xl font-semibold text-[var(--primary-01)]">
                Loading...
              </p>
            </div>
          </div>
        ) : (
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
            <Toaster />
            <Routes>
              <Route
                path="/landing_page"
                element={!isAuth ? <LandingPage /> : <Navigate to="/" />}
              />
              <Route
                path="/about"
                element={!isAuth ? <About /> : <Navigate to="/" />}
              />
              <Route
                path="/getstarted"
                element={!isAuth ? <GetStarted /> : <Navigate to="/" />}
              />
              <Route
                path="/sign_in"
                element={!isAuth ? <SignIn /> : <Navigate to="/" />}
              />
              <Route
                path="/sign_in_with_email"
                element={!isAuth ? <SignInWithEmail /> : <Navigate to="/" />}
              />
              <Route
                path="/verify_account"
                element={!isAuth ? <VerifyAccount /> : <Navigate to="/" />}
              />
              <Route
                path="/sign_up_with_email"
                element={!isAuth ? <SignUpWithEmail /> : <Navigate to="/" />}
              />
              <Route
                path="/"
                element={isAuth ? <Layout /> : <Navigate to="/landing_page" />}
              >
                <Route index element={<Home />} />
                <Route path="events" element={<Events />} />
                <Route path="events/:id" element={<Event />} />
                <Route path="bulletin_board" element={<BulletIn />} />
                <Route path="create_post" element={<CreatePost />} />
                <Route
                  path="community_directory"
                  element={<CommunityDirectory />}
                />
                <Route path="profile" element={<Profile />} />
                <Route path="neighbours" element={<Neighbours />} />
                <Route path="create_group" element={<CreateGroup />} />
                <Route path="create_post" element={<CreatePost />} />
                <Route path="create_event" element={<CreateEvent />} />
                <Route path="help" element={<Help />} />
                <Route path="settings" element={<Settings />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </>
        )}
      </GlobalContext.Provider>
    </BrowserRouter>
  );
}

export default App;
