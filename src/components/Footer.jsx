const Footer = () => {
  return (
    <footer className="w-full bg-black px-60 py-20 relative footer-gradient">
      <div className="flex justify-between items-start">
        <div className="space-y-4">
          <img src="/assets/LogoWhite.png" alt="Logo" className="w-12" />
          <p className="text-white text-sm">&copy;Fluxa Studio, 2025</p>
        </div>

        <div className="flex space-x-20">
          <div>
            <h4 className="text-white text-sm font-semibold mb-2">
              CONTACT US
            </h4>
            <p className="text-gray-400 text-sm">hello@fluxa.studio</p>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-2">DISCOVER</h4>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Team</a>
              </li>
              <li>
                <a href="#">Works</a>
              </li>
              <li>
                <a href="#">Service</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-2">FOLLOW US</h4>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>
                <a href="#">Dribbble</a>
              </li>
              <li>
                <a href="#">Behance</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-10 space-x-10 text-gray-400 text-sm">
        <a href="#">Terms of Service</a>
        <a href="#">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
