import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Paginas/Home";
import SaoPaulo from "./Paginas/SaoPaulo";
import RiodeJaneiro from "./Paginas/RiodeJaneiro";
import EspiritoSanto from "./Paginas/EspiritoSanto";
import MinasGerais from "./Paginas/MinasGerais";
import RioGrandeSul from "./Paginas/RioGrandeSul";
import SantaCatarina from "./Paginas/SantaCatarina";
import Parana from "./Paginas/Parana";

import "./App.css";
import Bahia from "./Paginas/Bahia";
import Maranhao from "./Paginas/maranhao";
import Sergipe from "./Paginas/sergipe";
import Alagoas from "./Paginas/alagoas";
import Riograndedonorte from "./Paginas/riograndedonorte";
import Piaui from "./Paginas/piaui";
import Paraiba from "./Paginas/paraiba";
import Rondonia from "./Paginas/rondonia";
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sp" element={<SaoPaulo />} />
                <Route path="/rj" element={<RiodeJaneiro />} />
                <Route path="/es" element={<EspiritoSanto />} />
                <Route path="/mg" element={<MinasGerais />} />
                <Route path="/rs" element={<RioGrandeSul />} />
                <Route path="/pr" element={<Parana />} />
                <Route path="/sc" element={<SantaCatarina />} />

                <Route path="/bh" element={<Bahia />} />
                <Route path="/al" element={<Alagoas/>} />
                <Route path="/mr" element={<Maranhao/>} />
                <Route path="/pi" element={<Piaui />} />
                <Route path="/rn" element={< Riograndedonorte/>} />
                <Route path="/rd" element={<Rondonia />} />
                <Route path="/pr" element={<Parana />} />
                <Route path="/sg" element={<Sergipe />} />
                <Route path="/pb" element={<Paraiba />} />
                <Route path="/rd" element={<Rondonia />} />

            </Routes>

        </BrowserRouter>
    );
}