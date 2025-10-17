import { useMediaQuery } from "react-responsive";

function SectionHeader({ text, marginTop }) {
  const isMobile = useMediaQuery({ query: "(max-width:600px)" });

  return (
    <div
      className="flex flex-row items-center"
      style={{ marginTop: marginTop }}
    >
      {isMobile ? (
        <>
          <div className="bg-gradient-to-r from-[#A14B72] to-[#593856] flex-1 h-1"></div>
          <div className="text-2xl px-3">{text}</div>
          <div className="bg-gradient-to-r from-[#593856] to-[#18597F] flex-1 h-1"></div>
        </>
      ) : (
        <>
          <div className="bg-[#AD3D72] w-8 h-1"></div>
          <div className="text-2xl px-3">{text}</div>
          <div className="bg-gradient-to-r from-[#A14B72] to-[#18597F] flex-1 h-1"></div>{" "}
        </>
      )}
    </div>
  );
}

export default SectionHeader;
