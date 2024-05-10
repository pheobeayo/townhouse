import { Link } from "react-router-dom";
import hero from "../assets/images/backgrounds/hero.svg";
import Header from "../components/Header";
import starticon from "../assets/images/icons/starticon.svg";
import borrowicon from "../assets/images/icons/borrowicon.svg";
import planicon from "../assets/images/icons/planicon.svg";
import townevent from "../assets/images/backgrounds/townevent.svg";
import towntalk from "../assets/images/backgrounds/towntalk.svg";
import neighbourhoodheart from "../assets/images/backgrounds/neighbourhoodheart.svg";
import LandingFooter from "../components/LandingFooter";

export default function LandingPage() {
  return (
    <main className="bg-white w-screen">
      <Header />
      <section className="mt-40">
        <div className=" grid grid-cols-2 gap-10 w-screen">
          <div className="bg-white w-full mx-12">
            <h1 className="text-black font-serif font-black text-6xl mt-8">
              Townhouse - Where
              <br />
              your neighbourhood
              <br />
              comes together.
            </h1>
            <p className="text-black font-serif text-lg mt-10">
              Connect with your neighbours, share local finds,
              <br />
              and experience the best of your local community
            </p>
            <div className="mt-4">
              <Link
                to="/getstarted"
                style={{ textDecoration: "none", color: "white" }}
              >
                <button className="bg-[#DC0E62] hover:bg-[#1A1818] text-white text-lg font-semibold py-2  border-[#DC0E62] w-40 h-10 rounded">
                  Join Us
                </button>
              </Link>
            </div>
          </div>
          <div className="mx-20">
            <img src={hero} alt="hero" className="h-3/4" />
          </div>
        </div>
      </section>
      <div className=" grid grid-cols-2 gap-4 w-screen">
      <div className="content-card w-full md:w-[50%] mb-5 h-full  px-4 mt-10 md:mx-20 ">
        <div className='grid place-items-center'>
          <img src={starticon} alt="starticon" className="h-28 mx-10" />
          <h3 className="font-semibold text-black text-justify p-2 text-2xl font-serif">
            Start a conversation
          </h3>
          <p className="text-center font-semibold text-black text-xl sm:p-4 p-4 font-serif">
            Share local tips and
            recommendations on the
            TownTalk Bulletin Board
            <br/>
            <Link to="/" style={{ textDecoration: "none", color: "#DC0E62" }}>Read More</Link>
          </p>
          </div>
      </div>
      <div className="content-card w-full md:w-[50%] mb-5 h-full  px-4 mt-80 mx-16 ">
      <div className='grid place-items-center'>
        <img src={borrowicon} alt="borrowicon" className="h-28 mx-10" />
       
          <h3 className="font-semibold text-black text-center p-2 text-2xl font-serif">
            Borrow a cup of sugar
          </h3>
          <p className="text-center font-semibold text-black text-xl sm:p-4 p-4 font-serif">
            Find friendly neighbors to lend
            a hand through
            NeighborhoodConnect
            <br/>
            <Link to="/" style={{ textDecoration: "none", color: "#DC0E62" }}>Read More</Link>
          </p>
        </div>
      </div>
      </div>
      <div className="content-card w-full md:w-[32%] mb-5 h-full  px-4 mt-10 md:mx-20">
      <div className='grid place-items-center'>
        <img src={planicon} alt="planicon" className="h-28 mx-10" />
        
          <h3 className="font-semibold text-black text-center p-2 text-2xl font-serif">
            Plan the next block party
          </h3>
          <p className="text-center font-semibold text-black text-xl sm:p-4 p-4 font-serif">
            Discover and co-organize
            events with your neighbors
            through TownEvents
            <br/>
            <Link to="/" style={{ textDecoration: "none", color: "#DC0E62" }}>Read More</Link>
          </p>
        
        </div>
      </div>
      <div className=" grid grid-cols-2 gap-10 mt-20 w-screen">
        <div className="mx-10">
          <img src={townevent} alt="townevent" className="h-3/4" />
        </div>
        <div className="bg-white w-3/4">
          <h4 className="text-[#DC0E62] text-base font-bold">TOWNEVENTS</h4>
          <h1 className="text-black font-serif text-5xl font-bold mt-4">
            Discover and create
            <br />
            local experiences
          </h1>
          <p className="text-black font-serif text-3xl text-justify mt-4">
            Want to discover what's happening around you or plan your next
            neighbourhood adventure? Townhouse is here to help! Find local
            events, from picnics in the park to art shows, or use the
            easy-to-use creation tools to co-organise your own event with fellow
            residents. Townhouse brings people together for shared experiences.
          </p>
        </div>
      </div>
      <div className=" grid grid-cols-2 gap-10 mt-20 w-screen">
        <div className="bg-white mx-10">
          <h4 className="text-[#DC0E62] text-base font-bold">TOWNTALK</h4>
          <h1 className="text-black font-serif text-5xl font-bold mt-4">
            Your neighborhood’s
            <br />
            digital hub
          </h1>
          <p className="text-black font-serif text-3xl text-justify mt-4">
            It's more than just a bulletin board - it's a platform to connect
            with your neighbours! Share local recommendations, ask questions,
            and get the inside scoop on what's happening in your community.
            Dwellby is your one-stop shop for fostering a vibrant online
            neighbourhood connection.
          </p>
        </div>
        <div>
          <img src={towntalk} alt="towntalk" className="h-3/4" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-10 mt-20 w-screen">
        <div className="mx-10">
          <img src={neighbourhoodheart} alt="neighbourhoodheart"  className="h-3/4" />
        </div>
        <div className="bg-white w-3/4">
          <h4 className="text-[#DC0E62] text-base font-bold">NEIGHBORHOOD CONNECT</h4>
          <h1 className="text-black font-serif text-5xl font-bold mt-4">
            Neighborhood favors
            <br />
            made easy
          </h1>
          <p className="text-black font-serif text-3xl text-justify mt-4">
            Need a helping hand with a DIY project? Or maybe you're looking to
            share your expertise as a seasoned baker? Townhouse makes it simple
            to offer or request anything from borrowing tools to getting advice
            from your neighbour. Townhouse is the perfect platform to cultivate
            a spirit of helpfulness and community within your neighbourhood.
          </p>
        </div>
      </div>
      <LandingFooter/>
    </main>
  );
}
