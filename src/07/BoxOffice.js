import { useEffect, useState } from "react";
import BoxOffice_tr from "./BoxOffice_tr";

export default function BoxOffice() {
  const [tdata, setTdata] = useState([]);
  const [trs, setTrs] = useState([]);

  const getFetchData = () => {
    const apikey = process.env.REACT_APP_MV_KEY;
    const dt = '20240929';

    let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`;
    url = `${url}key=${apikey}&targetDt=${dt}`;

    console.log("apikey =", apikey);
    console.log(url);

    // 데이터 가져오기
    fetch(url)
      .then(resp => resp.json())
      .then(data => setTdata(data.boxOfficeResult.dailyBoxOfficeList))
      .catch(err => console.log(err));
  };

  const handleTrClick = (item) => {
    console.log("handleTrClick =", item);
  };

  // 맨 처음 한 번 실행
  useEffect(() => {
    getFetchData();
  }, []);

  // fetch 데이터가 채워지면
  useEffect(() => {
    if (tdata.length === 0) return; // tdata가 비어있으면 리턴
    console.log("tdata =", tdata);
    let tm = tdata.map(item => (
      <BoxOffice_tr
        handleClick={() => handleTrClick(item)}
        mv={item}
        key={item.movieCd}
      />
    ));
    setTrs(tm);
  }, [tdata]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <table className="w-10/12 text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
        <thead className="font-bold text-gray-700 bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">순위</th>
            <th scope="col" className="px-6 py-3">영화명</th>
            <th scope="col" className="px-6 py-3">매출액</th>
            <th scope="col" className="px-6 py-3">관객수</th>
            <th scope="col" className="px-6 py-3">증감율</th>
          </tr>
        </thead>
        <tbody>
          {trs}
        </tbody>
      </table>
    </div>
  );
}
