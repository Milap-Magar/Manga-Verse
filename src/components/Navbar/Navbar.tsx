import { useState } from "react";
import Logo from "../../assets/Logo2.svg";
import { TiThMenuOutline } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

// import { MANGA } from "@consumet/extensions";

// interface SearchResult {
//   title: string;
//   id: string;
// }

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // const [searchResult, setSearchResult] = useState<SearchResult[]>([]);
  // const [isLoading, setIsLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   const fetchManga = async () => {
  //     const mangaProvider = new MANGA.MangaDex();
  //     try {
  //       const results = await mangaProvider.search("One Piece");
  //       console.log("API Response:", results); // Log the response to see the structure

  //       // Check for the results array in the response
  //       if (results && Array.isArray(results.results)) {
  //         // If results.results is an array, map through it
  //         const formattedResults: SearchResult[] = results.results.map(
  //           (manga: any) => ({
  //             title: manga.title,
  //             id: manga.id,
  //           })
  //         );
  //         setSearchResult(formattedResults);
  //       } else {
  //         console.error("Unexpected results structure", results);
  //         // Handle unexpected structure appropriately
  //       }
  //     } catch (error) {
  //       console.error("Error fetching manga:", error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchManga();
  // }, []);

  return (
    <div>
      <nav className="w-auto min-h-auto relative">
        <div className="flex justify-between bg-[#051622] py-2 px-2 shadow-lg shadow-[#4d948f]">
          <figure className="cursor-pointer">
            <img src={Logo} alt="Logo_manga" />
          </figure>
          <div className="md:hidden">
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
          <ul
            className={`flex md:flex-row md:justify-end flex-col gap-10 items-center px-5 text-[#DEB992] absolute md:static top-28 md:py-6 cursor-pointer py-16 right-0 bg-[#051622] md:bg-transparent w-full md:w-auto transition-transform duration-300 ease-in-out ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } md:translate-x-0 md:top-0`}
          >
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"/featured"}>
              <li>Featured</li>
            </Link>
            <Link to={"/manga-list"}>
              <li>Manga List</li>
            </Link>
            <li>Category</li>
          </ul>

          {/* Display search results as a dropdown or in a separate component
          {isLoading ? (
            <p className="text-white">Loading...</p>
          ) : (
            searchResult.length > 0 && (
              <ul className="absolute right-0 bg-white text-black shadow-lg">
                {searchResult.map((manga) => (
                  <li key={manga.id} className="p-2">
                    <Link to={`/manga/${manga.id}`}>{manga.title}</Link>
                  </li>
                ))}
              </ul>
            )
          )}
             */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
