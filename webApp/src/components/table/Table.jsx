import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Container = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 1em;
  margin: 0;
  height: 77vh;
  display: flex;
  align-items: center;
  justify-content: center;
  place-items: center;
  overflow: hidden;
  font-family: "Montserrat", sans-serif;
  align-items: flex-start;
`;

const ButtonStyle = styled.button`
  border: 0;
  background-color: white;
  font-size: 20px;

  &:hover {
    cursor: pointer;
  }
`;

const TableStyle = styled.table`
  margin-top: 5px;
  width: 80%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  border-spacing: 0;

  th {
    text-align: inherit;
    border-bottom: solid 3px #d0d0d0dd;
  }

  td {
    border-bottom: solid 1px #d0d0d0dd;
  }

  tr {
    height: 40px;

    td:nth-child(1) {
      font-weight: bold;
      text-align: center;
    }
    td:nth-child(5) {
      text-align: center;
    }
    th:nth-child(5) {
      text-align: center;
    }
    th:nth-child(1) {
      text-align: center;
    }
  }

  thead,
  tbody {
    paddindg-left: 5px;
  }
`;

const TdStyle = styled.td`
  color: #d0d0d0dd;
`;

export default function List() {
  const navigate = useNavigate();
  const [products, setProducts] = useState({});

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    Axios.get("http://localhost:3001/getProducts").then((response) => {
      setProducts(response.data);
    });
  };

  const deleteProduct = (id_product) => {
    Axios.delete(`http://localhost:3001/delete/${id_product}`).then(
      (response) => {
        toast.success("produto excluido!");
        getProducts();
      }
    );
  };

  return (
    <Container>
      <TableStyle>
        <thead>
          <tr>
            <th>Serial</th>
            <th>Nome do Produto</th>
            <th>Preço do Produto</th>
            <th>Descrição do Produto</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((value) => {
              return (
                <tr key={value.id_product}>
                  <td>{value.id_product}</td>
                  <td>{value.name}</td>
                  <td>R$ {value.price}</td>
                  <td>{value.description}</td>
                  <td>
                    <ButtonStyle
                      onClick={() =>
                        navigate("/editProduct/" + value.id_product)
                      }
                    >
                      <FontAwesomeIcon icon={faEdit} color="#0277bd" />
                    </ButtonStyle>
                    <ButtonStyle
                      onClick={() => deleteProduct(value.id_product)}
                    >
                      <FontAwesomeIcon icon={faTrash} color="#0277bd" />
                    </ButtonStyle>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <TdStyle colSpan={5}>Não há Produtos adicionados ainda!</TdStyle>
            </tr>
          )}
        </tbody>
      </TableStyle>
    </Container>
  );
}
