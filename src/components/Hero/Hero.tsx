import { MANGA } from "@consumet/extensions";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Loading from "../Loading/Loading";

interface TrendingList {
  id: string;
  image: string;
}

const Hero = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [heroList, setHeroList] = useState<TrendingList[]>([]);

  useEffect(() => {
    const heroManga = async () => {
      const mangaProvider = new MANGA.MangaDex();
      try {
        console.log("Fetching popular mangas...");

        const results = await mangaProvider.fetchPopular();
        // console.log("API response: ", results);

        if (results && Array.isArray(results.results)) {
          const formattedResults: TrendingList[] = results.results.map(
            (manga: any) => ({
              id: manga.id,
              image: manga.image,
            })
          );
          setHeroList(formattedResults);
          setIsLoading(false);
        } else {
          console.error("Invalid response structure", results);
        }
      } catch (error) {
        console.error("Error fetching manga:", error);
      }
    };
    heroManga();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="md:w-[50vw] ">
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className="h-[50vh] md:w-[50vw] "
          >
            {heroList.map((manga) => (
              <SwiperSlide key={manga.id}>
                <div className="flex justify-between w-full h-[80vh]">
                  <img
                    src={manga.image}
                    alt={manga.id}
                    className="object-contain w-[50vw]"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
};

export default Hero;
