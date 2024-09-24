import MyListData from './MyListData.json' ;
import MyListItem from './MyListItem';

export default function MyList() {
  console.log(MyListData) ;  // Print the entire JSON data in the console.log for debugging purposes.
  
const tags = MyListData.map( item => <MyListItem
                            key = {item.title}
                            title = {item.title} 
                            content = {item.content}
                            imgUrl = {item.imgUrl} 
                            /> ) ;

  return (
    <div className='w-10/12 grid grid-cols-1 lg:grid-cols-2 gap-4'>
      {tags}
    </div>
  )
}