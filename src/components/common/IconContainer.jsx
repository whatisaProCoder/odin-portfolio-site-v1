function IconContainer({ src, link, width = "1.5rem" }) {
  return (
    <a href={link}>
      <img
        src={src}
        alt={link}
        style={{ width: width }}
        className="aspect-square cursor-pointer"
      />
    </a>
  );
}

export default IconContainer;
