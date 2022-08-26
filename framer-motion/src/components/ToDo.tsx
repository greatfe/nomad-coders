import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { Categories, IToDo, toDosState } from "./atoms";

function ToDo({text, id, category}:IToDo) {
  const setToDos = useSetRecoilState(toDosState);

  const onClick = (event:React.MouseEvent<HTMLButtonElement>) => {
    const {currentTarget: {name}} = event;

    setToDos(oldToDos => {
      const targetIndex = oldToDos.findIndex(toDo => toDo.id === id);
      const newToDo:IToDo = {text, id, category:name as any};

      console.log(targetIndex);

      return [...oldToDos.slice(0, targetIndex), 
              newToDo, 
              ...oldToDos.slice(targetIndex+1)];
    })

  }

  console.log(category);

  return (
      <li>
      <span>{text}</span>
      {category !== Categories.DOING && <button name={Categories.DOING+''} onClick={onClick}>Doing</button>}
      {category !== Categories.TO_DO && <button name={Categories.TO_DO+''} onClick={onClick}>To Do</button>}
      {category !== Categories.DONE && <button name={Categories.DONE+''} onClick={onClick}>Done</button>}
      </li>
  );
}

/* 
const onClick = (newCategory:IToDo["category"]) => {

}

{toDo.category !== "DOING" && <button onClick={onClick}>Doing</button>}
{toDo.category !== "TO_DO" && <button onClick={() => onClick('TO_DO')}>To Do</button>}
{toDo.category !== "DONE" && <button onClick={() => onClick('DONE')}>Done</button>}
 */
export default ToDo;
