import { ToastContainer } from "react-toastify";
import AppRouters from "./AppRouters";

import "react-toastify/dist/ReactToastify.min.css";
import styled from "styled-components";


function App() {

  const StyledContainer = styled(ToastContainer)`
  .Toastify__toast-body>div:last-child {
    font-family: "Montserrat", sans-serif;
  }
`;

  return (
    <>
      <AppRouters />
      <StyledContainer position="top-center" hideProgressBar />
    </>
  );
}

export default App;
