import { useEffect, useState } from "react";


function App1() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    setToDo(event.target.value);
  }
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === '') {
      return;
    }
    setToDos(prev => [toDo, ...prev]);
    setToDo("");
  }
  useEffect(()=>{
    console.log(toDos);
    console.log(toDos.map((item,index) => {
      return <li key={index}>{item}</li>
    }));
  }, [toDos])

  return (
    <div>
      <h1>To Do List ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange}
                value={toDo}
                type="text"
                placeholder="search text..."
        ></input>
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item,index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
    </div>
  );
}

export default App1;