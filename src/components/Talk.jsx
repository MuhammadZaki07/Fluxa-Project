const Talk = () => {
  return (
    <>    
    <section id="talk" className="w-full bg-white px-60 py-32 img-section">
      <div className="border border-black w-3/8 rounded-full py-2 text-black font-semibold tracking-widest text-center" data-aos="zoom-in">
        CONNECTIONS MAKE US WHO WE ARE
      </div>
      <div className="flex gap-10 py-10" data-aos="zoom-in">
        <h1 className="text-8xl font-bold tracking-widest">LET&apos;S TALK</h1>
        <a href="#top">
        <i className="bi bi-arrow-up-right-circle text-8xl"></i>
        </a>
      </div>
      <p className="w-1/2 font-extralight" data-aos="fade-down-right">
        Explore our expertise in Finance, Health, and Cloud Software areas. We
        deliver designs tailored to each industry’s unique demands driving
        digital excellence for businesses like yours.
      </p>
    </section>
     <section className="w-full bg-black px-60 py-48 relative img-section-2" id="img">
     <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
   </section>
    </>
  );
};

export default Talk;
