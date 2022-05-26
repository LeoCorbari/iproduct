import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect } from "react";
import { loginSchema } from "../../validations/loginSchema";
import Axios from "axios";

import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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

const Title = styled.h1`
  text-align: center;
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
  margin-top: 10px;
  color: white;
  border: 0;
  border-radius: 5px;
  background-color: #9e9e9e;

  &:hover,
  &:focus {
    background-color: #616161;
  }
`;

export default function login() {
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.getItem("user") && navigate("/home");
  }, [navigate]);

  const handleSubmit = (values) => {
    Axios.post("http://localhost:3001/login", {
      email: values.email,
      password: values.password,
    })
      .then((response) => {
        if (response.data.login) {
          sessionStorage.setItem("user", JSON.stringify(values.email));
          toast.success("Usuario " + values.email + " logado!");
          navigate("/home");
        } else {
          toast.error("Usuario invalido!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <Card>
        <Title>Login</Title>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={loginSchema}
        >
          <Form>
            <InputGroup>
              <label>Email</label>
              <StyledField
                type="text"
                name="email"
                placeholder="example@emal.com"
              />
              <ErrorMessage component="spam" name="email" />
            </InputGroup>
            <InputGroup>
              <label>Senha</label>
              <StyledField
                type="password"
                name="password"
                placeholder="password"
              />
              <ErrorMessage component="spam" name="password" />
            </InputGroup>
            <StyledButton>Login</StyledButton>
          </Form>
        </Formik>
      </Card>
    </Container>
  );
}
