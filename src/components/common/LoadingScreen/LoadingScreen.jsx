import "./style.css";

function LoadingScreen({ style }) {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-[#141414] z-50 fade">
      <div
        style={style}
        className="border-[#FB3833] border-4 border-r-[#ededed] rounded-full h-8 w-8 spin fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#141414]"
      ></div>
    </div>
  );
}

export default LoadingScreen;
