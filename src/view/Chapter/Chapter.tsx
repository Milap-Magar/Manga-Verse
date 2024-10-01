import { MANGA } from "@consumet/extensions";
import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { Footer, Loading, Navbar } from "../../components";

interface ChapterDetails {
  title: string | null;
  images: Array<{ img: string; page: number }>;
}

const Chapter = () => {
  const { chapterId } = useParams<{ chapterId: string }>();
  const [searchParams] = useSearchParams();
  const chapterTitle = searchParams.get("title");
  const [chapterDetails, setChapterDetails] = useState<ChapterDetails | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchChapterDetails = async () => {
      const mangaProvider = new MANGA.MangaDex();
      try {
        const details = await mangaProvider.fetchChapterPages(chapterId!);

        if (details) {
          setChapterDetails({
            title: chapterTitle,
            images: details.map((item: { img: string }, index: number) => ({
              img: item.img,
              page: index + 1,
            })),
          });
        }
      } catch (error) {
        console.error("Error fetching chapter details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (chapterId) {
      fetchChapterDetails();
    }
  }, [chapterId, chapterTitle]);

  if (isLoading || !chapterDetails) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <div className="p-4 md:w-[90%] w-[100%] h-full ">
        <h1 className="text-2xl font-bold">Chapter: {chapterDetails.title}</h1>
        <div className="chapter-images ">
          {chapterDetails.images.map((image) => (
            <div key={image.page} className="my-4">
              <img
                src={image.img}
                alt={`Page ${image.page}`}
                className="w-full "
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Chapter;
