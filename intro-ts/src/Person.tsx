// definition/shape of object
interface Props {
  name: string;
  email: string;
  age: number;
  progLang: string[];
}

const Person = (props: Props) => {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h1>Name: {props.age}</h1>
      <h1>Name: {props.email}</h1>
      <h1>
        Programming Language:
        {props.progLang.map((pl: string) => (
          <h2>{pl}</h2>
        ))}
      </h1>
    </div>
  );
};

export default Person;
