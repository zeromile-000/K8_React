import './App.css';
import { SlAnchor } from "react-icons/sl";
// import MyDiv1 from './03/MyDiv1';
// import Hello from './01/Hello';
// import Myclock from './02/Myclock';
// import MyList from './04/MyList';
// import Lotto from './05/Lotto';
// import FoodMain from './06/FoodMain';
// import Myclock from './02/Myclock';
import BoxOffice from './07/BoxOffice';


function App() {
  
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen mx-auto x1:w-10/12">
      <header className='flex items-center justify-between w-full h-20 bg-slate-200'>
        <p className='p-5 text-2xl font-bold'>
          👨🏻‍🎓 K8_React 준영의 블로그
          </p>
        <p className='p-5 text-5xl font-bold'>
          <SlAnchor />
          </p>
      </header>
      <main className='flex flex-col items-center w-full overflow-y-scroll grow'>
        {/* <MyDiv1 /> */}
        {/* <MyList /> */}
        {/* <Lotto /> */}
        {/* <FoodMain /> */}
        {/* <Myclock/> */}
        <BoxOffice/>
      </main>
      <footer className='flex items-center justify-center w-full h-20 text-white bg-black'>
        <p className='text-5x1'>k_dight 8기 😆</p>
      </footer>

    </div>
  );
}

export default App;
