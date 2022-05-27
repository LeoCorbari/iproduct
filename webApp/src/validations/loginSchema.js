import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("deve ser um Email!")
    .required("campo Email é obrigatório!"),
  password: yup.string().required("campo Senha é obrigatório!"),
});
