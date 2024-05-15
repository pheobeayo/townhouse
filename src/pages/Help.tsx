import { useContext, useEffect } from "react";
import { GlobalContext } from "../context";
import Nav from "../components/Nav";


export default function Help() {
  const { user } = useContext(GlobalContext);
  const { username, photo, location } = user;
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Nav data={{ username, photo, location }} />
      <div className="flex justify-between w-full">
        <p className="font-semibold text-2xl mb-4 mt-10 leading-10 ">
          Help
         
        </p>
      </div>
      
      
    </main>
  );
}
