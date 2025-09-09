import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Paginas/Home";
import Exemplo1 from "./Paginas/Exemplo1";
import Exemplo2 from "./Paginas/Exemplo2";
import "./App.css";
import Exercicio1 from "./Paginas/exercicio1";
import Exercicio2 from "./Paginas/exercicio2";
import Exercicio3 from "./Paginas/exercicio3";
import Exercicio4 from "./Paginas/exercicio4";
import Exercicio5 from "./Paginas/exercicio5";


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/exemplo1" element={<Exemplo1 />} />
                <Route path="/exemplo2" element={<Exemplo2 />} />
                <Route path="/exercicio1" element={<Exercicio1 />} />
                <Route path="/exercicio2" element={<Exercicio2/>} />
                <Route path="/exercicio3" element={<Exercicio3/>} />
                <Route path="/exercicio4" element={<Exercicio4/>} />
                <Route path="/exercicio5" element={<Exercicio5/>} />
            </Routes>
        </BrowserRouter>
    );
}
