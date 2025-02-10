const Header = () => {
  return (
    <section id="header" className="w-full justify-center py-40 px-60 bg-white">
    <div className="container">
      <h1 className="font-medium text-right" data-aos="fade-down">
        MAKING YOUR BUSINESS GROW FASTER
      </h1>
      <div className="flex flex-col gap-10">
        <div className="text-9xl font-medium tracking-wider" data-aos="fade-right">THE EXTRA</div>
        <div className="text-9xl font-medium text-right" data-aos="fade-left">MILE STARTS</div>
        <div className="flex gap-5" data-aos="fade-right">
          <div className="text-9xl font-medium tracking-wide">
            HERE AT FLUXA
          </div>
          <div className="flex items-center">
            <div className="w-20 h-20 rounded-full bg-black flex justify-center items-center">
              <img src="/assets/LogoWhite.png" alt="Logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-between py-32">
      <p className="w-1/4 font-light text-sm" data-aos="fade-down">
        We create impactful digital experiences. better results every next
        year of our work
      </p>
      <a href="#img" className="font-light text-2xl" data-aos="fade-down">
        SCROLL DOWN <i className="bi bi-arrow-down-left"></i>
      </a>
    </div>
  </section>
  )
}

export default Header