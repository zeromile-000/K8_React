import { AtomN, AtomN2 } from "./AtomN";
import { useRecoilValue } from "recoil";

export default function RDiv2() {
  const n = useRecoilValue(AtomN);
  const y = useRecoilValue(AtomN2);
  
  return (
    <div className="flex flex-col items-center justify-center w-full font-bold text-white h-4/6 bg-lime-600">
      <div className="flex items-center justify-start w-full h-10 p-5 m-2 ">
        RDiv2 : n = {n}, y = {y}
      </div>
    </div>
  )
}