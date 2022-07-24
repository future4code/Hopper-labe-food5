import React from "react";
import { AiOutlineHome } from 'react-icons/ai'
import { BsCart3, BsPerson } from 'react-icons/bs'
import { useNavigate } from "react-router-dom";
// import { goToCarrinho, goToHome, goToPerfil} from "../Rotas/Cordenador";
import "./css/Componentes.css";
import { AiOutlineHome } from 'react-icons/ai'
import { BsCart3, BsPerson } from 'react-icons/bs'
import { useNavigate } from "react-router-dom";
import './css/Componentes.css';
// import { goToCarrinho, goToHome, goToPerfil} from "../Rotas/Cordenador";

export default function Footer() {

  const navigate = useNavigate()

  return (
    <div>

      <AiOutlineHome className="btn-footer" onClick={() => navigate("/")} />

      <button className="btn-footer" onClick={() => navigate("/carrinho")}>
        <BsCart3 />
      </button>
      <button className="btn-footer" onClick={() => navigate("/perfil")}>
        <BsPerson />
      </button>
      <div className="body">
        <div className="Footer">
          <button className="btn-footer" onClick={() => navigate("/")}>
            <AiOutlineHome className="icon" />
          </button>
          <button className="btn-footer" onClick={() => navigate("/carrinho")}>
            <BsCart3 className="icon" />
          </button>
          <button className="btn-footer" onClick={() => navigate("/perfil")}>
            <BsPerson className="icon " />
          </button>
        </div>
        <div>
          <button className="" onClick={() => navigate("/")}>
            <AiOutlineHome />
          </button>
          <button className="" onClick={() => navigate("/carrinho")}>
            <BsCart3 />
          </button>
          <button className="" onClick={() => navigate("/perfil")}>
            <BsPerson />
          </button>
        </div>
        );
}
