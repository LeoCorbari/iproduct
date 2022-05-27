import { ToastContainer } from "react-toastify";
import AppRouters from "./AppRouters";

import "react-toastify/dist/ReactToastify.min.css";
import styled from "styled-components";

const StyledContainer = styled(ToastContainer)`
.Toastify__toast-body>div:last-child {
  font-family: "Montserrat", sans-serif;
}

.Toastify__toast {
  border-radius: 0;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
`;


function App() {

  return (
    <>
      <AppRouters />
      <StyledContainer position="top-center" hideProgressBar/>
    </>
  );
}

export default App;
