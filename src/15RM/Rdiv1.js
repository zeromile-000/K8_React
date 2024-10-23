import Rdiv2 from "./Rdiv2" ;
import Rdiv3 from "./Rdiv3";
import { AtomN } from "./AtomN";
import { useRecoilValue } from "recoil";

export default function Rdiv1() {
  const n = useRecoilValue(AtomN);
  

  return (
    <div className="flex flex-col items-center justify-center w-4/6 font-bold text-white h-4/6 bg-lime-800">
      <div className="flex items-center justify-start w-full h-10 p-5 m-2 ">
      RDiv1 : x={n}
      </div>
      <div className="grid w-full grid-cols-2 gap-4 place-items-center">
        <Rdiv2  />
        <Rdiv2  />
      </div>  
      <div className="flex items-center justify-center w-full h-1/2">
        <Rdiv3  /> 
      </div>
      
    </div>
  )
}