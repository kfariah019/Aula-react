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
            </Routes>

        </BrowserRouter>
    );
}