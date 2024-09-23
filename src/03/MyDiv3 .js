
// export default function MyDiv3 (probs) {
  export default function MyDiv3 ({dn1,dn2,dn3}) {
  return (
    <div className="w-4/6 h-4/6
    flex flex-col justify-center items-center
    bg-lime-600 text-white font-bold">
      {/* <div className= "flex h-10 justify-start items-center p-5 w-full m-2">{`${probs.d1} > ${probs.d2} > ${probs.d3}`}</div> */}
      <div className= "flex h-10 justify-start items-center p-5 w-full m-2">{`${dn1} > ${dn2} > ${dn3}`}</div>
    </div>
  )
}
