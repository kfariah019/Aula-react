import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Paginas/Home";
import Exemplo1 from "./Paginas/Exemplo1";
import Exemplo2 from "./Paginas/Exemplo2";
import Exemplo3 from "./Paginas/Exemplo3";
import Exemplo4 from "./Paginas/Exemplo4";
import "./App.css";
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/exemplo1" element={<Exemplo1 />} />
                <Route path="/exemplo2" element={<Exemplo2 />} />
            </Routes>
        </BrowserRouter>
    );
}
