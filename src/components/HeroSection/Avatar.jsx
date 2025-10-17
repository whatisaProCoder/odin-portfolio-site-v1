function Avatar({ src, style }) {
  return (
    <img
      src={src}
      style={{ height: style.width, width: style.width, zIndex: style.zIndex }}
      className="rounded-[1rem] border-1 border-[rgba(50,50,50,60%)] drop-shadow-[2px_4px_8px_rgba(0,0,0,25%)] sm:transition-transform sm:hover:scale-102"
    ></img>
  );
}

export default Avatar;
