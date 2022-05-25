import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect } from "react";
import { loginSchema } from "../../validations/loginSchema";
import Axios from "axios";

import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
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
  input {
    display: block;
  }

  spam {
    display: block;
    color: red;
  }
`;

export default function login() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.getItem("user") && navigate("/home");
  }, [navigate]);

  const handleSubmit = (values) => {
    Axios.post("http://localhost:3001/login", {
      email: values.email,
      password: values.password,
    })
      .then((response) => {
        if (response.data.login) {
          // show tosty of user login with sucsess
          localStorage.setItem("user", JSON.stringify(values.email));
          navigate("/home");
        } else {
          //show tosty of invalid user and reload de the page with inputs empty
          console.log("invalido");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <Card>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={loginSchema}
        >
          <Form>
            Login
            <Field type="text" name="email" placeholder="example@emal.com" />
            <ErrorMessage component="spam" name="email" />
            Senha
            <Field type="text" name="password" placeholder="password" />
            <ErrorMessage component="spam" name="password" />
            <button type="submit">Login</button>
          </Form>
        </Formik>
      </Card>
    </Container>
  );
}
