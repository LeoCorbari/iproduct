import * as yup from "yup";

export const productSchema = yup.object().shape({
  name: yup.string().required("campo Nome é obrigatório!"),
  price: yup.number().required("campo Preço é obrigatório!"),
  description: yup.string().required("campo Descrição é obrigatório!"),
});
