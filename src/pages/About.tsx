import { useEffect } from "react";
//import { FaBuilding, FaFacebook, FaPhone } from "react-icons/fa"
//import { FaLocationPin } from "react-icons/fa6";
function About() {
	useEffect(()=>{
		window.scrollTo(0,0)
	},[])
    return (
        <div className="flex flex-col p-10 min-h-[60vh]">
			<div>
				<p className="text-3xl max-md:text-2xl font-semibold">About Us</p>
				<p>Welcome to Townhouse</p> 
			</div>

			<div className="mt-10 text-sm">
				<div className="mt-6 pb-6 text-gray-600">
					<p className="text-xl text-slate-600 font-semibold">Contact</p>
					<p>If you wish to write us an email instead please use <a href="mailto:imranmat254@gmail.com" className="text-[var(--primary-01)]" target="_blank" rel="noopener noreferrer">imranmat254@gmail.com</a></p>
				</div>
			</div>
        </div>
    );
};

export default About;
