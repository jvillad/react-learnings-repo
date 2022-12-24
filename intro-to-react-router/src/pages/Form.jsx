import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const Form = () => {
  // form validation using yup
  const schema = yup.object().shape({
    fullName: yup.string().required("Full name is required"),
    email: yup.string().email().required("Invalid email"),
    age: yup.number().positive().integer().min(12).required("Invalid age"),
    password: yup.string().min(12).max(20).required("Invalid password"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password doest not match"),
  });

  // ensuress validation using the schema
  const {
    register,
    handleSubmit,
    formState: { errors }, // get all the errors from from
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="full name" {...register("fullName")} />
      <p>{errors.fullName?.message}</p>
      <input type="text" placeholder="email" {...register("email")} />
      <p>{errors.email?.message}</p>
      <input type="number" placeholder="age" {...register("age")} />
      <p>{errors.age?.message}</p>
      <input type="password" placeholder="password" {...register("password")} />
      <p>{errors.password?.message}</p>
      <input
        type="password"
        placeholder="confirm password"
        {...register("confirmPassword")}
      />
      <p>{errors.confirmPassword?.message}</p>
      <input type="submit" />
    </form>
  );
};

export default Form;
