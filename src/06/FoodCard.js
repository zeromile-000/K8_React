

import bank from './img/bank.png';
import busan from './img/busan.png';
import market from './img/market.png';


export default function FoodCard() {
  const obj = {
    "구분": "기초푸드뱅크",
    "시군구": "금정구",
    "사업장명": "금정구기초푸드뱅크",
    "신고기준": "임의",
    "사업장 소재지": "부산광역시 금정구 중앙대로2349번길 3(노포동)",
    "연락처(대표번호)": "051)508-1998",
    "팩스번호": "051)508-6550",
    "운영주체 분류": "1. 사회복지법인",
    "운영주체명": "남광종합사회복지관"
  };

  return (
    <div className="border-gray-300 border-2 flex justify-between items-center w-full h-full">
      <div className="border-black border-2 w-1/3 flex  justify-start">
      <img src={bank} alt="광역지원센터" />
      </div>
      <div className="border-gray-400 border-2 w-2/3 h-flex flex-col justify-center items-center m-5" >
      <div className="border-black border ">
        1
      </div>
      <div className="border-black border ">
        2
      </div>
      <div className="border-black border ">
        3
      </div>
      <div className="border-black border ">
        4
      </div>
      </div>
      {/* <img src={busan} alt="광역지원센터" />
      <img src={market} alt="기초푸드마켓" /> */}
      {/* {obj["구분"]}
      {obj["시군구"]}
      {obj["사업장명"]}
      {obj["신고기준"]}
      {obj["사업장 소재지"]}
      {obj["연락처(대표번호)"]}
      {obj["팩스번호"]}
      {obj["운영주체 분류"]}
      {obj["운영주체명"]} */}
    </div>
  )
}
