import { Link } from "react-router-dom";
import hero from "../assets/images/backgrounds/hero.svg";

const Home = () => {
  return (
    <div className="bg-[#1A1818] w-screen">
      <section>
        <figure className="relative  transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 w-full">
          <div>
            {" "}
            <img src={hero} alt="hero" />
          </div>

          <figcaption className="absolute bottom-96 mx-24 ">
            <h1 className="text-black font-serif text-3xl">Townhouse</h1>
            <h2 className="text-black font-serif text-base">
              Where your neighbourhood comes together.
            </h2>
            <p className="text-black font-serif text-sm">
              Connect with your neighbours, share local finds,
              <br />
              and experience the best of your local community
            </p>
            <Link
              to="/sign-in"
              style={{ textDecoration: "none", color: "white" }}
            >
              <button className="bg-[#DC0E62] hover:bg-[#1A1818] text-white font-semibold py-2  border-[#DC0E62] w-28 h-10 rounded">
                Join Us
              </button>
            </Link>
          </figcaption>
        </figure>
        <div className='bg-[#070624] grid-cols-4 gap-4 md:flex md:flex-row h-1/2'>
                        <div
                            className="h-1/2 mx-3 mt-6 flex flex-col rounded-lg bg-[#070624] sm:shrink-0 sm:grow sm:basis-0 border-white border-2">

                            <div className="w-full shadow-md">
                                <h3 className="font-bold text-white text-center p-2 text-lg">
                                    Blockchain Integration
                                </h3>
                                <p className="font-normal text-justify text-white text-sm sm:p-4 p-4">
                                    ThriftChain leverages blockchain technology
                                    for enhanced security and transparency.
                                    Smart contracts are used for automated
                                    savings and contribution management, 
                                    creating an immutable ledger for transaction
                                    history and saving activities. The use of 
                                    blockchain ensures that users can trust the 
                                    with their financial transactions
                                    and contributes to the overall reliability and security
                                     of the service.


                                </p>

                            </div>
                            
                        </div>

                        <div
                            className="h-1/2 mx-3 mt-6 flex flex-col rounded-lg bg-[#070624] sm:shrink-0 sm:grow sm:basis-0 border-white border-2">

                            <div className="w-full h-1/2 shadow-md">
                                <h3 className="font-bold text-white text-center p-2 text-lg">
                                    Immutable Ledger
                                </h3>
                                <p className="font-normal text-justify text-white text-sm sm:p-4 p-4">
                                    ThriftChain integration of blockchain
                                    technology ensures that all transactions, savings
                                    activities, and contributions are recorded on an
                                    immutableledger. This ledger is  transparent
                                    and can be audited by  users, providing
                                    a high level of trust and accountability.
                                    Users can verify their financial activities,
                                    contributing to a secure and transparent
                                    financial ecosystem.
                                </p>


                            </div>
                            
                        </div>
                        <div
                            className="h-1/2 mx-3 mt-6 flex flex-col rounded-lg bg-[#070624] sm:shrink-0 sm:grow sm:basis-0 border-white border-2">
                            <div className="w-full h-1/2 shadow-md">
                                <h3 className="font-bold text-white text-center p-2 text-lg">
                                    Smart Contract Automation
                                </h3>
                                <p className="font-normal text-justify text-white text-sm sm:p-4 p-4">
                                    The use of smart contracts in ThriftChain
                                    automates various aspects of the platform.
                                    Smart contracts manage individual and
                                    group-based savings, including the deduction
                                    of funds from users wallets, tracking progress,
                                    and releasing savings upon maturity. This
                                    automation reduces the need for manual
                                    intervention, increasing efficiency and
                                     reliability in the savings process.
                                </p>

                            </div>
                           
                        </div>



                    </div>
      </section>
    </div>
  );
};

export default Home;
