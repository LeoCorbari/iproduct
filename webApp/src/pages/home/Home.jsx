import React from "react";
import Table from "../../components/table/Table";
import Navbar from "../../components/navbar/Navbar";
import styled from "styled-components";

const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  text-align: center;
`;

export default function Home() {
  return (
    <div>
      <Navbar />
      <Title>Detalhes dos Produtos</Title>
      <Table />
    </div>
  );
}
