import TailCard from "../UI/TailCard";
import TailButton from "../UI/TailButton";
import { useEffect, useRef, useState } from "react";
export default function Gallery() {

  const [tdata, setTdata] = useState([]);
  const [tags, setTags] = useState([]);

  const x = useRef();

  const getFetchData = async () => {
    const apikey = process.env.REACT_APP_API_KEY;
    const keyword = encodeURI(x.current.value);

    let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?`;
    url = `${url}serviceKey=${apikey}&numOfRows=20&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&`;
    url = `${url}keyword=${keyword}&_type=json`;
    console.log(url);

    // fetch(url)
    // .then(resp => resp.json())
    // .then(data => console.data)
    // .catch(err => console.error(err));

    const resp = await fetch(url);
    const data = await resp.json();
    console.log("getFetch: ", data.response.body.items.item);
    setTdata(data.response.body.items.item);
  }


  const handleok = () => {
    if (x.current.value === '') {
      alert('키워드를 입력하세요.');
      x.current.focus();
      return;
    }
    getFetchData();
  }


  const handleCancel = () => {
    x.current.value = '';
    x.current.focus();
    setTags([]);
  }

  useEffect(() => {
    x.current.focus();
  }, []);

  useEffect(() => {
    const tm = tdata.map(item => <TailCard
      key={item.galContentId}
      imgUrl={item.galWebImageUrl}
      title={item.galTitle}
      content={item.galPhotographyLocation}
      kw={item.galSearchKeyword} />);

    setTags(tm)
  }, [tdata]);


  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="w-10/12 p-5">
        <h1 className="flex justify-center w-full mb-5 text-3xl">
          한국관광공사 사진 정보
        </h1>
        <div className="grid w-full grid-cols-1 gap-2 p-5 bg-blue-50 lg:grid-cols-2">
          <div className="flex items-center justify-center lg:justify-end">
            <input type='text' className="w-10/12 form-input"
              ref={x}
              id='kw' name='kw' />
          </div>
          <div className="flex items-center justify-center lg:justify-start">
            <TailButton caption='확인'
              color='blue'
              handlerClick={handleok}
              size='w-1/2' />
            <TailButton caption='취소'
              color='blue'
              handlerClick={handleCancel}
              size='w-1/2' />
          </div>
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
        {tags}
      </div>
    </div>
  )
}