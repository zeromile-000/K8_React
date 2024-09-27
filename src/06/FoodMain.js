import fooddata from './Fooddata.json'; // fooddata.json 파일에서 데이터 가져오기
import FoodCard from './FoodCard'; // FoodCard 컴포넌트 임포트
import { useState } from 'react'; // useState 훅 사용
import TailButton from '../UI/TailButton'; // TailButton 컴포넌트 임포트 (../UI 폴더에 위치)

export default function FoodMain() {
  const [tags, setTags] = useState(); // 현재 선택된 태그 관리 (아직 사용되지 않음)

  // 운영주체 분류 데이터 처리
  let tm = fooddata.map(item => item["운영주체 분류"].replace(' ', '')); // 공백 제거

  // 중복 제거 (Set 이용)
  tm = [...new Set(tm)];
  console.log(tm); // 중복 제거된 운영주체 분류 목록 콘솔 출력

  // 버튼 생성
  const bts = tm.map(item => (
    <TailButton
      key={item} // 고유 키 설정 (중복 방지)
      caption={item} // 버튼 텍스트 설정 (운영주체 분류)
      color='blue' // 버튼 색상 설정 (파란색)
      handlerClick={() => handleFood(item)} // 클릭 이벤트 핸들러 설정

    />
  ));

  // 버튼 클릭 시 실행되는 함수
  const handleFood = (item) => {
    console.log(item);
    let tm = fooddata.filter(i => i["운영주체 분류"].replace(' ', '') === item);
    tm = tm.map(i => <FoodCard obj={i} key={i.사업장명} />)
    setTags(tm);
    console.log(tm);

  }



  return (
    <div className='flex flex-col justify-start w-full h-screen'>
      <div className='flex items-center justify-center w-full h-20 bg-blue-100'>
        {bts} {/* 생성된 버튼들 렌더링 */}
      </div>      
      <div className='grid w-full grid-cols-1 gap-4 p-4 overflow-y-auto xl:grid-cols-2'>
        {tags} {/* 아직 사용되지 않는 tags 영역 */}
    </div>
    </div >
  );
}