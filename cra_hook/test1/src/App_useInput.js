import React, { useState } from "react";

const useInput = (initialValue, validation) => {
  const [value, setValue] = useState(initialValue);
  
  const onChange = (event) => {
    console.log(typeof event.target.value);
    const {
      target: {value}
    } = event;

    let willUpdate = true;
    if(typeof validation === 'function') {
      willUpdate = validation(value)
    }
    if(willUpdate) setValue(value);
  };

  return {value, onChange};
}

function App() {
  const maxLen = (val) => val.length <= 10;
  const name = useInput("Mr.", maxLen);
  
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} ></input> <br />
    </div>
  );
}
//       <input placeholder="Name" value={name.value} onChange={name.onChange} ></input>

export default App;
