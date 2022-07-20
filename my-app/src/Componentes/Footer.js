import React from "react";
import {AiOutlineHome} from 'react-icons/ai'
import {BsCart3, BsPerson} from 'react-icons/bs'
import { useNavigate } from "react-router-dom";
import { goToCarrinho, goToHome, goToPerfil} from "../Rotas/Cordenador";


export default function Footer() {

  const navigate = useNavigate()

  return (
    <div>
      <button className="" onClick={() => goToHome(navigate)}>
        <AiOutlineHome/>
      </button>
      <button className="" onClick={() => goToCarrinho(navigate)}>
        <BsCart3/>
      </button>
      <button className="" onClick={() => goToPerfil(navigate)}>
       <BsPerson/>
      </button>
    </div>
  );
}
