import {goToLogin} from '../../Rotas/Cordenador'
import { useNavigate } from "react-router-dom"
import { ContainerTelaInicial } from "./StyledTelaInicial";




export const TelaInicial = () => {
    const navigate = useNavigate();

    return (
        <ContainerTelaInicial>
            <img src="../../logo.png" alt="Tela inicial do aplicativo" />
            {setTimeout(() => {
                goToLogin(navigate)
            }, 3000)}
        </ContainerTelaInicial>
    );
};
