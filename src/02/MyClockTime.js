// function MyclockTime() {
//   let today = new Date();
//   today = today.toLocaleString();

//   return (
//     <div>
//     {today}
//     </div>
//   );
// }

// export default MyclockTime;

import React, { useState, useEffect } from 'react';

function MyclockTime() {
  const [time, setTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    // 1초마다 현재 시간을 업데이트하는 타이머 설정
    const timer = setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);

    // 컴포넌트가 언마운트될 때 타이머를 정리
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {time}
    </div>
  );
}

export default MyclockTime;

