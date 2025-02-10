const Work = () => {
  return (
    <section id="works" className="w-full bg-white px-60 py-32">
      <div className="border border-black w-52 rounded-full py-2 text-black font-light text-center" data-aos="fade-down">
        OUR WORKS
      </div>
      <div className="flex justify-center gap-56">
        <div className="flex flex-col gap-20 mt-16">
          <div className="card" data-aos="fade-left">
            <div className="space-y-3 py-5">
              <h1 className="font-medium text-4xl">AYLA</h1>
              <p className="font-normal text-sm text-slate-600 w-7/12">
                AYLA is the #1 bill-tracker in Australia, designed from scratch
                by Hyperactive Design.
              </p>
            </div>
            <img src="/bento-grid/1.png" alt="1" className="w-xl" />
            <div className="flex gap-2 mt-5">
              {[1, 2, 3].map((item, index) => (
                <div
                  key={index + 1}
                  className="border border-black text-center text-black py-1 text-sm font-semibold px-3 rounded-full"
                >
                  MOBILE APP
                </div>
              ))}
            </div>
          </div>
          <div className="card" data-aos="fade-left">
            <div className="space-y-3 py-5">
              <h1 className="font-medium text-4xl">NICKLPASS</h1>
              <p className="font-normal text-sm text-slate-600 w-7/12">
                NICKLPASS is a project that offers fast access to the best-paid
                newsletters on the web.
              </p>
            </div>
            <img src="/bento-grid/2.png" alt="1" className="w-xl" />
            <div className="flex gap-2 mt-5">
              {[1, 2].map((item, index) => (
                <div
                  key={index + 1}
                  className="border border-black text-center text-black py-1 text-sm font-semibold px-3 rounded-full"
                >
                  MOBILE APP
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-20">
          <div className="card" data-aos="fade-right">
            <div className="space-y-3 py-5">
              <h1 className="font-medium text-4xl">DELIVERICS</h1>
              <p className="font-normal text-sm text-slate-600 w-7/12">
                Deliverics is a brand with products made of honey that sells
                their goods via web site.
              </p>
            </div>
            <img src="/bento-grid/3.png" alt="1" className="w-xl" />
            <div className="flex gap-2 mt-5">
              {[1, 2, 3].map((item, index) => (
                <div
                  key={index + 1}
                  className="border border-black text-center text-black py-1 text-sm font-semibold px-3 rounded-full"
                >
                  MOBILE APP
                </div>
              ))}
            </div>
          </div>
          <div className="card" data-aos="fade-right">
            <div className="space-y-3 py-5">
              <h1 className="font-medium text-4xl">REACTIVE STACK</h1>
              <p className="font-normal text-sm text-slate-600 w-7/12">
                Is an e-learning platform that enables fun and engaging learning
                process.
              </p>
            </div>
            <img src="/bento-grid/4.png" alt="1" className="w-xl" />
            <div className="flex gap-2 mt-5">
              {[1, 2, 3].map((item, index) => (
                <div
                  key={index + 1}
                  className="border border-black text-center text-black py-1 text-sm font-semibold px-3 rounded-full"
                >
                  MOBILE APP
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
