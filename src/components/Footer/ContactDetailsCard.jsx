import discordIcon from "../../assets/icons/discord-icon.svg";
import emailIcon from "../../assets/icons/email-icon.svg";
import locationIcon from "../../assets/icons/location-icon.svg";

import ColoredText from "../common/ColoredText";

function ContactDetailsCard({ style }) {
  let details = [
    {
      icon: discordIcon,
      text: (
        <a href="https://discord.gg/vX9BZ9ZY">
          Let's talk on{" "}
          <ColoredText text="Discord!" color="#8B95FF" decoration="underline" />
        </a>
      ),
    },
    { icon: emailIcon, text: "debnathpritam2005@gmail.com" },
    { icon: locationIcon, text: "Kolkata, Bharat" },
  ];

  details = details.map((detail) => (
    <div key={crypto.randomUUID()} className="flex flex-row gap-6">
      <img src={detail.icon} className="w-6" />
      <div className="text-[1.125rem]">{detail.text}</div>
    </div>
  ));

  return (
    <div
      style={style}
      className="bg-[#191919] border-1 border-[#1e1e1e] flex justify-center items-center py-12 rounded-[0.5rem] drop-shadow-[2px_4px_4px_rgba(0,0,0,25%)] w-[30rem] max-sm:w-[90%]"
    >
      <div className="flex flex-col gap-4">{details}</div>
    </div>
  );
}

export default ContactDetailsCard;
