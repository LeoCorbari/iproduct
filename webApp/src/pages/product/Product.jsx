import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Axios from "axios";
import { productSchema } from "../../validations/productSchema";

export default function Product() {
  const navigate = useNavigate();
  const { id_product } = useParams();
  const [editProduct, setEditProduct] = useState();

  useEffect(() => {
    const resultado = async function getProductEspecific() {
      await Axios.get(
        `http://localhost:3001/getProductById/${id_product}`
      ).then((response) => {
        response.data.map((value) => {
          setEditProduct({
            name: value.name,
            price: value.price,
            description: value.description,
          });
        });
      });
    };
    resultado();
  }, []);

  const handleSubmit = (values) => {
    Axios.post("http://localhost:3001/setProduct", {
      name: values.name,
      price: values.price,
      description: values.description,
    }).then((response) => {
      navigate("/home");
    });
  };

  return (
    <div>
      <Formik
        initialValues={{}}
        onSubmit={handleSubmit}
        validationSchema={productSchema}
      >
        <Form>
          <Field
            type="text"
            name="name"
            placeholder="Digite o nome do produto"
          />

          <ErrorMessage component="spam" name="name" />

          <Field
            type="text"
            name="price"
            placeholder="Digite o preço do produto"
          />

          <ErrorMessage component="spam" name="price" />

          <Field
            type="text"
            name="description"
            placeholder="Digite a descrição do produto"
          />

          <ErrorMessage component="spam" name="description" />

          {typeof editProduct !== "undefined" ? (
            <button type="submit">Editar</button>
          ) : (
            <button type="submit">Enviar</button>
          )}
        </Form>
      </Formik>
    </div>
  );
}
