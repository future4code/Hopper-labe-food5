import React from "react";
import {  useNavigate } from "react-router-dom";



export default function MeuEndereco () {
  
  const navigate = useNavigate()
  return (
    <div>
      <div>
        <button onClick={()=>navigate("/")}> Voltar</button>
      </div>
      <div>

        <img src=""></img>

      </div>


      <div><p class="">Meu endereço </p></div>
      <form>

        <div class="">

          <input placeholder="Rua / Av*"></input>
          <input placeholder="Numero*"></input>
          <input placeholder="Apto / Bloco*"></input>
          <input placeholder="Bairro*"></input>
          <input placeholder="Cidade*"></input>
          <input placeholder="Estado*"></input>
        </div>

      </form>
      <button onClick={()=>navigate("/login")} type="submit" className="">Salvar</button>
    </div>

  );
}
