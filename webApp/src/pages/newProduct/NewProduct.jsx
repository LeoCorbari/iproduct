import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { productSchema } from "../../validations/productSchema";
import { toast } from "react-toastify";
import styled from "styled-components";

const Container = styled.div`
font-family: "Montserrat", sans-serif;
font-size: 1.2em;
margin: 0;
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
place-items: center;
overflow: hidden;
`;

const Card = styled.div`
width: 350px;
padding: 20px;
box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

spam {
  font-size: small;
  display: block;
  color: red;
  position: absolute;
}
`;

const Title = styled.h1`
  text-align: center;
`;

const InputGroup = styled.div`
  margin-bottom: 25px;
`;

const StyledField = styled(Field)`
  font-family: "Montserrat", sans-serif;
  display: block;
  width: -webkit-fill-available;
  height: 30px;
  padding-left: 10px;
`;


const StyledButton = styled.button.attrs({ type: "submit" })`
  font-family: "Montserrat", sans-serif;
  display: block;
  width: -webkit-fill-available;
  height: 30px;
  color: white;
  border: 0;
  border-radius: 5px;
  background-color: #9e9e9e;

  &:hover,
  &:focus {
    background-color: #616161;
  }
`;

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
    <Container>
      <Card>
      <Title>Novo Produto</Title>
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
        <InputGroup>
          <label>Nome</label>
          <StyledField
            type="text"
            name="name"
            placeholder="Digite o nome do produto"
          />

          <ErrorMessage component="spam" name="name" />
          </InputGroup>

          <InputGroup>
          <label>Preço</label>
          <StyledField
            type="text"
            name="price"
            placeholder="Digite o preço do produto"
          />

          <ErrorMessage component="spam" name="price" />
          </InputGroup>

          <InputGroup>
          <label>Descrição</label>
          <StyledField
            type="text"
            name="description"
            placeholder="Digite a descrição do produto"
          />

          <ErrorMessage component="spam" name="description" />
          </InputGroup>

          <StyledButton>Enviar</StyledButton>
        </Form>
      </Formik>
      </Card>
    </Container>
  );
}
