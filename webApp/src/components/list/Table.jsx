import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

export default function List() {
  const navigate = useNavigate();
  const [products, setProducts] = useState();

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
        // TO DO - Show here the tosty of sucsess delete
        getProducts();
      }
    );
  };

  return (
    <div>
      <table>
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
          {typeof products !== "undefined" &&
            products.map((value) => {
              return (
                <tr key={value.id_product}>
                  <td>{value.id_product}</td>
                  <td>{value.name}</td>
                  <td>{value.price}</td>
                  <td>{value.description}</td>
                  <td>
                    <button
                      onClick={() => navigate("/product/" + value.id_product)}
                    >
                      Edit
                    </button>
                    <button onClick={() => deleteProduct(value.id_product)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
