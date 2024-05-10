import { useState } from "react";
import signupimage from "../assets/images/backgrounds/signupimage.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { err_toast, success_toast } from "../components/Feedback";
import { Link, useNavigate } from "react-router-dom";
import { User } from "../types/definitions";

export default function SignInWithEmail() {
  let date = new Date();
  let API_URL = `https://townhouse-server.onrender.com`;
  let [eye_icon, setEye_icon] = useState(<FaEye className="h-5 w-5" />);
  let [disable, setDisable] = useState(false);
  let navigate = useNavigate();

  function toggle_password() {
    let password = document.getElementById("password");
    if (password?.getAttribute("type") == "password") {
      password?.setAttribute("type", "text");
      setEye_icon(<FaEyeSlash className="h-5 w-5" />);
      return;
    }
    password?.setAttribute("type", "password");
    setEye_icon(<FaEye className="h-5 w-5" />);
  }

  async function handleCreate(e: any) {
    try {
      e.preventDefault();
      setDisable(true);
      let userInput = {
        phone_number: e.target.phone_number.value,
        username: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value,
        user_postal_code: e.target.postcode.value,
        user_city: e.target.city.value,
        user_lang: "en",
        user_time_zone: `${Intl.DateTimeFormat().resolvedOptions().timeZone}`,
        last_time_loggedin: `${date}`,
        user_browser: `${navigator.userAgent}`,
      };
      let url = `${API_URL}/api/sign_up`;
      let response = await fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userInput),
      });
      const parseRes = await response.json();
      console.log(parseRes);
      if (parseRes.error) {
        setDisable(false);
        err_toast(parseRes.error);
      } else {
        let user: any = parseRes.data;
        let userData: User = {
          photo: user.photo,
          email: user.email,
          username: user.username,
          accessToken: user.access_token,
          phoneNumber: user.phone_number,
          emailVerified: user.email_verified,
        };
        success_toast(parseRes.msg);
        localStorage.setItem("user_data", JSON.stringify(userData));
        setDisable(false);
        window.location.reload();
      }
    } catch (error: any) {
      setDisable(false);
      const errorMessage = error.message;
      console.log(errorMessage);
      errorMessage === "Failed to fetch"
        ? err_toast(`No internet`)
        : err_toast(error.message);
    }
  }
  return (
    <main className="h-screen w-screen">
      <div className="grid grid-cols-2">
        <div>
          <img src={signupimage} alt="signupimage" />
        </div>
        <div className="mx-20 mt-8">
          <div className="gap-[8px] flex flex-col items-center my-[20px]">
            <p className="text-[30px] font-semibold">Register</p>
            <p className="text-[var(--secondary-08)] text-[14px]">
              Get you connected with your community
            </p>
          </div>
          <form
            onSubmit={(e) => handleCreate(e)}
            className="flex flex-col gap-[12px] text-sm"
          >
            <div className="flex flex-col mb-3">
              <label
                className="mb-[8px] font-semibold text-[var(--primary-01)]"
                htmlFor="username"
              >
                Full name
              </label>
              <div className="pb-4">
                <input
                  id="username"
                  name="username"
                  type="text"
                  className={`px-[10px] w-full py-2 focus:outline-[var(--primary-01)] focus:outline-[1px] bg-white border-[1px] rounded-lg`}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <label
                className="mb-[8px] font-semibold text-[var(--primary-01)]"
                htmlFor="email"
              >
                Email Address
              </label>
              <div className="pb-4">
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={`px-[10px] w-full py-2 focus:outline-[var(--primary-01)] focus:outline-[1px] bg-white border-[1px] rounded-lg`}
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <label
                className="mb-[8px] font-semibold text-[var(--primary-01)]"
                htmlFor="phone_number"
              >
                Phone Number
              </label>
              <div className="pb-4">
                <input
                  id="phone_number"
                  name="phone_number"
                  minLength={13}
                  maxLength={15}
                  type="tel"
                  className={`px-[10px] w-full py-2 focus:outline-[var(--primary-01)] focus:outline-[1px] bg-white border-[1px] rounded-lg`}
                  placeholder="+255..."
                  required
                />
              </div>

              <label
                htmlFor="password"
                className="font-semibold mb-[8px] text-[var(--primary-01)]"
              >
                Create password
              </label>
              <div className="flex flex-col">
                <div className="flex">
                  <input
                    id="password"
                    name="password"
                    placeholder="Create password"
                    type="password"
                    className={`flex-grow px-[10px] py-2 focus:outline-[var(--primary-01)] focus:outline-[1px] bg-white border-[1px] rounded-l-lg`}
                    minLength={8}
                    maxLength={24}
                    required
                  />

                  <button
                    type="button"
                    onClick={toggle_password}
                    className="rounded-r-lg px-3 py-2 border-[1px] w-[53px] bg-white text-[var(--gray-7-text)]"
                  >
                    {eye_icon}
                  </button>
                </div>
              </div>
              <div>
                <p className="text-[#545354]">
                  Minimum 8 characters
                  <br />
                  At least one upper case letter
                  <br />
                  At least one number/symbol
                </p>
              </div>
              <div className="mt-6 flex gap-2">
                <input
                  id="city"
                  name="city"
                  type="text"
                  className={`px-[10px] w-full py-2 focus:outline-[var(--primary-01)] focus:outline-[1px] bg-white border-[1px] rounded-lg`}
                  placeholder="City"
                  required
                />
                <input
                  id="postcode"
                  name="postcode"
                  type="text"
                  className={`px-[10px] w-full py-2 focus:outline-[var(--primary-01)] focus:outline-[1px] bg-white border-[1px] rounded-lg`}
                  placeholder="Postal Code"
                  required
                />
              </div>
            </div>

            <div className="flex gap-2 w-full items-center">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className={
                  "flex-grow font-semibold cursor-wait mt-1 capitalize py-3 px-6 text-[var(--gray-7-text)] rounded-md bg-[var(--white)] border-[1px]"
                }
              >
                Back
              </button>

              <button
                disabled={disable}
                className={
                  disable === true
                    ? "flex-grow cursor-wait mt-1 capitalize py-3 px-6 text-[var(--white)] rounded-md bg-[var(--primary-02)] border-[1px]"
                    : "flex-grow mt-1 capitalize py-3 px-6 text-white rounded-md bg-[var(--primary-01)]"
                }
              >
                {disable === false ? (
                  <span>Continue</span>
                ) : (
                  <i className="italic">Proceeding...</i>
                )}
              </button>
            </div>
            <div className="flex items-center justify-center mt-5">
              <p className="mr-3">{"Already have an Account"}</p>
              <Link
                to="/sign_in_with_email"
                className="underline text-[var(--primary-01)]"
              >
                Sign in
              </Link>
            </div>

            <div className="mt-[20px] text-sm flex items-center justify-center gap-x-1 text-[var(--secondary-08)]">
              <p className="text-center">
                By tapping "Continue", you understand and agree to{" "}
                <Link to="/" className="underline text-[var(--primary-01)]">
                  TownHouse's Terms and Policies
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
