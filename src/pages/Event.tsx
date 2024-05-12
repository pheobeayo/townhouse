import { useParams } from "react-router-dom"
import Nav from "../components/Nav"
import { useContext, useEffect } from "react";
import { GlobalContext } from "../context";

export default function Event(){
    const { id }=useParams()
    const {user}=useContext(GlobalContext);
    const {username,photo,location} =user;

    useEffect(()=>{
		window.scrollTo(0,0)
       
    },[])

    return(
        <div>
            <Nav data={{username,photo,location}}/>	

            Event {id}
        </div>
    )
}
