import React, { useState } from "react";

export function App() {
  const [value, setValue] = useState(0);

  const incButton = () => {
    setValue((preVal) => preVal+1);
  }
  const decButton = () => {
    setValue((preVal) => preVal-1);
  }

  return (
    <>
    <span>{value}</span><br/>
    <button onClick={incButton}>increase</button>
    <button onClick={decButton}>decrease</button>
    </>
  );
}

export class AppUgly extends React.Component {
  state = {
    item: 1
  }
  render() {
    const {item} = this.state;
    return (
      <>
      <h2>{item}</h2><br/>
      <button onClick={this.incButton}>increase</button>
      <button onClick={this.decButton}>decrease</button>
      </>
    );
    }
    incButton = () => {
      this.setState(state => {
        return({
          item: state.item + 1,
        })
      })
    }
    decButton = () => {
      this.setState(state => {
        return({
          item: state.item - 1,
        })
      })
    }
}

//export default App;
