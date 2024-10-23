import { useEffect } from "react";
import TailButton from "../UI/TailButton"

import { AtomN, AtomN2 } from "./AtomN";
import { useRecoilState, useRecoilValue } from "recoil";

export default function Rdiv3() {
  const [x, setX] = useRecoilState(AtomN);
  // const [y, setY] = useRecoilState(AtomN2);
  const y = useRecoilValue(AtomN2);


  const handlerCliup = () => {
    setX(x + 1);

  }

  const handlerClidown = () => {
    setX(x - 1);
    
  }

  useEffect(()=> {
    if(!localStorage.getItem('x'))
      setX(0);
    else
    setX(parseInt(localStorage.getItem('x')));
  },[]);

  
  useEffect(()=> {
    localStorage.setItem('x', x);
  },[x]);




  return (
    <div className="flex flex-col items-center justify-center w-10/12 font-bold h-4/6 bg-lime-400 text-lime-900">
      <div className="flex items-center justify-start w-full h-10 p-5 ">
        RDiv3 : x = {x}, y = {y}
      </div>
      <div className="grid w-full grid-cols-2 place-items-center">
      <TailButton caption='증가'
          color='blue'
          handlerClick={handlerCliup}
          size='w-1/2' />
      <TailButton caption='감소'
          color='orange'
          handlerClick={handlerClidown}
          size='w-1/2' />
      </div>
    </div>
  )
}