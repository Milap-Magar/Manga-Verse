import { MANGA } from "@consumet/extensions";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Loading from "../Loading/Loading";
import Faq_Button from "../Card/Faq_Button";
import Line from "../Line/Line";

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
  const navigate = useNavigate();

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

  const handleReadMeClick = (id: string) => {
    navigate(`/manga/${id}`);
  };

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        homeList.length > 0 && (
          <div className="overflow-hidden">
            <Line title="Manga Read" />
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-6 px-2 bg-[#beeae7] ">
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
                    <h3 className="text-lg font-bold h-[80px]">
                      {manga.title}
                    </h3>
                    <Faq_Button onClick={() =>handleReadMeClick(manga.id)} title={"Read Me"} />
                    <p className="text-sm text-[#dc9549] truncate">
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
