interface CardProps {
  title: string;
  image: string;
}
const Card: React.FC<CardProps> = ({ image, title }) => {
  return (
    <div className="md:w-[16vw] h-[250px] text-white bg-black grid grid-rows-[70%_auto] gap-2 p-2 rounded-lg shadow-lg">
      <figure className="w-full h-full">
        <img
          src={image}
          alt={title}
          className="md:w-[190px] sm:w-[300px] w-[85vw] h-full object-cover rounded px-2 py-2"
        />
      </figure>
      <div className="text-center">
        <h3 className="text-sm font-semibold truncate">{title}</h3>
      </div>
    </div>
  );
};

export default Card;
