import { useDispatch, useSelector } from "react-redux";

// definition/shape of object
interface Props {
  name: string;
  email: string;
  age: number;
  progLang: string[];
  framework: framework;
}

export enum framework {
  Vue = "Vue",
  Vite = "Vite",
  React = "React",
}

export const Person = (props: Props) => {
  const username = useSelector((state: any) => state.user.value.username);
  return (
    <div>
      <h1>Logged in as: {username}</h1>
      <h1>Name: {props.name}</h1>
      <h1>age: {props.age}</h1>
      <h1>email: {props.email}</h1>
      <h1> Programming Language:</h1>
      {props.progLang.map((pl: string) => (
        <h2>{pl}</h2>
      ))}
      <h1>Framework: {props.framework}</h1>
    </div>
  );
};
