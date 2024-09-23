import MyDiv2 from "./MyDiv2 "

export default function MyDiv1() {
  const d1 = 'div1';
  const d2 = 'div2';
  const d3 = 'div3';

  return (
    <div className="w-4/6 h-4/6
    flex flex-col justify-center items-center
    bg-lime-800 text-white font-bold">
      <div className= "flex h-10 justify-start items-center p-5 w-full m-2">{d1}</div>

      
      <MyDiv2 dn1={d1} dn2={d2} dn3={d3}/>
    </div>
  )
}

