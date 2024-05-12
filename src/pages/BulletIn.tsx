import { useContext, useEffect } from "react";
import { GlobalContext } from "../context";
import Nav from "../components/Nav"


export default function BulletIn(){
    const {user}=useContext(GlobalContext);
    const {username,photo,location}=user;


	useEffect(()=>{
		window.scrollTo(0,0)
       
    },[])
    return(
        <main>
            <Nav data={{username,photo,location}}/>	
            <p>Bulletin board page</p>
        </main>
    )
}
