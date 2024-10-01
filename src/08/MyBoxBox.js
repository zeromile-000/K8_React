import { useState, useEffect } from "react";

export default function MyBoxBox({color}) {
  const [flag, setFlag] = useState(false);
  
  const colorObj = {
    'blue' : {
      'bg500' : 'bg-blue-500',
      'bg50' : 'bg-blue-50',
      'text-700' : 'text-blue-700',
      'border600' : 'border-blue-600',
    },
    'orange' : {
      'bg500' : 'bg-orange-500',
      'bg50' : 'bg-orange-50',
      'text-700' : 'text-orange-700',
      'border600' : 'border-orange-600',
    }
  }
  
  const obj = colorObj[color];
  console.log(obj);
  

  const handleClick = () => {
    setFlag(!flag);
    console.log('handleClick =>', flag);
  }

  
  useEffect(() => {
    console.log('useEffect blue =>', flag)
  }, [flag]);

  
  useEffect(() => {
    console.log('useEffect =>', flag)
  
  });


  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className={`w-full ${flag ? `bg-${color}-500` : ''}
                      flex flex-col justify-center items-center
                      border border-slate-400 rounded-md
                      p-5 m-5`}>
        <h1 className={`flex items-center justify-center p-5 m-5 text-3xl font-bold text-${color}-700 bg-white border rounded-md border-slate-600`}>
          {color}
        </h1>
        <div className={`flex items-center justify-center p-5 m-5 text-xl font-bold border border-${color}-600 rounded-md bg-${color}-50`}
          onClick={handleClick}>
          {color}Toggle
        </div>
      </div>
    </div>
  )
}