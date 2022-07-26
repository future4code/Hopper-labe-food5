import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import Figura from './Imagens/TelaIncial.png'
import './CSS/Login.css'

 export const TelaInicial = () => {
    const navigate = useNavigate();

    const renderizaTela = () => {
        navigate.push('/login')
    }

    useEffect(() => {
        setTimeout(renderizaTela, 3000)
    }, [])

    return(
        <div className="logoTelaInicial">
            <img src={Figura} className="Figura" alt="logo" />
        </div>
    );
};

    

