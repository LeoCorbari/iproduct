import { ToastContainer } from "react-toastify";
import AppRouters from "./AppRouters";

import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <>
      <AppRouters />
      <ToastContainer position="top-center" hideProgressBar />
    </>
  );
}

export default App;
