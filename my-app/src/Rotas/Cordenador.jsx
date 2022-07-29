export function goToHome (navigate){
    navigate("/restaurants")
}

export function goToCadastro (navigate){
    navigate("/cadastro")
}

export function goToCarrinho(navigate){
    navigate("/carrinho")
}

export const goToDetalhes = (navigate, id) => {
    navigate(`/restaurants/${id}`)
}

export function goToLogin(navigate){
    navigate("/login")
}
export function goToPerfil(navigate){
    navigate("/perfil")
}
export function goToEndereco(navigate){
    navigate("/endereco")
}