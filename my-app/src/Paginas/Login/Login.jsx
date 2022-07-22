import React from "react";
import {useNavigate} from "react-router-dom";
import { BASE_URL } from "../../constants/Constants";




 function Login() {
  // const body = {
  //   "email":"",
  //   "password":""
  // }



  const navigate = useNavigate()

  return (
    <div>
      <div>
        <h3>Entrar</h3>
      </div>
      <form>
        <input
        type={"email"}
        placeholder="email@email.com"> e-mail</input>
        <input
        type={"password"}
        placeholder="Mínimo 6 caracteres"> Senha</input>
        <button onClick={() => navigate("/")}>Entrar</button>
      </form>
      <button onClick={() =>navigate("/cadastro")} className="">Não possui cadastro? Clique aqui.</button>
    </div>
  );
};
export default Login;