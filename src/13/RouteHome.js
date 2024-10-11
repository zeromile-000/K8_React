import { Link } from "react-router-dom";

export default function RouteHome() {
  return (
    <div className="grid w-1/2 grid-cols-2 text-2xl">
      <div>
        <h1 className="flex items-center justify-center p-5 mb-5 text-3x1 bg-slate-100">page1</h1>
        <ul>
          <li><Link to='/p1/🍎/사과'> 사과 🍎</Link></li>
          <li><Link to='/p1/🍌/바나나'>바나나 🍌</Link></li>
          <li><Link to='/p1/🥕/당근'>당근 🥕</Link></li>
        </ul>
        </div>
        <div>
        <h1 className="flex items-center justify-center p-5 mb-5 text-3x1 bg-slate-100">page2</h1>
        <ul>
          <li><Link to='/p2?item=🍎&item2=사과'> 사과 🍎</Link></li>
          <li><Link to='/p2?item=🍌&item2=바나나'>바나나 🍌</Link></li>
          <li><Link to='/p2?item=🥕&item2=당근'>당근 🥕</Link></li>
        </ul>
        </div>
    </div>
  )
}
