import { atom, selector } from "recoil";

export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface IToDo {
  text: string;
  id: number;
  category: Categories
}

export const categoryState = atom<Categories>({
  key: 'category',
  default: Categories.TO_DO
})

export const toDosState = atom<IToDo[]>({
  key: 'toDo',
  default: []
});

export const toDoSelector = selector({
  key: 'toDoSelector',
  get: ({get}) => {
    const toDos = get(toDosState);
    const category = get(categoryState);
    return toDos.filter(toDo => toDo.category === category);
  }
});

/* 
export const toDoSelector = selector({
  key: 'toDoSelector',
  get: ({get}) => {
    const toDos = get(toDosState);
    return [
      toDos.filter(toDo => toDo.category === "TO_DO"),
      toDos.filter(toDo => toDo.category === "DOING"),
      toDos.filter(toDo => toDo.category === "DONE")
    ];
  }
}); */