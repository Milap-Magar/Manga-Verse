interface CardProps {
  title: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ image, title }) => {
  return (
    <div className="md:w-[16vw] h-[250px] text-white bg-black bg-opacity-70 transition-transform transform hover:scale-105 hover:bg-opacity-100 grid grid-rows-[70%_auto] gap-2 p-2 rounded-lg shadow-lg hover:shadow-2xl cursor-pointer">
      <figure className="w-full h-full overflow-hidden rounded">
        <img
          src={image}
          alt={title}
          className="md:w-[190px] sm:w-[300px] w-[85vw] h-full object-cover transition-transform transform hover:scale-110"
        />
      </figure>
      <div className="text-center">
        <h3 className="text-sm font-semibold truncate overflow-hidden whitespace-nowrap text-ellipsis">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default Card;
