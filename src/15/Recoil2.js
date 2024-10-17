import { AtomN } from "./AtomN";
import { useRecoilValue } from "recoil";
// export default function Recoil2(props) {
export default function Recoil2({y2}) {
  const n = useRecoilValue(AtomN) ;

  return (
    <div className="flex flex-col w-1/3 p-5 mx-2 mt-10 font-bold text-white h-4/5 bg-lime-500">
      Recoil2 ({y2} , n= {n})     
    </div>
  )
}