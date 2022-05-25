import * as yup from "yup";

export const productSchema = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().required(),
  description: yup.string().required(),
});
