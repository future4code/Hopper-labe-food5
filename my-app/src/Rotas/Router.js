import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../Paginas/Home/Home"
import Cadastro from "../Paginas/Cadastro/Cadastro";
import Endereco from "../Paginas/Cadastro/MeuEndereco";
import Carrinho from "../Paginas/Carrinho/Carrinho";
import Login from "../Paginas/Login/Login"
import TelaInicial from "../Paginas/Login/TelaIncial"




const Router = () => {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/cadastro" element={<Cadastro/>} />
                    <Route path="/carrinho" element={<Endereco/>} />
                    <Route path="/login" element={<Carrinho/>} />
                    <Route path="/perfil" element={<Login/>} />
                    <Route path="/endereco" element={<TelaInicial/>} />
                  
                </Routes>
            </BrowserRouter>
        </div>

    );


}
export default Router;