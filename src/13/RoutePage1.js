import { useParams } from "react-router-dom"

export default function RoutePage() {
  const item = useParams().item;
  const item2 = useParams().item2;


  return (
    <div className="mt-10 text-3x1">
      RoutePage1
      {item} : {item2}
    </div>
  )
}
