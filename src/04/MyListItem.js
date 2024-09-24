import { useState } from "react";

export default function MyListItem({ title, content, imgUrl }) {
  let [n, setN] = useState(0);

  const handleHclick = () => {
    setN(n + 1);  
    console.log(n);
  };

  return (
    <div>
      <div className="w-full h-full border border-gray-300 flex justify-center items-center">
        <div className="w-1/3 flex justify-start items-start">
          <img src={imgUrl} alt={title} />
        </div>
        <div className="w-2/3 h-full p-5 flex flex-col justify-start items-center">
          <div className="flex flex-col h-3/4">
            <div className="text-blue-500 font-bold text-2xl mb-2">{title}</div>
            <div className="text-sm">{content}</div>
          </div>
          <div className="flex h-1/4 w-full justify-end items-end">
            <div className="text-2xl cursor-pointer" 
                            onClick={handleHclick}>
              ❤️
            </div>
            <div className="mx-3 font-semibold">좋아요</div>
            <div>{n}</div> 
          </div>
        </div>
      </div>
    </div>
  );
}
