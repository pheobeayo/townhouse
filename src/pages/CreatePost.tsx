import Nav from "../components/Nav";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../context";
import { MdChevronLeft } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";


export default function CreatePost() {
  const navigate=useNavigate()  
  const {user}=useContext(GlobalContext);
  const { username, photo, location } =user

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Nav data={{ username, photo, location }} />

      <div className="flex justify-between w-full">
        <button onClick={()=>navigate(-1)} 
          className="flex text-base gap-[2px] items-center justify-center"
        >
          <MdChevronLeft className="w-[20px] h-[20px] " />
          <p className="font-semibold text-xl mb-4 mt-4">Create post</p>
        </button>
        <div className="inline-flex rounded-md shadow-sm mt-4" role="group">
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-[#67727E] rounded-s-lg hover:bg-gray-100 hover:text-[#DC0E62] focus:z-10 focus:ring-2"
          >
            Post
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-500 bg-white rounded-e-lg  border-[#67727E] hover:bg-gray-100 hover:text-[#DC0E62] focus:z-10 focus:ring-2 "
          >
            Tweet
          </button>
        </div>
      </div>
      <div className="grid max-sm:grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2">
        <div className="flex rounded-[20px] gap-4 ">
          <div className="flex items-center justify-center w-full">
            <label

              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer  bg-gray-50"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag and
                  drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Drop your image here or <Link to='/'>Browse</Link>
                </p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
        </div>
        <div>
          <form>
            <div className="mb-2">
              <label className="block text-[#000000] text-base font-bold mb-2">
                Title
              </label>
              <input
                className="bg-white border-[#ABABAB] border rounded w-full py-2 px-3 text-[#ABABAB] leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                type="title"
                placeholder="once upon a time..."
                required
              />
            </div>
            <div className="mb-2">
              <label className="block text-[#000000] text-base font-bold mb-2">
                Description
              </label>
              <input
                className="bg-white border-[#ABABAB] border rounded w-full h-28 py-2 px-3 text-[#ABABAB] leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                type="text"
                placeholder="The start of a wonderful story..."
                required
              />
            </div>
            <div className="grid place-items-end">
            <button
                  type="submit"
                  className="w-1/4 px-8 py-2 mb-2 font-semibold rounded-lg text-white bg-[#DC0E62]"

                >
                  Post
                </button>
                </div>
          </form>
        </div>
      </div>
    </main>
  );
}
