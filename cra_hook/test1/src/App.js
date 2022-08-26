import React, { useState } from "react";

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1"
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2"
  },

];

function App() {
  
  return (
    <div className="App">
      {content.map(section => <button>{section.tab}</button>)}
    </div>
  );
}
//       <input placeholder="Name" value={name.value} onChange={name.onChange} ></input>

export default App;
