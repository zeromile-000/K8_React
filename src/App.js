import './App.css';
import { SlAnchor } from "react-icons/sl";
// import MyDiv1 from './03/MyDiv1';
// import Hello from './01/Hello';
import Myclock from './02/Myclock';
// import MyList from './04/MyList';
import Lotto from './05/Lotto';
import FoodMain from './06/FoodMain';
// import Myclock from './02/Myclock';
import BoxOffice from './07/BoxOffice';
// import MyBoxBox from './08/MyBoxBox';
// import MyBox from './08/MyBox';
import Traffic from './09/Traffic';
// import MyRef from './10/MyRef';
import Gallery from './11/Gallery';
import Festival from './12/Festival';
// import RouteMain from './13/RouteMain';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function App() {
  
  return (
    <BrowserRouter>
    <div className="flex flex-col items-center justify-center w-full h-screen mx-auto x1:w-10/12">
      <header className='flex items-center justify-between w-full h-20 bg-slate-200'>
        <p className='p-5 text-2xl font-bold'>
          👨🏻‍🎓 K8_React 준영의 블로그
          </p>
        <ul className='flex items-center justify-center text-xl font-bold '>
          <li className='p-2 mx-4 rounded-md hover:bg-slate-700 hover:text-white'><Link to='/'> 준영의 골든타임</Link></li>
          <li className='p-2 mx-4 rounded-md hover:bg-slate-700 hover:text-white'><Link to='/Lotto'>준영의 로또 생성기</Link></li>
          <li className='p-2 mx-4 rounded-md hover:bg-slate-700 hover:text-white'><Link to='/FoodMain'>푸드뱅크</Link></li>
          <li className='p-2 mx-4 rounded-md hover:bg-slate-700 hover:text-white'><Link to='/BoxOffice'>준영의 영화예메</Link></li>
          <li className='p-2 mx-4 rounded-md hover:bg-slate-700 hover:text-white'><Link to='/Traffic'>교통사고</Link></li>
          <li className='p-2 mx-4 rounded-md hover:bg-slate-700 hover:text-white'><Link to='/Gallery'>관광지</Link></li>
          <li className='p-2 mx-4 rounded-md hover:bg-slate-700 hover:text-white'><Link to='/Festival'>축제</Link></li>
        </ul>
        <p className='p-5 text-5xl font-bold'>
          <Link to='/'> <SlAnchor / > </Link>
          </p>
      </header>
      <main className='flex flex-col items-center w-full overflow-y-scroll grow'>
        <Routes>
          <Route path="/" element={ <Myclock/> } />
          <Route path="/Lotto" element={ <Lotto /> } />
          <Route path="/FoodMain" element={ <FoodMain /> } />
          <Route path="/BoxOffice" element={ <BoxOffice/> } />
          <Route path="/Traffic" element={ <Traffic /> } />
          <Route path="/Gallery" element={ <Gallery /> } />
          <Route path="/Festival" element={ <Festival /> } />
        {/* <MyDiv1 /> */}
        {/* <MyList /> */}
        {/* <Lotto /> */}
        {/* <FoodMain /> */}
        {/* <Myclock/> */}
        {/* <BoxOffice/> */}
        {/* <MyBox/> */}
        {/* <MyBoxBox/> */}
        {/* <Traffic /> */}
        {/* <MyRef /> */}
        {/* <Gallery /> */}
        {/* <Festival /> */}
        {/* <RouteMain /> */}
      </Routes>
      </main>
      <footer className='flex items-center justify-center flex-shrink-0 w-full h-20 text-white bg-black'>
        <p className='text-5x1'>k_dight 8기 😆</p>
      </footer>

    </div>
    </BrowserRouter>
  );
}

export default App;
