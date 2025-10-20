function ColoredText({ color, text, decoration }) {
  return (
    <span style={{ color: color, textDecoration: decoration }}>{text}</span>
  );
}

export default ColoredText;
