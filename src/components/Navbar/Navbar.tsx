import { useEffect, useState } from "react";
import Logo from "../../assets/Logo2.svg";
import { TiThMenuOutline } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".navbar") && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div>
      <nav className="navbar w-auto min-h-auto relative">
        <div className="flex justify-between bg-[#051622] py-2 px-2 shadow-lg shadow-[#4d948f]">
          <Link to={"/"}>
            <figure className="cursor-pointer">
              <img src={Logo} alt="Logo_manga" />
            </figure>
          </Link>

          {/* Mobile menu toggle button */}
          <div className="md:hidden z-10">
            {isOpen ? (
              <IoClose
                className="w-8 h-8 text-white cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            ) : (
              <TiThMenuOutline
                className="w-8 h-8 text-white cursor-pointer"
                onClick={() => setIsOpen(true)}
              />
            )}
          </div>

          {/* Navbar items */}
          <ul
            className={`flex md:flex-row md:justify-end flex-col gap-10 items-center px-5 text-[#DEB992] absolute md:static top-0 right-0 bg-[#051622] md:bg-transparent w-full md:w-auto transition-transform duration-300 ease-in-out ${
              isOpen ? "translate-x-0 translate-y-0" : "translate-x-full"
            } md:translate-x-0 md:flex md:gap-10 py-16 md:py-0`}
            style={{
              transform:
                isOpen || window.innerWidth >= 768
                  ? "translateX(0) translateY(0)"
                  : "translateX(100%) translateY(0)",
              visibility:
                isOpen || window.innerWidth >= 768 ? "visible" : "hidden",
            }}
            aria-expanded={isOpen}
          >
            <Link to={"/"} onClick={() => setIsOpen(false)}>
              <li>Home</li>
            </Link>
            <Link to={"/featured"} onClick={() => setIsOpen(false)}>
              <li>Featured</li>
            </Link>
            <Link to={"/manga-list"} onClick={() => setIsOpen(false)}>
              <li>Manga List</li>
            </Link>
            <li onClick={() => setIsOpen(false)}>Category</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
