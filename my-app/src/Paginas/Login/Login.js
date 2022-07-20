import React from "react";
import {  useNavigate } from "react-router-dom";


export default function Login() {
  
  const navigate = useNavigate()
  
  return (
    <div>
      <div>
        <img src=""></img>
      </div>
      <div><h3>Entrar</h3></div>
      <form>
      <div>
        <input placeholder="email@email.com" > e-mail</input>
        <input placeholder="Mínimo 6 caracteres"> Senha</input>
        <button onClick={()=>navigate("/")}>Entrar</button>
      </div>
      </form>
      <button onClick={()=>navigate("/cadastro")} className="">Não possui cadastro? Clique aqui.</button>
    </div>
  );
}
