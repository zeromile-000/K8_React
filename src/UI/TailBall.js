

export default function TailBall({n}) {
  const ballColor = {
    'b0' : "bg-red-500",
    'b1' : "bg-yellow-500",
    'b2' : "bg-gray-500",
    'b3' : "bg-green-500",
    'b4' : "bg-blue-500"
    
  }
  return (
    <div className={`w-20 h-20 m-2 
                    flex justify-center items-center
                    rounded-full
                    font-bold
                    ${ballColor['b'+ Math.floor(n / 10)]}
                    bg-slate-600
                    text-white text-2xl
                    `}> 
      {n}
    </div>
  )
}
