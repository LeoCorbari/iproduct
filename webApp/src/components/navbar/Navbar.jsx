import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
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

  return (
    <nav>
      <Bar>
        <Link to="/product">Adicionar novo produto</Link>
      </Bar>
    </nav>
  );
}
