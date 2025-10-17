function Header({ text }) {
  return (
    <div className="text-3xl p-4 bg-[#1A1A1A] border-1 border-[#1E1E1E] rounded text-center fixed top-4 right-4 left-4">
      {text}
    </div>
  );
}

export default Header;
