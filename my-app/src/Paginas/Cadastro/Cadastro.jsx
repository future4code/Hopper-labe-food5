import React from "react";
import { useNavigate } from "react-router-dom"
import {IoIosArrowBack} from "react-icons/io"
import { ContainerCadastro } from "./StyledCadastro";


const Cadastro = () => {

    const navigate = useNavigate()

    return(
        <ContainerCadastro>
            <header onClick={() => navigate('/')}><IoIosArrowBack fontSize={25}/>
            <hr/>
            <img src='../../logoFuture.png'/>
            </header>
            <span>
                <p>Cadastrar</p>
                <input
                type="text"
                placeholder="Nome Completo"
                />
                </span>
                <br/>
                <span>
                <input
                type="email"
                placeholder="E-mail" 
                />
                </span><br/>
                <span>
                    <input
                    type="text"
                    placeholder="CPF"/>
                </span><br/>
                <span>
                    <input
                    type="password"
                    placeholder="Senha"
                    />
                </span><br/>
                <span>
                    <input
                    type="password"
                    placeholder="Confirmar Senha"
                    />
                </span><br/>
            <button onClick={() => navigate('/endereco')}>Criar</button>
        </ContainerCadastro>
    );
}
export default Cadastro