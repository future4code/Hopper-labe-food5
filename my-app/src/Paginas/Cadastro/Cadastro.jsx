import React from "react";
import { useNavigate } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io"
import { ContainerCadastro } from "./StyledCadastro";
import { BASE_URL } from '../../constants/Constants'
import axios from "axios";
import {goToEndereco } from "../../Rotas/Cordenador";
import {useForm} from '../../hooks/useForm'


const Cadastro = () => {

    const { form, onChange, cleanFields } = useForm({
        name: "",
        email: "",
        cpf: "",
        password: "",
        rep_password: "",
    });
    const navigate = useNavigate();

    const SubmitCadastro = () => {
        const url = `${BASE_URL}/signup`;
        const body = {
            name: form.name,
            email: form.email,
            cpf: form.cpf,
            password: form.password,
        };

        axios
            .post(url, body)
            .then((res) => {
                localStorage.setItem("token", res.data.token);
                console.log(res)
                goToEndereco(navigate);

            })
            .catch((err) => {
                alert("Erro ao cadastrar usuário.")
                console.log(err.message)
            })


    }
    const submit = (event) => {
        event.preventDefault();
        cleanFields();
    }


    return (
        <ContainerCadastro>
            <header onClick={() => navigate('/')}><IoIosArrowBack fontSize={25} />
                <hr />
                <img src='../../logoFuture.png' />
            </header>
            <form onSubmit={submit} >
                <input
                    name={"Nome"}
                    value={form.name}
                    onChange={onChange}
                    placeholder="Nome e Sobrenome"
                    type="text"
                    fullWidth
                    id="outlined-required"
                    label="Nome"
                    required
                />
                <input
                    name={"E-mail"}
                    value={form.email}
                    onChange={onChange}
                    placeholder="email@email.com"
                    type="email"
                    fullWidth
                    id="outlined-required"
                    label="E-mail"
                    required
                />
                <input
                    name={"CPF"}
                    value={form.cpf}
                    onChange={onChange}
                    placeholder="000.000.000-00"
                    type="number"
                    fullWidth
                    id="outlined-required"
                    label="CPF"
                    required
                />
                <input
                    name={"Senha"}
                    value={form.password}
                    onChange={onChange}
                    placeholder="Mínimo 6 caracteres."
                    type="password"
                    fullWidth
                    id="outlined-required"
                    label="Senha"
                    required
                />
                <input
                    name={"Confirmar"}
                    value={form.rep_password}
                    onChange={onChange}
                    placeholder="Confirme a senha anterior."
                    type="password"
                    fullWidth
                    id="outlined-required"
                    label="Confirmar"
                    required
                />
                <button onClick={SubmitCadastro} fullWidth> Criar </button>
            </form>
        </ContainerCadastro>
    );
}
export default Cadastro