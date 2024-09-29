interface LineRef {
  title: string;
}

const Line: React.FC<LineRef> = ({ title }) => {
  return (
    <div className="w-full h-[40px] bg-[#051622] px-2 py-2 rounded-sm text-center tracking-[10px] hover:tracking-normal transition-all duration-300 ease-in-out">
      <span className="text-white font-extrabold font-mono">{title}</span>
    </div>
  );
};

export default Line;
