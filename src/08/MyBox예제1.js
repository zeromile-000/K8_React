import { useState, useEffect } from "react";

export default function MyBox() {
  const [blueFlag, setBlueFlag] = useState(false);
  const [orangeFlag, setOrangeFlag] = useState(false);

  const handleBlue = () => {
    setBlueFlag(!blueFlag);
    console.log('handleBlue =>', blueFlag);
  }

  const handleOrange = () => {
    setOrangeFlag(!orangeFlag);
    console.log('handleBlue =>', orangeFlag);
  }

  useEffect(() => {
    console.log('useEffect blue =>', blueFlag)
  }, [blueFlag]);

  useEffect(() => {
    console.log('useEffect orange =>', orangeFlag)
  }, [orangeFlag]);

  useEffect(() => {
    console.log('useEffect =>', blueFlag)
    console.log('useEffect =>', orangeFlag)
  });


  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className={`w-1/3 ${blueFlag ? 'bg-blue-500' : ''}
                      flex flex-col justify-center items-center
                      border border-slate-400 rounded-md
                      p-5 m-5`}>
        <h1 className="flex items-center justify-center p-5 m-5 text-3xl font-bold text-blue-700 bg-white border rounded-md border-slate-600 ">
          Blue
        </h1>
        <div className="flex items-center justify-center p-5 m-5 text-xl font-bold border border-blue-600 rounded-md bg-blue-50"
          onClick={handleBlue}>
          Blue Toggle
        </div>
      </div>
      <div className={`w-1/3 ${orangeFlag ? 'bg-orange-500' : ''}
                      flex flex-col justify-center items-center
                      border border-slate-400 rounded-md
                      p-5 m-5`}>
        <h1 className="flex items-center justify-center p-5 m-5 text-3xl font-bold text-orange-700 bg-white border rounded-md border-slate-600 ">
          orange
        </h1>
        <div className="flex items-center justify-center p-5 m-5 text-xl font-bold border border-orange-600 rounded-md bg-orange-50"
          onClick={handleOrange}>
          orange Toggle
        </div>
      </div>
    </div>
  )
}