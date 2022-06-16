import Button from "./Button.js";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

/*
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState('');

  const onClick = () => setValue((prev) => prev+1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log('i run all the time');
  const effFuncCounter = () => {
    console.log('Call The counter....');
  }
  const effFuncKeyword = () => {
    if(keyword !== '')
      console.log('Call The API....');
  }
  useEffect(effFuncCounter, []);
  useEffect(effFuncKeyword, [keyword]);
  return (
    <div>
      <h1 styles={styles.title}>Welcome back! {counter}</h1>
      <input value={keyword} onChange={onChange} 
        placeholder="serch hear..."></input>
      <Button text="click me" />
      <button onClick={onClick}>click....</button>
    </div>
  );
}
*/

function Hello() {
  function bifn() {
    console.log('say bye~');
  }
  function hifn() {
    console.log('say hi~');
    return bifn;
  }
  useEffect(hifn, []);

  return <h2>Hello</h2>
}

function App() {
  const [value, setValue] = useState(false);

  const onClick = () => setValue((prev) => !prev);

  return (
    <div>
      {value ? <Hello /> : null}
      <button onClick={onClick}>{value ? 'change' : 'click'}</button>
    </div>
  );
}


export default App;
