import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Axios from "axios";
import { productSchema } from "../../validations/productSchema";
import { toast } from "react-toastify";

export default function NewProduct() {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    Axios.post("http://localhost:3001/setProduct", {
      name: values.name,
      price: values.price,
      description: values.description,
    }).then((response) => {
      toast.success(values.name + " adicionado!");
      navigate("/home");
    });
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          price: "",
          description: "",
        }}
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

          <button type="submit">Enviar</button>
        </Form>
      </Formik>
    </div>
  );
}
