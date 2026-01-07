import Backdrop from "./Backdrop";
import ContactDetailsCard from "./ContactDetailsCard";
import ContactMeCard from "./ContactMeCard";

import { useMediaQuery } from "react-responsive";

function Footer() {
  const isTablet = useMediaQuery({ query: "(max-width: 1048px)" });

  return (
    <Backdrop>
      {isTablet ? (
        <div
          className="flex flex-col justify-center items-center px-12 max-sm:px-4"
          style={{ transform: "translateY(-8rem)" }}
        >
          <ContactMeCard style={{ zIndex: 10 }} />
          <ContactDetailsCard
            style={{
              transform: "translateY(-0.75rem)",
              borderRadius: "1rem",
              paddingTop: "4rem",
            }}
          />
        </div>
      ) : (
        <div
          className="flex flex-row justify-center items-center px-12"
          style={{ transform: "translateY(-10rem)" }}
        >
          <ContactMeCard style={{ transform: "", flex: "1", zIndex: 10 }} />
          <ContactDetailsCard
            style={{
              transform: "translateX(-0.5rem)",
              flex: "1",
              paddingLeft: "2rem",
            }}
          />
        </div>
      )}
      <div className="text-[1.125rem] max-sm:text-[0.9rem] text-center translate-y-[-2.5rem] inter font-medium">
        © 2025{" "}
        <a
          href="https://github.com/whatisaProCoder"
          target="_blank"
          className="text-[#0095FF] underline"
        >
          whatisaProCoder
        </a>
        . All <span className="text-[#FB3833]">rights</span> reserved.
      </div>
    </Backdrop>
  );
}

export default Footer;
