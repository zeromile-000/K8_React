function Hello() {
  let today = new Date();
  today = today.toLocaleString();


  let name = 'Deu';
  return (
    // jsx는 반드시 하나의 태그만 return
    // fragment tag : <> </> 태그는 생성되지 않고 묶어주기만 한다. !!!
    // class 속성은 반드시 className을 사용해야 한다.
    <>
    <p className = 'p1'>
      Hello React !!
      </p>
      <p className="text-4xl text-yellow-400">
      {name === 'pnu' ? '부산대학교 김준영' : '동의대학교 김준영'}
      </p>
      <p style={{backgroundColor : 'gray', color:'white'}}>
      {/* {new Date().toLocaleString()} */}
      {today}
      </p>
    
    </>
  );
}

export default Hello;