import TailCard from "../UI/TailCard";
import { useEffect, useState, useRef } from "react";


export default function Festival() {
  // 전체 축제 데이터
  const [tdata, setTdata] = useState([]);
  // 구정보
  const [gunm, setGunm] = useState([]);

  // 선택된 구 정보
  const [selgu, setSelgu] = useState([]);

  //select box를 제어
  const gu = useRef();

  const getFetchData = async () => {
    const apikey = process.env.REACT_APP_API_KEY;


    let url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?`;
    url = `${url}serviceKey=${apikey}&pageNo=1&numOfRows=40&resultType=json`;
    console.log(url);
    const resp = await fetch(url);
    const data = await resp.json();
    console.log("getFetch: ", data.getFestivalKr.item);
    setTdata(data.getFestivalKr.item);
  }

  //option이 선택이 되면
  const handleSelect = () => {
    console.log(gu.current.value);
  }

  useEffect(() => {
    getFetchData();
  }, []);


  //tdata가 채워지면 실행
  useEffect(() => {
    let tm = tdata.map(item => item.GUGUN_NM);
    tm = [...new Set(tm)];
    console.log("구 정보추출 => ", tm)
    tm = tm.map(item => <option key = {item} value={item}>
                      {item}
                      </option>)
    
    setGunm(tm)
  }, [tdata]);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex items-center justify-center w-10/12 p-5">
          <select className="w-1/2 form-select" ref={gu} onChange={handleSelect}>
            <option value="">--- 구를 선택하세요 ---</option>
            {gunm}
          </select>
      </div>
    </div>
  )
}
