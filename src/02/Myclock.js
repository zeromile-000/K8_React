import MyclockImage from "./MyClockImage"; 
import MyclockTime from "./MyClockTime";

function Myclock() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex items-center justify-center mb-4">
        <MyclockImage className="w-full h-full" /> {/* 이미지 크기 조정 */}
      </div>
      <div className="text-2xl font-bold">
        <MyclockTime />
      </div>
    </div>
  );
}

export default Myclock;
