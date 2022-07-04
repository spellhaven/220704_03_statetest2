import { useState } from 'react';
import './App.css';

function InputTest() {

  const [inputText, setInputText] = useState("Hello World!");

  const onReset = () => {
    setInputText("");
  }

  const onTextChange = (text) => {
    setInputText(text.target.value); // text가 객체로 인식되니까, 드러운(들어온) 값을 그대로 쓰고 싶을 땐 .target.value를 붙여 보세요!
  }

  return (
    <div>
      <input onChange={onTextChange} value = {inputText}></input>
      <button onClick={onReset}>촉이와(초기화)</button>
      <div>
        <h3>입력값: {inputText}</h3>
      </div>
    </div>
  );
}

function Counter() {
  
  const [num, setNum] = useState(0);
  // const [변수이름, 세터이름] = useState(초기값);

  const onPlus = () => {
    setNum(num + 1);
  }
  const onMinus = ()=> {
    setNum(num - 1);
  }
  
  // const onPlus = ()=> {
  //   세터(새로운값);
  // }
  // const onMinus = ()=> {
  //   세터(새로운값);
  // }
  
  return (
    <div>
        <h1>{num}</h1>
        {/* <h1>{변수이름}</h1> */}
        <button onClick={onPlus}>+1</button>
        <button onClick={onMinus}>-1</button>
    </div>
  );
}


function App() {
  return (
    <div>
        <Counter></Counter>
        <hr></hr>
        <InputTest></InputTest>
    </div>
  );
}

export default App;
