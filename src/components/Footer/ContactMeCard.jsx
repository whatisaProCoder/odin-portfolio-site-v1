import IconContainer from "../common/IconContainer";

import githubLogo from "../../assets/icons/github-logo.svg";
import linkedInLogo from "../../assets/icons/linkedin-logo.svg";
import npmLogo from "../../assets/icons/npm-logo.svg";
import cvIcon from "../../assets/icons/cv-icon.svg";

function ContactMeCard({ style }) {
  return (
    <div
      style={style}
      className="bg-[#1B1B1B] border-1 border-[#282828] flex flex-col px-8 py-6 rounded-[0.25rem] drop-shadow-[2px_4px_4px_rgba(0,0,0,25%)]"
    >
      <div className="text-3xl text-[#0095FF]">Contact me</div>
      <div className="mt-2 text-[1.125rem] text-justify">
        Thanks for stopping by! I’m always open to new conversations — whether
        it’s about web dev, design, robotics or just the journey of learning and
        building cool stuff. <br />
        If you’d like to collaborate, share feedback, or just talk about tech,
        psychology, or creativity, drop me a message. I genuinely enjoy
        meaningful connections and exchanging ideas with people who love what
        they do.
      </div>
      <div className="mt-4 flex flex-row gap-4 max-sm:gap-5 max-sm:mt-6 max-lg:justify-end">
        <IconContainer
          src={githubLogo}
          link="https://github.com/whatisaProCoder"
        />
        <IconContainer
          src={linkedInLogo}
          link="https://www.linkedin.com/in/pd200x/"
        />
        <IconContainer src={npmLogo} link="https://www.npmjs.com/~pd200x" />
        <IconContainer
          src={cvIcon}
          link="https://github.com/whatisaProCoder/whatisaProCoder/blob/main/Pritam%20Debnath%20CV.pdf"
        />
      </div>
    </div>
  );
}

export default ContactMeCard;
