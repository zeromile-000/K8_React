import TailButton from "../UI/TailButton";
import { useEffect, useState } from "react";
export default function TraffciNav({titel}) {
  const c = ['차대사람', '차대차', '차량단독', '철길건널목', '오토바이대사람'];
  const [sel,setSel] = useState(false);
  
  
  const handlerBtClick = (item) => {
    setSel(item);
  };

  useEffect(() =>{
    console.log(sel)
  },[sel]);
  
  // 
  const tags = c.map(item => <TailButton
  key={item} // 아이템의 이름으로 키를 구분
  caption={item} // 아이템의 이름
  color= {item == sel ? 'orange' : 'blue'} // TailButton의 색상이 'blue'인것을
  handlerClick={()=> handlerBtClick(item)} // handlerClick => handlerBtClick 
  />);
  


  return (
    <div className="flex items-center justify-between w-full p-2 m-2 bg-blue-50">
      <div className="flex items-center justify-center w-1/5 text-2xl font-bold" >
        교통사고 {titel}
      </div>
      <div className="flex items-end justify-center">
      {tags}
    </div>
    </div>
  )
}
