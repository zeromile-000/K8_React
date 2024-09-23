import MyDiv3 from "./MyDiv3 "

// export default function MyDiv2 (probs) {
  export default function MyDiv2 ({dn1,dn2,dn3}) {
  // console.log(probs)
  return (
    <div className="w-4/6 h-4/6
    flex flex-col justify-center items-center
    bg-lime-700 text-white font-bold">
      <div className= "flex h-10 justify-start items-center p-5 w-full m-2">
        {/* {`${probs.dn1} > ${probs.dn2}`} */}
        {`${dn1} > ${dn2}`}
      </div>
      
      {/* <MyDiv3 d1 = {probs.dn1} d2 = {probs.dn2} d3 = {probs.dn3}/>   */}
      <MyDiv3 dn1 = {dn1} dn2 = {dn2} dn3 = {dn3}/>  
    </div>
  )
}
