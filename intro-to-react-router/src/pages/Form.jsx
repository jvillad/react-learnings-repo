import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const Form = () => {
  // form validation using yup
  const schema = yup.object().shape({
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    age: yup.number().positive().integer().min(12).required(),
    password: yup.string().min(12).max(20).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
  });

  // ensuress validation using the schema
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="full name" {...register("fullName")} />
      <input type="text" placeholder="email" {...register("email")} />
      <input type="number" placeholder="age" {...register("age")} />
      <input type="password" placeholder="password" {...register("password")} />
      <input
        type="password"
        placeholder="confirm password"
        {...register("confirmPassword")}
      />
      <input type="submit" />
    </form>
  );
};

export default Form;
