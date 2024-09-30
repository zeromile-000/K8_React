import { useEffect, useState } from "react"
import TailButton from '../UI/TailButton';


export default function BoxOffice() {
  const [cnt, setCnt] = useState(0)
  const handleUp = () => {
    setCnt(cnt + 1);
    
  }
  
  //맨 처음 한번 실행
  useEffect(() => {
    console.log('useEffect []');
    setCnt(100);
  }, []);

  //state 변수 cnt가 변경 될 때
  useEffect(() => {
    console.log('useEffect [cnt]',cnt);
  }, [cnt]);

  // 변경이 일어날떄 마다 실행(화면에 보여지는게 달라질 떄 마다.)
  useEffect(() => {
    console.log('useEffect');
  });
  
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex items-center justify-center text-3xl">
        {cnt}
        </div>
        <div>
      <TailButton caption = '증가' 
                  color = 'blue'
                  handlerClick = {handleUp} />
        </div>
    </div>
  )
}
