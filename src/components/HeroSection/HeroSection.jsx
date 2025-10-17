import Avatar from "./Avatar";
import HeroBackdrop from "./HeroBackdrop";
import avatarImage from "../../assets/images/avatar.png";
import HeroInfoCard from "./HeroInfoCard";

import { useMediaQuery } from "react-responsive";

function HeroSection() {
  const isTablet = useMediaQuery({ query: "(max-width: 1048px)" });

  const isMobile = useMediaQuery({ query: "(max-width:600px)" });

  return (
    <>
      {isTablet ? (
        <>
          <HeroBackdrop styles={{ height: isMobile ? "52vw" : "30vw" }} />
          <div className="flex flex-col items-center">
            <Avatar
              src={avatarImage}
              style={{ width: isMobile ? "75%" : "40%", zIndex: 1 }}
            />
            <HeroInfoCard
              style={{
                marginTop: "4rem",
              }}
            />
          </div>
        </>
      ) : (
        <>
          <HeroBackdrop styles={{ height: "16rem" }} />
          <div className="flex flex-row items-center">
            <Avatar src={avatarImage} style={{ width: "20rem", zIndex: 1 }} />
            <HeroInfoCard
              style={{
                transform: "translateX(-1rem)",
                paddingLeft: "3.5rem",
              }}
            />
          </div>
        </>
      )}
    </>
  );
}

export default HeroSection;
