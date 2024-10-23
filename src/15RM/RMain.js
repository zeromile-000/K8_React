import Rdiv1 from "./Rdiv1" ;
import { RecoilRoot } from "recoil";
export default function RMain() {
  return (
    <RecoilRoot>
    <div className="flex flex-col items-center justify-center w-full h-full">
      <Rdiv1 />
    </div>
    </RecoilRoot>
  )
}