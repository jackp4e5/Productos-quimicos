import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import IndexPage from "./views/IndexPage";
import Layout from "./layouts/Layout";
import Catalogo from "./views/Catalogo";
import FichaTecnicaProductos from "./views/FichaTecnicaProductos/FichaTecnicaProductos";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<IndexPage />} index />
          <Route path="/catalogo" element={<Catalogo />}  />
          <Route path="/fichaTecnica" element={<FichaTecnicaProductos />}  />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
