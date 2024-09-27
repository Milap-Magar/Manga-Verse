import Logo from "../../assets/Logo2.svg";

const Footer = () => {
  return (
    <footer className="w-full h-full bg-[#051622] relative">
      <div className="h-[200px] flex flex-col justify-center items-center text-center text-[#DEB992]">
        <figure className="title p-2">
          <img src={Logo} alt="Logo Image" />
        </figure>
        <div className="cpyrght">
          <p className="text-sm flex flex-col justify-center items-center text-center">
            &copy; {new Date().getFullYear()} 📓 Manga-Verse .Inc 📓
            <span>All rights reserved</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
