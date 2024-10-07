import TailButton from "../UI/TailButton";
export default function TraffciNav({ title, c, sel, setSel }) {



  const handlerBtClick = (item) => {
    setSel(item);
  };


  
  const tags = c.map(item => <TailButton
    key={item} // 아이템의 이름으로 키를 구분
    caption={item} // 아이템의 이름
    color={item == sel ? 'orange' : 'blue'} // TailButton의 색상이 'blue'인것을
    handlerClick={() => handlerBtClick(item)} // handlerClick => handlerBtClick 
  />);



  return (
    <div className="flex items-center justify-between w-full p-2 m-2 bg-blue-50">
      <div className="flex items-center justify-center w-1/5 text-2xl font-bold" >
        교통사고 {title}
      </div>
      <div className="flex items-end justify-center">
        {tags}
      </div>
    </div>
  )
}
