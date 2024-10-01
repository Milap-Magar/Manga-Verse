import { MANGA } from "@consumet/extensions";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Footer, Loading, Navbar } from "../../components";

interface MangaDetails {
  title: string | [lang: string][] | any;
  description: string;
  cover: string | undefined;
  chapters: Array<{ id: string; title: string }>;
}

const MangaDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [mangaDetails, setMangaDetails] = useState<MangaDetails | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const isDescriptionObject = (
    description: any
  ): description is { [lang: string]: string } => {
    return typeof description === "object" && !Array.isArray(description);
  };

  useEffect(() => {
    const fetchMangaDetails = async () => {
      const mangaProvider = new MANGA.MangaDex();
      try {
        const details = await mangaProvider.fetchMangaInfo(id!);

        let englishDescription = "No description available.";
        if (isDescriptionObject(details.description)) {
          englishDescription = details.description.en || englishDescription;
        }

        if (details) {
          setMangaDetails({
            title: details.title,
            description: englishDescription,
            cover: details.image,
            chapters: details.chapters || [],
          });
        }
      } catch (error) {
        console.error("Error fetching manga details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchMangaDetails();
    }
  }, [id]);

  // console.log(mangaDetails);

  if (isLoading || !mangaDetails) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <div className="p-4">
        <h1 className="text-2xl font-bold">{mangaDetails.title}</h1>
        <img
          src={mangaDetails.cover}
          alt={`${mangaDetails.title} cover`}
          className="w-full h-64 object-cover my-4"
        />
        <h1 className="font-bold text-xl">Description: </h1>
        <p>{mangaDetails.description}</p>
        <h2 className="text-xl font-bold mt-4">Chapters</h2>
        <ul className="underline">
          {mangaDetails.chapters.map((chapter, index) => (
            <li key={index}>
              <a
                href={`/chapter/${chapter.id}?title=${chapter.title}`}
                className="text-blue-500"
              >
                {chapter.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default MangaDetails;
