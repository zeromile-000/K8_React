import { useState, useEffect, useRef } from "react"; // React의 기본 훅을 임포트
import { useSearchParams } from "react-router-dom"; // URL 쿼리 매개변수를 다루기 위한 훅
import getcode from "./getcode.json"; // 예보 데이터를 담고 있는 JSON 파일을 임포트


export default function FcstList() {

// 목록
const [ops, setOps] = useState(); // 선택 항목을 저장할 상태 변수

const [trs, setTrs] = useState([]);

//전체 데이터
const [tdata, setTdata] = useState([]);

// form 값을 참조하기 위한 useRef 훅
const selRef = useRef(); // select 요소를 참조하기 위한 ref 변수

// sky 항목
const sky = {'1': '맑음(🌞)', '3':'구름많음(☁)', '4': '흐림(🌫)'};
const pty = {'0': '없음', '1':'비(🌧)', '2': '비/눈(☂/❄)', '3': '눈(❄)', '4' : '소나기(🌦)'};


  // URL의 쿼리 매개변수를 가져오기 위해 useSearchParams 훅 사용
  const [sParams] = useSearchParams();
  const gubun = sParams.get('gubun'); // 'gubun' 쿼리 매개변수 가져오기
  const dt = sParams.get('dt'); // 'dt' 쿼리 매개변수 가져오기
  const x = sParams.get('x'); // 'x' 쿼리 매개변수 가져오기
  const y = sParams.get('y'); // 'y' 쿼리 매개변수 가져오기
  const area = sParams.get('area'); // 'area' 쿼리 매개변수 가져오기

  // 가져온 쿼리 매개변수 출력
  console.log(gubun, dt, x, y, area);

  // select가 선택되었을 때 실행되는 함수
  const handleSelect = () => {
    console.log(selRef.current.value); // 선택된 값 출력
    if (!tdata) return;

    const code = getcode.filter(item => item['항목값'] === selRef.current.value)[0];
    console.log('code',code);
    
    const tm = tdata.filter(item => item['category'] === selRef.current.value)
                          .map(item => 
                          <tr className="h-10 bg-white border-b cursor-pointer hover:bg-gray-50" key = {item.category + item.fcstTime + item.fcstDate}>
                            <td>{code.항목명}({item.category})</td>
                            <td>{item.fcstDate.slice(0,4)}.{item.fcstDate.slice(4,6)}.{item.fcstDate.slice(6,8)}</td>
                            <td>{item.fcstTime.slice(0,2)}:{item.fcstTime.slice(2,4)}</td>
                            <td>
                            {
                              item.category === 'SKY' ? sky[item.fcstValue] : item.category === 'PTY' ? pty[item.fcstValue] : item.fcstValue + code.단위
                              
                            }
                            </td>
                            </tr>);
                            
                            setTrs(tm);
  }

  

  // 데이터 가져오기
  const getFetchData = async(url) => {
    const resp = await fetch(url);
    const data = await resp.json()
    
    console.log(data.response.body.items.item);
    setTdata(data.response.body.items.item);
    
  }

  // 컴포넌트가 처음 생성될 때 실행되는 useEffect
  useEffect(() => {
    // getcode에서 'gubun'에 해당하는 항목 필터링
    
    const tm =  getcode.filter(item => item.예보구분 === gubun) // 'gubun'이 일치하는 항목 필터링
    .map(item => ( <option key={item.항목값} value={item.항목값}>
          {item.항목명}({item.항목값}) 
        </option>)) ;

      setOps(tm);
      
      
      const apikey = process.env.REACT_APP_API_KEY;
      let url =  `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/`;

    if(gubun === '단기예보'){
      url = url + `getVilageFcst?serviceKey=${apikey}&pageNo=1&numOfRows=1000&dataType=json&`
      url = url + `base_date=${dt}&base_time=0500&nx=${x}&ny=${y}`;
    }
    else{
      url = url + `getVilageFcst?serviceKey=${apikey}&pageNo=1&numOfRows=1000&dataType=json&`
      url = url + `base_date=${dt}&base_time=0500&nx=${x}&ny=${y}`;
    }
     // 상태를 업데이트하여 option을 저장
    console.log(url)
    getFetchData(url);
    
  }, []); // 빈 배열을 의존성으로 주어 처음 렌더링할 때만 실행

  return (
    <div className="flex flex-col items-center justify-start w-full">
      <div className="grid w-10/12 grid-cols-1 gap-2 my-5 md:gap-4 md:grid-cols-2">
        <h1 className="w-full text-2xl font-bold text-left">
          {area} {gubun}-({dt.slice(0, 4)}-{dt.slice(4, 6)}-{dt.slice(6, 8)})
          {/* area와 gubun, dt를 포맷팅하여 제목으로 표시 */}
        </h1>
        <select className="form-select" ref={selRef} onChange={handleSelect}>
          <option value=''>--항목을 선택하세요--</option>
          {ops} {/* 필터링된 option 요소를 여기에 렌더링 */}
        </select>
      </div>
      

<div class="relative overflow-x-auto w-10/12 my-5">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-yellow-50 font-bold uppercase bg-lime-600 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    항목명
                </th>
                <th scope="col" class="px-6 py-3">
                    예측 시간
                </th>
                <th scope="col" class="px-6 py-3">
                    항목값
                </th>
                <th scope="col" class="px-6 py-3">
                    예측값
                </th>
            </tr>
        </thead>
        <tbody>
            {trs}
        </tbody>
    </table>
</div>

    </div>
  )
}
