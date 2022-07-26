import React from "react";
import {useNavigate} from "react-router-dom";

 function Login() {

  const navigate = useNavigate()

  return (
    <div>
      <div>
        <h3>Entrar</h3>
      </div>
      <form>
      <div>
        <input
        type={"email"}
        placeholder="email@email.com"/>
        <input
        type={"password"}
        placeholder="Mínimo 6 caracteres"/>
        <button onClick={() => navigate("/")}>Entrar</button>
      </div>
      </form>
      <button onClick={() =>navigate("/cadastro")} className="">Não possui cadastro? Clique aqui.</button>
    </div>
  );
};
export default Login;