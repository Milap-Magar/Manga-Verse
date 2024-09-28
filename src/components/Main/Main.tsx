import { MANGA } from "@consumet/extensions";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";

interface MangaItem {
  title: string;
  id: string;
  description: string;
  cover: string;
  release: string;
}

const Main = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [homeList, setHomeList] = useState<MangaItem[]>([]);

  useEffect(() => {
    const fetchManga = async () => {
      const mangaProvider = new MANGA.MangaDex();
      try {
        const results = await mangaProvider.fetchRecentlyAdded();
        // console.log("API Response:", results);

        if (results && Array.isArray(results.results)) {
          const formattedResults: MangaItem[] = results.results.map(
            (manga: any) => ({
              title: manga.title,
              id: manga.id,
              description: manga.description,
              cover: manga.image,
              release: manga.release,
            })
          );
          setHomeList(formattedResults);
        } else {
          console.error("Unexpected results structure", results);
        }
      } catch (error) {
        console.error("Error fetching manga:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchManga();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        homeList.length > 0 && (
          <div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-6 px-2 bg-[#beeae7]">
              {homeList.map((manga: MangaItem) => (
                <li
                  key={manga.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden shadow-[#a9aeae]"
                >
                  <img
                    src={manga.cover}
                    alt={`${manga.title} cover`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold">{manga.title}</h3>
                    <p className="text-sm text-gray-700 truncate">
                      {manga.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )
      )}
    </div>
  );
};

export default Main;
