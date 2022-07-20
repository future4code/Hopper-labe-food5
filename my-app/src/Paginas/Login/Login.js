import React from "react";
import {useNavigate} from "react-router-dom";
import {goToCadastro, goToHome} from ".../Rotas/Cordenador.js";

 function Login() {
  return (
    <div>
      <div>
 
      </div>
      <div><h3>Entrar</h3></div>
      <form>
      <div>
        <input
        type={"email"}
        placeholder="email@email.com"> e-mail</input>
        <input
        type={"password"}
        placeholder="Mínimo 6 caracteres"> Senha</input>
        <button onClick={() => goToHome(navigate)}>Entrar</button>
      </div>
      </form>
      <button onClick={() => goToCadastro(navigate)} className="">Não possui cadastro? Clique aqui.</button>
    </div>
  );
};
export default Login;