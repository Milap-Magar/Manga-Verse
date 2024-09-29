import { useEffect, useState } from "react";
import { MANGA } from "@consumet/extensions";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { Card, Footer, Line, Loading, Navbar } from "../components";

interface MangaFeature {
  id: string;
  title: string;
  image: string;
}

const Featured = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<MangaFeature[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchManga = async () => {
      const mangaProvider = new MANGA.MangaDex();
      try {
        const results = await mangaProvider.fetchRecentlyAdded();
        if (results && Array.isArray(results.results)) {
          const formattedResults: MangaFeature[] = results.results.map(
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
        setError("Failed to load manga. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchManga();
  }, []);

  return (
    <>
      <Navbar />
      {isLoading ? (
        <Loading />
      ) : error ? (
        <div className="flex items-center justify-center h-full text-red-500">
          {error}
        </div>
      ) : (
        <div className="flex flex-col px-1 py-2 bg-[#beeae7] overflow-hidden">
          <Line title={"Recently Added"} />
          <div className="p-4 -z-0">
            <Swiper
              spaceBetween={16}
              slidesPerView={2}
              navigation
              modules={[Navigation]} // Include Navigation module
              breakpoints={{
                400: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 5 },
                1500: { slidesPerView: 7 },
              }}
            >
              {data.map((manga) => (
                <SwiperSlide key={manga.id}>
                  <Card title={manga.title} image={manga.image} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Featured;
