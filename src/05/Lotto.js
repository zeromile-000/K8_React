import { useState } from "react"
import TailBall from "../UI/TailBall"
import TailButton from "../UI/TailButton"

export default function Lotto() {
  const [numbers, setNumbers] = useState([]);


  const handleHclick1 = () => {
    console.log('handleHclick1')
    let arr = [];
    while (arr.length < 7) {
      let num = Math.floor(Math.random() * 45) + 1;
      if (!arr.includes(num)) arr.push(num);
    }
    setNumbers(arr);
  }


    return (
      <div className=" w-full">
        <div className="w-full flex justify-center items-center mb-10">
          <TailBall n={numbers[0]} />
          <TailBall n={numbers[1]} />
          <TailBall n={numbers[2]} />
          <TailBall n={numbers[3]} />
          <TailBall n={numbers[4]} />
          <TailBall n={numbers[5]} />
          <TailBall n={numbers[6]} />
        </div>
        <div className="w-full flex justify-center items-center mb-10">
          <TailButton caption={'로또번호생성'} color='blue'
            handlerClick={handleHclick1} />
        </div>
      </div>
    )
  }
