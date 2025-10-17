function IconContainer({ src, link, width = "1.5rem" }) {
  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <img
      src={src}
      alt={link}
      style={{ width: width }}
      className="aspect-square cursor-pointer"
      onClick={handleClick}
    />
  );
}

export default IconContainer;
