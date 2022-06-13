import Button from "./Button.js";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev+1);
  console.log('i run all the time');
  const iRunOnlyOnce = () => {
    console.log('i run only once.');
  }
  useEffect(iRunOnlyOnce, []);
  return (
    <div>
      <h1 styles={styles.title}>Welcome back! {counter}</h1>
      <Button text="click me" />
      <button onClick={onClick}>click....</button>
    </div>
  );
}

export default App;
