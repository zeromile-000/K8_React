import MyBoxBox from "./MyBoxBox"

export default function MyBox() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="grid w-10/12 grid-cols-2 gap-4">
      <MyBoxBox color = 'blue'/>
      <MyBoxBox color = 'orange'/>
      <MyBoxBox color = 'green'/>
      <MyBoxBox color = 'yellow'/>
      </div>
    </div>
  )
}
