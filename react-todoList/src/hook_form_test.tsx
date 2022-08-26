import React from "react";
import { useForm } from "react-hook-form";

/* 
function ToDoList() {
  const [value, setValue] = useState('');
  const onChange = (event:React.FormEvent<HTMLInputElement>) => {
    const {currentTarget: {value}} = event;
    setValue(value);
  } 
  const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(value);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={value} placeholder="Write to do" />
        <button>add</button>
      </form>
    </div>
  );
}
 */
interface Iform {
  email: string,
  firstName: string,
  lastName: string,
  userName: string,
  password: string,
  password1: string,
  extraError?: string,
}
function ToDoList() {
  const {register, watch, handleSubmit, formState:{errors}, setError} = useForm<Iform>({
    defaultValues: {
      email: "@naver.com",
    }
  });

  const onValid = (data: Iform) => {
    if(data.password !== data.password1) {
      setError("password1", {message: "password are not the same"}, {shouldFocus: true});
    }

    setError("extraError", {message: "server is offline."});
  }
  
  console.log(errors.email?.message);


  return (
    <div>
      <form 
        style={{display: "flex",flexDirection: "column"}}
        onSubmit={handleSubmit(onValid)}>
        <input {...register("email", {
            required: "email is required", 
            pattern: {
              value: /^(\w+)@(\w+).([a-zA-Z]{2,6})((.[a-zA-Z]{2})?)$/gm,
              message: "email invalid",
            }
          })} 
          placeholder="E-mail" />
        <span>{errors?.email?.message}</span>

        <input {...register("firstName", {
          required: "First Name is required",
          validate: (value) => {
            if(value.includes("nico")) {
              return "can't nico";
            }
          },
        })} placeholder="First Name" />
        <span>{errors?.firstName?.message}</span>
       
        <input {...register("lastName", {
          required: "Last Name is required",
          validate: {
            noGreatfe: (value) => value.includes('greatfe') ? "no greatfe allowed" : true,
            noGGG: (value) => value.includes('GGG') ? "no GGG allowed" : true,
          }
        })} placeholder="Last Name" />
        <span>{errors?.lastName?.message}</span>
        
        <input {...register("userName")} placeholder="UserName" />
        <input {...register("password", {required: "password is required...", minLength:10})} placeholder="password" />
        <input {...register("password1")} placeholder="password1" />
        <button>add</button>
      </form>
    </div>
  );
}

export default ToDoList;



