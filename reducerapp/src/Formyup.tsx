import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { text } from "stream/consumers";

interface Userdata {
  name: string;
  email: string;
}

const getUserSchema = (): Yup.ObjectSchema<Userdata> => {
  const userschema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email ").required("Email is required"),
  });
  return userschema;
};

export function MyForm() {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "all",
    resolver: yupResolver(getUserSchema()),
  });

  const onSubmit = (data: Userdata) => {
    console.log("data", data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} placeholder="name" />
        {errors.name && <p>{errors.name.message}</p>}
        <input {...register("email")} placeholder="email" />
        {errors.email && <p>{errors.email.message}</p>}
        <button type="submit"> Submit</button>
      </form>
    </>
  );
}
