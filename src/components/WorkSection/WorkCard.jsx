import shareIcon from "../../assets/icons/share-icon.svg";
import repoIcon from "../../assets/icons/github-repo-icon.svg";

function WorkCard({
  style,
  imageSrc,
  title,
  summary,
  repoLink,
  liveLink,
  techIconURLs,
}) {
  const techIcons = techIconURLs.map((iconURL) => (
    <img
      key={crypto.randomUUID()}
      className="w-6 aspect-square transition-all hover:scale-110 hover:drop-shadow-[2px_4px_2px_rgba(0,0,0,25%)]"
      src={iconURL}
    />
  ));

  return (
    <div
      style={style}
      className="flex flex-col bg-[#1A1A1A] border-1 border-[#282828] rounded-[0.25rem] overflow-hidden drop-shadow-[2px_4px_8px_rgba(0,0,0,25%)] transition-all hover:translate-y-[-0.25rem] hover:bg-[#1e1e1e] hover:drop-shadow-[2px_4px_8px_rgba(0,0,0,40%)]"
    >
      <div className="relative">
        <img
          src={imageSrc}
          alt="Project Showcase"
          className="w-full aspect-video object-cover object-top border-b-1 border-b-[#202020]"
        />
        <div className="text-white absolute right-2 bottom-2"></div>
      </div>
      <div className="flex-1 p-4 flex flex-col">
        <div className="flex-1 flex flex-row items-center">
          <a
            className="text-xl text-[#3390f3] cursor-pointer select-none poppins font-semibold"
            href={liveLink}
            target="_blank"
          >
            {title}
          </a>
          <div className="flex-1"></div>
          <div className="flex flex-row items-center">
            <a href={liveLink} target="_blank">
              <img
                className="w-7.5 transition-all hover:scale-115 cursor-pointer"
                src={shareIcon}
              />
            </a>
            <a href={repoLink} target="_blank">
              <img
                className="w-7.5 transition-all hover:scale-115 cursor-pointer"
                src={repoIcon}
              />
            </a>
          </div>
        </div>
        <div className="flex-1 inter text-[0.9rem]">{summary}</div>
        <div className="mt-2 border-t-1 border-t-[#282828] pt-4 px-1 flex flex-row gap-4 items-center justify-center">
          {techIcons}
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
