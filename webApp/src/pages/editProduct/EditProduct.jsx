import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Axios from "axios";
import { productSchema } from "../../validations/productSchema";
import { toast } from "react-toastify";

export default function EditProduct() {
  const navigate = useNavigate();
  const { id_product } = useParams();
  const [editProduct, setEditProduct] = useState();

  useEffect(() => {
    Axios.get(`http://localhost:3001/getProductById/${id_product}`).then(
      (response) => {
        response.data.map((value) => {
          setEditProduct({
            name: value.name,
            price: value.price,
            description: value.description,
          });
        });
      }
    );
  }, []);

  const handleSubmit = (values) => {
    Axios.put("http://localhost:3001/editProduct", {
      id_product: id_product,
      name: values.name,
      price: values.price,
      description: values.description,
    })
      .then((response) => {
        console.log("ué");
        toast.success("Produto editado!");
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {editProduct && (
        <Formik
          initialValues={{
            name: editProduct.name,
            price: editProduct.price,
            description: editProduct.description,
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

            <button type="submit">Editar</button>
          </Form>
        </Formik>
      )}
    </div>
  );
}
