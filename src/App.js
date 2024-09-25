import './App.css';
import { SlAnchor } from "react-icons/sl";
// import MyDiv1 from './03/MyDiv1';
// import Hello from './01/Hello';
// import Myclock from './02/Myclock';
// import MyList from './04/MyList';
// import Lotto from './05/Lotto';
import FoodMain from './06/FoodMain';


function App() {
  
  return (
    <div className="w-full x1:w-10/12  h-screen mx-auto
                    flex flex-col justify-center items-center">
      <header className='w-full h-20
                          flex justify-between items-center 
                          bg-slate-200'>
        <p className='text-2xl font-bold p-5'>
          👨🏻‍🎓 K8_React 준영의 블로그
          </p>
        <p className='text-5xl font-bold p-5'>
          <SlAnchor />
          </p>
      </header>
      <main className='w-full grow 
                      flex flex-col justify-center items-center
                      overflow-y-scroll'>
        {/* <MyDiv1 /> */}
        {/* <MyList /> */}
        {/* <Lotto /> */}
        <FoodMain />
      </main>
      <footer className='w-full h-20
                          flex justify-center items-center 
                          bg-black text-white'>
        <p className='text-5x1'>k_dight 8기 😆</p>
      </footer>

    </div>
  );
}

export default App;
