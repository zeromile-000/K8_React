import busan from './img/busan.png';
import bank from './img/bank.png';
import market from './img/market.png';

import { useState } from 'react';
export default function FoodCard({ obj }) {
  const [isShow, setIsShow] = useState(false);

  const objImg = {
    "광역지원센터": busan,
    "기초푸드뱅크": bank,
    "기초푸드마켓": market
  }

  const handleClick = () => {
    setIsShow(!isShow);
  }
  return (
    <div className='flex w-full p-5 border rounded-md border-slate-300'>
      <div className='mr-5'>
        {/* <img src={obj["구분"] === '광역지원센터' ? busan :
                    obj["구분"] === '기초푸드뱅크' ? bank : market} 
             alt={obj["구분"]} /> */}
        <img src={objImg[obj["구분"]]}
          alt={obj["구분"]} />
      </div>
      <div className='flex flex-col items-start justify-between'>
        <div>
          <div className='text-3xl font-bold text-slate-700'>
            {obj["사업장명"]}
          </div>
          <div className='text-xl font-bold text-slate-500'>
            {obj["운영주체명"]}
          </div>
          <div>
            {obj["사업장 소재지"]}
          </div>
        </div>
        <div className='flex items-center justify-end w-full h-8 p-2 font-bold text-white bg-slate-600'
          onClick={handleClick}>
          {/* {isShow ? obj["연락처(대표번호)"] : ''} */}
          {isShow && obj["연락처(대표번호)"]}
        </div>
      </div>
    </div>
  )
}