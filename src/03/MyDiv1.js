import MyDiv2 from "./MyDiv2 "

export default function MyDiv1() {
  const d1 = 'div1';
  const d2 = 'div2';
  const d3 = 'div3';

  return (
    <div className="flex flex-col items-center justify-center w-4/6 mt-5 font-bold text-white h-4/6 bg-lime-800">
      <div className= "flex items-center justify-start w-full h-10 p-5 m-2"> MyDiv1 
        
      </div>

      
      <MyDiv2 /> 
    </div>
  )
}

