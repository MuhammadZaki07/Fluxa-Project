import { useEffect } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Aos from "aos";
function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      // once: true,
    });
  }, []);
  return (
    <>
      <Navbar />
      <Header />
      <section
        id="aboutus"
        className="bg-[#E6E7EE] w-full py-40 flex flex-col px-40"
      >
        <div className="flex gap-20 justify-center" data-aos="fade-down">
          <div className="border border-black w-24 h-7 rounded-full flex items-center justify-center">
            <h1 className="font-light text-black text-center">FLUXA</h1>
          </div>
          <p className="text-4xl font-normal w-1/2 tracking-wider">
            A creative agency specializing in development, crafting exceptional
            websites, mobile apps, and branding.{" "}
          </p>
        </div>
        <div className="container flex justify-center py-24">
          <div className="border border-black w-96 h-96 translate-x-[7%] rounded-full flex justify-center items-center flex-col gap-3" data-aos="fade-left">
            <h1 className="font-bold text-5xl text-center">80%</h1>
            <h2 className="font-medium text-lg text-center">
              Satisfied Clients
            </h2>
          </div>
          <div className="border border-black w-96 h-96 rounded-full flex justify-center items-center flex-col gap-3" data-aos="zoom-in">
            <h1 className="font-bold text-5xl text-center">100+</h1>
            <h2 className="font-medium text-lg text-center">Projects</h2>
          </div>
          <div className="border border-black w-96 h-96 translate-x-[-7%] rounded-full flex justify-center items-center flex-col gap-3" data-aos="fade-right">
            <h1 className="font-bold text-5xl text-center">5+</h1>
            <h2 className="font-medium text-lg text-center">
              Years of Experient
            </h2>
          </div>
        </div>
        <div className="border-1 border-black w-96 px-5 py-1 rounded-full mx-auto">
          <h1 className="text-center font-normal text-black text-xl">
            THE TEAM BEHIND THIS
          </h1>
        </div>
        <div className="px-20 py-20 flex justify-center">
          <div className="flex flex-col gap-10">
            <div className="flex gap-10 justify-center">
              {[1, 2, 3, 4].map((a, index) => (
                <>
                  <div className="relative group inline-block" data-aos="zoom-in-down">
                    <img
                      key={index + 1}
                      src="/assets/man.png"
                      className="w-52 grayscale transition duration-500 cursor-pointer hover:scale-110 hover:grayscale-0"
                      alt="Man"
                    />

                    <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-[-80%] bg-white text-black text-sm font-light py-1 text-center border w-44 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 shadow-lg">
                      Firdaus * Designer
                    </div>
                  </div>
                </>
              ))}
            </div>
            <div className="flex gap-10">
              {[1, 2, 3, 4, 5].map((a, index) => (
                <>
                  <div className="relative group inline-block" data-aos="zoom-in-down">
                  <img
                      key={index + 1}
                      src="/assets/man.png"
                      className="w-52 grayscale transition duration-500 cursor-pointer hover:scale-110 hover:grayscale-0"
                      alt="Man"
                    />

                    <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-[-80%] bg-white text-black text-sm font-light py-1 text-center border w-44 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 shadow-lg">
                      Firdaus * Designer
                    </div>
                  </div>
                </>
              ))}
            </div>
            <div className="flex gap-10 justify-center">
              {[1, 2].map((a, index) => (
                <>
                  <div className="relative group inline-block" data-aos="zoom-in-down">
                  <img
                      key={index + 1}
                      src="/assets/man.png"
                      className="w-52 grayscale transition duration-500 cursor-pointer hover:scale-110 hover:grayscale-0"
                      alt="Man"
                    />

                    <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-[-80%] bg-white text-black text-sm font-light py-1 text-center border w-44 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 shadow-lg">
                      Firdaus * Designer
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
