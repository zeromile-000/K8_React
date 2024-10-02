import { useEffect, useState } from "react"
import TrafficNav from "../09/TrafficNav"


export default function Traffic() {

  // 전체 데이터
  const [tdata, setTdata] = useState([]); // 빈 배열로 초기화
  
  // 맨 처음 한번만 불러온다.
  useEffect(() => {
    getFetchData(); // getFetchData()함수를 불러온다.
  },[]);

  // tdata가 변경되었을 떄
  useEffect(() =>{
    // if(!tdata) return; // 언디파인드(false)가 되면 반대인 ture를 반환시킴.
    console.log(tdata);
    // tdata에 들어있는 데이터를 조건을 만족하는 데이터를 map으로 반복하여 새로운 배열로 가져온다. item
    let tm = tdata.map( (item) => {return item["사고유형대분류"]}); // item의 사고유형 대분류의 자료를 반복하여 tm변수에 저장
    tm = [...new Set(tm)]; // ... 전개 연산자를 통해 새로운 배열로 복사, new Set을 통해 중복된 자료를 제거 
    console.log("사고유형대분류 =>" ,tm);
  },[tdata]);

  // const handleFood = (item) => {
  //   console.log(item);
  //   let tm = fooddata.filter(i => i["운영주체 분류"].replace(' ', '') === item);
  //   tm = tm.map(i => <FoodCard obj={i} key={i.사업장명} />)
  //   setTags(tm);
  //   console.log(tm);

  // }


  // data fetch 
  const getFetchData = () => { 
    const apikey = process.env.REACT_APP_API_KEY; // 환경변수에 저장되어 있는 apikey 호출 및 저장

    let url = `https://api.odcloud.kr/api/15070282/v1/uddi:8449c5d7-8be5-4712-9093-968fc0b2d9fc?`; // url 주소 대입
    url = `${url}page=1&perPage=18&serviceKey=${apikey}`; // url과 쿼드스트링 그리고 api키를 붙여서 url에 재활당

    console.log("apikey =", apikey);
    console.log(url);

    // 데이터 가져오기
    fetch(url)
      .then(resp => resp.json()) // 데이터 전처리 : json 형태로 변환
      .then(data => setTdata(data.data)) // 전처리한 데이터중에서 필요한 데이터만 useState tdata에 대입 (data안에 data 카테고리)
      .catch(err => console.log(err));
  };


  return (
    <div className="flex flex-col items-center justify-between w-full bg-slate-50 ">
      <TrafficNav title = '대분류' obj= {tdata} />
      <TrafficNav title = '중분류' />
      </div>
  )
}

