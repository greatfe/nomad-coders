import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDosState } from "./atoms";

interface IForm {
  toDo: string,
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDosState);
  const category = useRecoilValue(categoryState);
  const {register, handleSubmit, setValue} = useForm<IForm>();
  const onSubmit = ({toDo}: IForm) => {
    setToDos(oldToDos => [{text: toDo, id:Date.now(), category}, ...oldToDos])
    setValue('toDo', '');
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("toDo")} placeholder="Write to do" />
      <button>add</button>
    </form>

  );
}

export default CreateToDo;
