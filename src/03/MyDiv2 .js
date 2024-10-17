import MyDiv3 from "./MyDiv3 "

// export default function MyDiv2 (probs) {
  export default function MyDiv2 ({dn1,dn2,dn3}) {
  // console.log(probs)
  return (
    <div className="flex flex-col items-center justify-center w-4/6 font-bold text-white h-4/6 bg-lime-700">
      <div className= "flex items-center justify-start w-full h-10 p-5 m-2">MyDiv2
        
        
      </div>
      
      
      <MyDiv3 />  
    </div>
  )
}
