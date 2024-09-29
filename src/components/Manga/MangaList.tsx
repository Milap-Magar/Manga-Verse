import { MANGA } from "@consumet/extensions";
import { useEffect, useState } from "react";
import "./manga.css";
import Loading from "../Loading/Loading";
import Line from "../Line/Line";

interface List {
  id: string;
  title: string;
  image?: string; // Optional
}

const MangaList = () => {
  const [mangaList, setMangaList] = useState<List[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchManga = async () => {
      const mangaProvider = new MANGA.MangaDex();
      try {
        const results = await mangaProvider.fetchPopular();

        if (results && Array.isArray(results.results)) {
          const formattedResults: List[] = results.results.map(
            (manga: any) => ({
              id: manga.id,
              title: manga.title,
              image: manga.image,
            })
          );

          const sortedResults = formattedResults.sort((a, b) =>
            a.title.localeCompare(b.title)
          );
          setMangaList(sortedResults);
        } else {
          console.error("Unexpected results structure", results);
        }
      } catch (error) {
        console.error("Error fetching manga:", error);
        setError("Failed to load manga. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchManga();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="manga-list-container">
      <Line title={"A-Z Lists of Manga"} />
      <div className="manga-list p-4">
        {mangaList.map((manga) => (
          <div className="manga-item" key={manga.id}>
            {manga.image && (
              <img
                src={manga.image}
                alt={manga.title}
                className="manga-image"
              />
            )}
            <h2 className="manga-title">{manga.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MangaList;
