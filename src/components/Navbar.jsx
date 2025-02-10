const Navbar = () => {
  return (
    <nav className="w-full bg-[#FAFAFA] border-b border-b-slate-300 px-64 fixed z-[9999] flex justify-between items-center py-3">
      <a href="#header">
      <div className="font-semibold text-4xl flex gap-5">
        <img src="/assets/LogoBlack.png" alt="logo"/>
        FLuxa
      </div>
      </a>
      <div className="flex items-center gap-10">
        <ul className="flex gap-10 items-center">
          <li>
            <a href="#aboutus" className="text-lg font-medium">
              About Us
            </a>
          </li>
          <li>
            <a href="#works" className="text-lg font-medium">
              Works
            </a>
          </li>
          <li>
            <a href="#services" className="text-lg font-medium">
              Service
            </a>
          </li>
        </ul>

        <a href="#talk">
        <div className="bg-gradient-to-r from-black via-black to-indigo-700/80 text-white rounded-full w-44 py-3.5 border-4 border-black hover:via-indigo-700/80 transition-colors duration-500">
          <div className="flex justify-between items-center px-7 cursor-pointer">
            <i className="bi bi-emoji-smile font-bold"></i>
            <span className="font-normal text-lg">Let&apos;s Talk</span>
          </div>
        </div>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
