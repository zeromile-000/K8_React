import MyclockImage from "./MyClockImage"; 
import MyclockTime from "./MyClockTime";
function Myclock(){

  return (
    <div>
    <MyclockImage />
    <div className="text-2xl text-red-300">
    <MyclockTime />
    </div>
    </div>
  );


}
export default Myclock;