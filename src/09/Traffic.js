import { useEffect, useState } from "react"; // React에서 useEffect와 useState라는 기능을 가져옵니다.
import TrafficNav from "../09/TrafficNav"; // TrafficNav이라는 다른 컴포넌트를 가져옵니다.

export default function Traffic() { // Traffic이라는 새로운 컴포넌트를 정의합니다.

  // 전체 데이터
  const [tdata, setTdata] = useState([]); // API에서 가져온 데이터를 저장할 빈 배열을 만듭니다.

  // 대분류 데이터
  const [c1, setC1] = useState([]); // 사고 유형 대분류를 저장할 빈 배열을 만듭니다.
  const [selc1, setSelc1] = useState([]); // 선택된 대분류를 저장할 빈 배열을 만듭니다.

  // 사고유형 데이터
  const [c2, setC2] = useState([]); // 사고 유형을 저장할 빈 배열을 만듭니다.
  const [selc2, setSelc2] = useState([]); // 선택된 사고 유형을 저장할 빈 배열을 만듭니다.

  // 정보 추출
  const [info, setInfo] = useState([]); // 사고 관련 정보를 저장할 빈 배열을 만듭니다.

  // 데이터 가져오기 함수
  const getFetchData = () => {
    const apikey = process.env.REACT_APP_API_KEY; // 환경 변수를 통해 API 키를 가져옵니다.

    let url = `https://api.odcloud.kr/api/15070282/v1/uddi:8449c5d7-8be5-4712-9093-968fc0b2d9fc?`; // API 요청을 위한 기본 URL입니다.
    url = `${url}page=1&perPage=18&serviceKey=${apikey}`; // 페이지 정보와 API 키를 URL에 추가합니다.

    console.log("apikey =", apikey); // API 키를 콘솔에 출력합니다.
    console.log(url); // 완성된 URL을 콘솔에 출력합니다.

    // 데이터 가져오기
    fetch(url) // 위에서 만든 URL에 요청을 보냅니다.
      .then(resp => resp.json()) // 응답을 JSON 형태로 변환합니다.
      .then(data => setTdata(data.data)) // 변환된 데이터에서 필요한 부분만 상태 tdata에 저장합니다.
      .catch(err => console.log(err)); // 오류가 발생하면 콘솔에 출력합니다.
  };

  // 컴포넌트가 처음 렌더링될 때 데이터 가져오기
  useEffect(() => {
    getFetchData(); // 데이터를 가져오는 함수를 호출합니다.
  }, []); // 빈 배열을 넣어 처음 한 번만 실행됩니다.

  // tdata가 변경되었을 때
  useEffect(() => {
    if (!tdata) return; // tdata가 없으면 아무것도 하지 않습니다.

    // 사고 유형 대분류 가져오기
    let tm = tdata.map((item) => { return item["사고유형대분류"]; }); // 사고 유형 대분류를 배열로 만듭니다.
    tm = [...new Set(tm)]; // 중복된 대분류를 제거합니다.
    console.log("사고유형대분류 =>", tm); // 대분류를 콘솔에 출력합니다.

    // 대분류 상태에 저장
    setC1(tm); // 대분류 데이터를 상태 c1에 저장합니다.
  }, [tdata]); // tdata가 바뀔 때마다 실행됩니다.

  // 대분류 선택 시 사고유형 생성
  useEffect(() => {
    let tx = tdata.filter(item => item["사고유형대분류"] == selc1); // 선택한 대분류에 맞는 사고 데이터를 찾습니다.
    tx = tx.map(item => item['사고유형']); // 찾은 데이터에서 사고 유형만 추출합니다.
    setC2(tx); // 사고 유형 데이터를 상태 c2에 저장합니다.
  }, [selc1]); // selc1이 바뀔 때마다 실행됩니다.

  // 사고유형 선택 시 정보 추출
  useEffect(() => {
    if (!selc1 || !selc2.length) return; // selc1이나 selc2가 없으면 아무것도 하지 않습니다.

    let tm = tdata.filter(item => item['사고유형대분류'] == selc1 && item['사고유형'] == selc2); // 선택한 대분류와 사고 유형에 맞는 데이터를 찾습니다.

    tm = tm[0]; // 찾아낸 데이터 중 첫 번째 항목을 선택합니다. (하나의 결과만 있다고 가정)

    const infokey = ['사고건수', '사망자수', '중상자수', '경상자수', '부상신고자수']; // 추출할 정보의 키 목록입니다.
    let tmk = infokey.map((k, idx) => ( // 각 키에 대해 정보를 보여줄 JSX 요소를 생성합니다.
      <div key={selc1 + selc2 + idx} className="flex items-center justify-center"> // 고유한 키를 사용하여 요소를 생성합니다.
        <div className="w-3/5 p-2 font-bold text-center bg-orange-300"> // 정보의 이름을 보여주는 부분입니다.
          {k} // 정보의 이름을 표시합니다.
        </div>
        <div className="w-2/5 p-2"> // 정보 값을 보여주는 부분입니다.
          {parseInt(tm[k]).toLocaleString()} // 해당 정보를 숫자 포맷으로 표시합니다.
        </div>
      </div>
    ));
    setInfo(tmk); // 생성된 정보를 상태 info에 저장합니다.
  }, [selc2]); // selc2가 바뀔 때마다 실행됩니다.

  return (
    <div className="flex flex-col items-center justify-between w-full bg-slate-50 "> // 전체 컨테이너입니다.
      {c1.length > 0 && <TrafficNav title='대분류' c={c1} sel={selc1} setSel={setSelc1} />} // 대분류 선택을 위한 TrafficNav 컴포넌트입니다.
      {c2.length > 0 && <TrafficNav title='사고유형' c={c2} sel={selc2} setSel={setSelc2} />} // 사고유형 선택을 위한 TrafficNav 컴포넌트입니다.
      <div className="grid w-11/12 grid-cols-5 gap-2"> // 정보 표시를 위한 그리드 레이아웃입니다.
        {info} // 사고 관련 정보를 표시합니다.
      </div>
    </div>
  );
}
