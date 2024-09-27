import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaGithubAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full h-full bg-[#051622] relative">
      <div className="h-[30vh] flex flex-col justify-center items-center text-center text-[#DEB992]">
        <div className="media flex flex-col gap-2">
          <span className="font-semibold font-mono text-lg">Connect me: </span>
          <div className="flex gap-6 cursor-pointer">
            <a
              href="https://www.linkedin.com/in/milap-magar-21427a229/"
              target="_blank"
            >
              <FaLinkedin className="h-7 w-7" />
            </a>
            <a href="https://www.instagram.com/milaapeeey/" target="_blank">
              <FaInstagram className="h-7 w-7" />
            </a>
            <a href="https://www.facebook.com/Milap.Magar2022" target="_blank">
              <FaFacebook className="h-7 w-7" />
            </a>
            <a href="https://github.com/Milap-Magar" target="_blank">
              <FaGithubAlt className="h-7 w-7" />
            </a>
          </div>
        </div>
        <div className="title p-2">
          <h2 className="text-xl font-mono font-extrabold">Note's & PDF's</h2>
        </div>
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
