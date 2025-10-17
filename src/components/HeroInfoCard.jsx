import ColoredText from "./ColoredText";
import IconContainer from "./IconContainer";

import githubLogo from "../assets/icons/github-logo.svg";
import linkedInLogo from "../assets/icons/linkedin-logo.svg";
import npmLogo from "../assets/icons/npm-logo.svg";

function HeroInfoCard({ style }) {
  return (
    <div
      style={style}
      className="w-full h-min p-8 bg-[#1a1a1a] border-1 border-[#1e1e1e] flex flex-col rounded-[0.25rem]"
    >
      <div className="text-2xl underline">About Me</div>
      <div className="text-xl mt-2">
        I’m <ColoredText text="Pritam Debnath" color="#FB3833" /> — an{" "}
        <ColoredText text="engineering student" color="#90C9FF" /> and{" "}
        <ColoredText text="web developer" color="#ff00b2" /> learning through{" "}
        <ColoredText text="The Odin Project" color="#ffd000" />. I love
        designing in <ColoredText text="Figma" color="#04FF54" /> and bringing
        those ideas to life in code with{" "}
        <ColoredText text="VS Code" color="#0095FF" />. I prefer building things
        from scratch, understanding every layer —{" "}
        <ColoredText text="design, logic, and user flow" color="#FF00B2" /> —
        without relying on <ColoredText text="AI" color="#D364FF" />. For me,
        coding is about clarity, creativity, and control.
      </div>
      <div className="mt-4 flex flex-row justify-end items-center gap-3 max-sm:gap-5">
        <IconContainer
          src={githubLogo}
          link="https://github.com/whatisaProCoder"
        />
        <IconContainer
          src={linkedInLogo}
          link="https://www.linkedin.com/in/pd200x/"
        />
        <IconContainer src={npmLogo} link="https://www.npmjs.com/~pd200x" />
      </div>
    </div>
  );
}

export default HeroInfoCard;
