import React from "react";
import { useNavigate } from "react-router-dom"
import {IoIosArrowBack} from 'react-icons/io'
import { Div } from "./StyledEndereco";


const CadastroEndereço = () => {

    const navigate = useNavigate()

    return(
        <Div>
            <header onClick={() => navigate('/cadastro')}><IoIosArrowBack fontSize={25}/>
            <hr/>
            </header>
            <span>
                <p>Meu endereço</p>
                <input
                type="text"
                placeholder="Rua / Av."
                />
                </span>
                <br/>
                <span>
                <input
                type="number"
                placeholder="Número" 
                />
                </span><br/>
                <span>
                    <input
                    type="text"
                    placeholder="Complemento"/>
                </span><br/>
                <span>
                    <input
                    type="text"
                    placeholder="Cidade"
                    />
                </span><br/>
                <span>
                    <input
                    type="text"
                    placeholder="Estado"
                    />
                </span><br/>
            <button onClick={() => navigate('/home')}>Salvar</button>

        </Div>
    );
}
export default CadastroEndereço