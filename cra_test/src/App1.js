import { useState } from "react";


function App1() {
  const [toDo, settoDo] = useState("");
  const onChange = (event) => {
    settoDo(event.target.value);
    console.log(event.target.value);
  }

  return (
    <div>
      <form action="">
        <input onChange={onChange}
                value={toDo}
                type="text"
                placeholder="search text..."
        ></input>
      </form>
    </div>
  );
}

export default App1;