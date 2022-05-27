import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Bar = styled.div`
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  justify-content: end;
  display: flex;
  padding-right: 40px;
`;

const LinkStyle = styled(Link)`
  padding: 5px;
  font-family: "Montserrat", sans-serif;
  height: 30px;
  color: #4caf50;
  border: 0;
  border-radius: 5px;
  text-decoration: none;
  display: flex;
  align-items: center;
  border: solid #4caf50 1px;

  &:hover {
    background-color: #4caf50;
    color: white;
  }
`;

export default function Header() {
  return (
    <nav>
      <Bar>
        <LinkStyle type="buttom" to="/newProduct">
          Adicionar produto
        </LinkStyle>
      </Bar>
    </nav>
  );
}
