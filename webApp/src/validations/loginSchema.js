import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().email().required("campo Email é obrigatório!"),
  password: yup.string().required("campo Password é obrigatório!"),
});
