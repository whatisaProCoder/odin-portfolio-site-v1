function TechStackCard({ group, techIconUrls }) {
  const techIcons = techIconUrls.map((url) => (
    <img
      src={url}
      key={crypto.randomUUID()}
      className="w-12 transition-all hover:scale-107 hover:drop-shadow-[2px_4px_4px_rgba(0,0,0,40%)]"
    />
  ));
  return (
    <div>
      <div className="text-[1.2rem] text-center text-[#c2c2c2] inter font-semibold px-1">
        {group}
      </div>
      <div className="mt-2 pt-4 px-2 border-t-1 border-t-[#919191] flex flex-row gap-6 justify-around items-center">
        {techIcons}
      </div>
      <div className="mb-8"></div>
    </div>
  );
}

export default TechStackCard;
