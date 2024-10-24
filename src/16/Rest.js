import axios from 'axios';
import TailButton from "../UI/TailButton";
import { useState, useEffect, useRef } from "react";
export default function Rest() {
  const [tdata, setTdata] = useState([]);
  const [trs, setTrs] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false); // 입력, 수정을 확인
  const [updateid, setUpdateid] = useState(); // 수정할 데이터 아이디

  const txt1Ref = useRef();
  const txt2Ref = useRef();

  const url = `http://localhost:3005/posts`;

  const getFetchData = async () => {
    const resp = await fetch(url);
    const data = await resp.json();

    setTdata(data);
    console.log(url);
    console.log("data:", data[0].id);
    console.log("data:", data);
  }

  // 입력처리 사용자 정의함수
  const handlePost = async () => {
    // 입력 확인
    if (txt1Ref.current.value === '') {
      alert("제목을 입력하세요");
      txt1Ref.current.focus();
      return;
    }
    if (txt2Ref.current.value === '') {
      alert("작성자를 입력하세요");
      txt2Ref.current.focus();
      return;
    }

    // 보낼 데이터를 object로 만들기
    const postData = {
      title: txt1Ref.current.value,
      author: txt2Ref.current.value
    }

    // post fetch
    const resp = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });
    // 입력된 데이터 반환
    const data = await resp.json();
    console.log('data', data)
    setTdata([data, ...tdata]); // 배열에 데이터를 추가할 때 사용

  }

  // 삭제하는 사용자 정의 함수
  const handleDelete = async (id) => {
    console.log('id = ', id);

    const resp = await fetch(`${url}/${id}`, {
      method: 'DELETE',
    });

    // 삭제된 데이터 반환
    const data = await resp.json();
    console.log('data = ', data)

    const tm = tdata.filter(item => item.id !== id);
    setTdata(tm);
  }

  // 수정하는 사용자 정의 함수
  const handleUpdata = (item) => {
    console.log('update = ', item)
    txt1Ref.current.value = item.title;
    txt2Ref.current.value = item.author;
    setIsUpdate(true);
    setUpdateid(item.id);
  }

  // 수정 처리 사용자 정의 함수
  const handlePut = async () => {
    // 보낼 데이터를 object로 만들기
    const postData = {
      title: txt1Ref.current.value,
      author: txt2Ref.current.value
    }

    const resp = await fetch(`${url}/${updateid}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });
    // 입력된 데이터 반환
    const data = await resp.json();
    console.log('data', data)

    const tm = tdata.map(item => item.id === updateid ? data : item);
    setTdata(tm);

    setIsUpdate(false);
    setUpdateid('');
    txt1Ref.current.value = '';
    txt2Ref.current.value = '';




  }



  // 입력과 수정을 구분하는 사용자 정의 함수
  const handleOk = () => {
    if (!isUpdate) handlePost();
    else handlePut();
  }


  useEffect(() => {
    getFetchData()
  }, []);

  useEffect(() => {
    const tm = tdata.map(item => <tr key={item.id}>
      <td>{item.title}</td>
      <td>{item.author}</td>
      <td><TailButton caption='삭제' color='orange' handlerClick={() => handleDelete(item.id)} size='w-1/2' /></td>
      <td><TailButton caption='수정' color='lime' handlerClick={() => handleUpdata(item)} size='w-1/2' /></td>
    </tr>);
    setTrs(tm);
  }, [tdata]);




  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="grid w-11/12 grid-cols-1 p-5 my-5 text-center md:grid-cols-7 bg-slate-100">
        <label htmlFor="txt1" className="my-2">제목</label>
        <div className="flex col-span-3">
          <input id="txt1"
            type="text"
            className="w-full form-input"
            ref={txt1Ref} />
        </div>
        <label htmlFor="txt2" className="my-2">작성자</label>
        <div className="flex">
          <input id="txt2"
            type="text"
            className="w-full form-input"
            ref={txt2Ref} />
        </div>
        <TailButton caption={isUpdate ? '수정' : '입력'}
          color='blue'
          handlerClick={handleOk}
          size='w-1/2' />
      </div>
      <table
        className="w-11/12 text-sm text-center text-surface">
        <thead
          className="font-medium border-b border-neutral-200">
          <tr className="font-bold text-center text-white bg-black">
            <th scope="col" className="w-3/6 px-6 py-3 text-center">제목</th>
            <th scope="col" className="w-1/6 px-6 py-3 text-center">작성자</th>
            <th scope="col" className="w-1/6 px-6 py-3 text-center">삭제</th>
            <th scope="col" className="w-1/6 px-6 py-3 text-center">편집</th>
          </tr>
        </thead>
        <tbody>
          {trs}
        </tbody>
      </table>
    </div>
  )
}
