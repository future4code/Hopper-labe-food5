import React from "react";
import {  useNavigate } from "react-router-dom";


export default function Cadastro() {
  
  const navigate = useNavigate()
  return (
    <div>
      <div>
        <button onClick={()=>navigate("/login")} > voltar</button>
      </div>
      <div>

        <img src=""></img>

      </div>


      <div><p class=""> Cadastrar </p></div>
      <form>

        <div class="">

          <input placeholder="Name*"></input>
          <input placeholder="E-mail*"></input>
          <input placeholder="Cpf*"></input>
          <input placeholder="Password*"></input>

        </div>

      </form>
      <button onClick={()=>navigate("/endereco")}  type="submit" className="">Criar Conta</button>
    </div>

  );
}
