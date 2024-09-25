import Fooddata from './Fooddata.json';
import FoodCard from './FoodCard';
export default function FoodMain() {
  console.log(Fooddata) ;  // Print the entire JSON data in the console.log for debugging purposes.
  return (
    <div>
      {/* FoodMain */}
      <FoodCard />
    </div>
  )
}


