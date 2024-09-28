
const Card = ({ manga }) => {
  return (
    <div className="w-[200px] h-[250px] text-white bg-black grid grid-rows-[70%_auto] gap-2 p-2 rounded-lg shadow-lg">
      <figure className="w-full h-full">
        <img
          src={manga.imageUrl}
          alt={manga.title}
          className="w-full h-full object-cover rounded"
        />
      </figure>
      <div className="text-center">
        <h3 className="text-sm font-semibold truncate">{manga.title}</h3> {/* Title */}
        <p className="text-xs truncate">{manga.author}</p> {/* Optional: Author */}
      </div>
    </div>
  );
};

export default Card;
