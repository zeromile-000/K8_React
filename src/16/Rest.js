import TailButton from "../UI/TailButton" ;
import { useState, useEffect, useRef } from "react";
export default function Rest() {
  const[tdata, setTdata] = useState([]);
  const[trs, setTrs] = useState([]);

  let url = `http://localhost:3005/posts`;

  const getFetchData = async () => {   
    const resp = await fetch(url);
    const data = await resp.json();
    
    setTdata(data);
    console.log(url);
    console.log("data:", data[0].id);
    console.log("data:", data);
  }

  useEffect(()=>{
    getFetchData()
  },[]);

  useEffect(()=>{
    const tm = tdata.map(item => <tr key={item.id}> 
      <td>{item.title}</td>
      <td>{item.author}</td>
      <td><TailButton caption='삭제' color='orange' handlerClick='' size='w-1/2'/></td>
      <td><TailButton caption='수정' color='lime' handlerClick='' size='w-1/2'/></td>
      </tr>);
      setTrs(tm);
  },[tdata]);



  const txt1Ref = useRef();
  const txt2Ref = useRef();
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="grid w-11/12 grid-cols-1 p-5 my-5 text-center md:grid-cols-7 bg-slate-100">
        <label htmlFor="txt1" className="my-2">제목</label>
        <div className="flex col-span-3">
          <input id="txt1"
            type="text" 
            className="w-full form-input"
            inRef={txt1Ref} />
        </div>
        <label htmlFor="txt2" className="my-2">작성자</label>
        <div className="flex">
          <input id="txt2"
            type="text"
            className="w-full form-input"
            inRef={txt2Ref} />
        </div>
        <TailButton caption='증가'
          color='blue'
          handlerClick = ''
          size='w-1/2' />
      </div>
      <table
        className="w-11/12 text-sm font-light text-left text-surface">
        <thead
          className="font-medium border-b border-neutral-200">
          <tr className="font-bold text-center text-white bg-black">
            <th scope="col" className="w-3/6 px-6 py-3 text-center">제목</th>
            <th scope="col" className="w-1/6 px-6 py-3 text-center">작성자</th>
            <th scope="col" className="w-1/6 px-6 py-3 text-center">삭제</th>
            <th scope="col" className="w-1/6 px-6 py-3 text-center">편집</th>
          </tr>
        </thead>
        <tbody>
        {trs}
        </tbody>
      </table>
    </div>
  )
}
