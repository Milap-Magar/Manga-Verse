import { MANGA } from "@consumet/extensions";
import { Card, Loading, Navbar } from "../components";

import { useEffect, useState } from "react";

interface mangaFeature {
  id: string;
  title: string;
  image: string;
}

const Featured = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<mangaFeature[]>([]);

  useEffect(() => {
    const fetchManga = async () => {
      const mangaProvider = new MANGA.MangaDex();
      try {
        const results = await mangaProvider.fetchRecentlyAdded();
        // console.log("API Response:", results);

        if (results && Array.isArray(results.results)) {
          const formattedResults: mangaFeature[] = results.results.map(
            (manga: any) => ({
              id: manga.id,
              title: manga.title,
              image: manga.image,
            })
          );
          setData(formattedResults);
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
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <Navbar />
          <Card manga={data} />
        </div>
      )}
    </>
  );
};

export default Featured;
