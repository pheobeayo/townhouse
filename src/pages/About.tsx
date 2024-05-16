import { Link } from "react-router-dom";
import Header from "../components/Header";
import { ReactElement } from "react";
import starticon from "../assets/images/icons/starticon.svg";
import borrowicon from "../assets/images/icons/borrowicon.svg";
import planicon from "../assets/images/icons/planicon.svg";
import { twMerge } from "tailwind-merge";
import LandingFooter from "../components/LandingFooter";

function About() {
  return (
    <div>
      <Header />
      <section className="mt-10 bg-[#930941] py-28 2xl:py-32 text-white">
        <Container>
          <div className="text-center max-w-7xl mx-auto">
            <h1 className="font-medium text-7xl mb-14">
              The possibilities are endless with
              <span className="text-[#F8CFE0] inline-block mt-4">
                Townhouse
              </span>
            </h1>

            <p className="text-left font-medium text-3xl max-w-[45.313rem] mx-auto leading-normal mb-16">
              Connect with your neighbours, share local finds, and experience
              the best of your local community.
            </p>

            <Link to="/getstarted">
              <button className="text-2xl font-semibold px-14 py-4 rounded-[4px] bg-[var(--primary-01)] text-[var(--white)]">
                Join Us
              </button>
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-32">
        <Container>
          <h2 className="text-5xl font-medium text-black mb-24">
            What makes us different?
          </h2>

          <div className="space-y-16">
            <div className="grid xl:grid-cols-2 justify-items-center">
              <div className="flex flex-col items-center max-w-96 gap-4">
                <img src={starticon} alt="starticon" className="h-28 mx-10" />

                <div className="text-center">
                  <h3 className="font-semibold p-2 text-2xl text-center mb-1">
                    Empowering Local Engagement
                  </h3>
                  <p className="text-lg font-medium">
                    Our platform bridges the gap between residents and local
                    authorities, enabling meaningful interactions and collective
                    action on community issues, fostering positive change from
                    the grassroot level
                  </p>
                </div>
              </div>
            </div>

            <div className="grid xl:grid-cols-2 justify-items-center">
              <div className="flex flex-col items-center max-w-96 gap-4 order-last col-start-2">
                <img src={planicon} alt="planicon" className="h-28 mx-10" />

                <div className="text-center">
                  <h3 className="font-semibold p-2 text-2xl text-center mb-1">
                    Resident-Centric Design
                  </h3>
                  <p className="text-lg font-medium">
                    With an intuitive and accessible interface, our platform
                    allows residents to easily connect, stay informed, and
                    engage with their neighborhoods, overall enhancing
                    transparency
                  </p>
                </div>
              </div>
            </div>

            <div className="grid xl:grid-cols-2 justify-items-center">
              <div className="flex flex-col items-center max-w-96 gap-4 order-last">
                <img src={borrowicon} alt="borrowicon" className="h-28 mx-10" />

                <div className="text-center">
                  <h3 className="font-semibold p-2 text-2xl text-center mb-1">
                    Interactive Features
                  </h3>
                  <p className="text-lg font-medium">
                    Through features like bulletin boards and event
                    collaboration tools our platform provides local governments
                    with valuable insights into community needs for future
                    integration
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-32">
        <Container>
          <div className="text-center max-w-6xl mx-auto">
            <h2 className="font-medium text-7xl mb-10">
              What are you waiting for?
            </h2>

            <p className="font-medium text-3xl  mx-auto leading-normal mb-16">
              Join our community and get connected with like minded individuals
              and neighbors, while sharing meaningful experiences,.
            </p>

            <Link to="/getstarted">
              <button className="text-2xl font-semibold px-14 py-4 rounded-[4px] bg-[var(--primary-01)] text-[var(--white)]">
                Join Us
              </button>
            </Link>
          </div>
        </Container>
      </section>

      <Container>
        <LandingFooter />
      </Container>
    </div>
  );
}

interface ContainerProp {
  children: ReactElement | ReactElement[];
  className?: string;
}

function Container({ children, className }: ContainerProp) {
  const classes = twMerge("max-w-screen-2xl mx-auto", className);

  return <div className={classes}>{children}</div>;
}

export default About;
