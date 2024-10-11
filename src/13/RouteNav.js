import TailButton from "../UI/TailButton" ;
import { useNavigate } from "react-router-dom";
export default function RouteNav() {
  const navigate = useNavigate();
  return (
    <div className="grid w-full grid-cols-3 gap-2 mt-10">
        <TailButton caption = '홈'
                      color = 'blue'
                      handlerClick = {() => navigate('/')}
                      size = 'w-full'/>
        <TailButton caption = 'page1'
                      color = 'blue'
                      handlerClick = {() => navigate('/p1')}
                      size = 'w-full'/>
        <TailButton caption = 'page2'
                      color = 'blue'
                      handlerClick = {() => navigate('/p2')}
                      size = 'w-full'/>
    </div>
  )
}