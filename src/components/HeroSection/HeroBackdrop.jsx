function HeroBackdrop({ styles }) {
  return (
    <div className="absolute top-0 right-0 left-0 -z-10">
      <div
        className="w-full bg-gradient-to-r from-[#512133] to-[#052535]"
        style={{ height: styles.height }}
      ></div>
      <div className="w-full h-20 translate-y-[-5rem] bg-gradient-to-b from-transparent to-[#141414]"></div>
    </div>
  );
}

export default HeroBackdrop;
