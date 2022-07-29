import styled from "styled-components";

export const ContainerCadastro = styled.div`
        display: grid;
        width: 100%;
        flex-wrap:wrap;
        justify-content: center;
        align-content: center;
        cursor: pointer;
        height:100vh;

        p{
            margin: 5px auto;
            text-align: center;
        }

        img{
            position: static;
            width: 150px;
            margin: 60px 60px 60px 100px;
            object-fit: contain;
            margin-top: 10vH;
        }
    
        input{
            position: static;
            border: 1px solid #B8B8B8;
            border-radius: 6px;
            width: 300px;
            height: 50px;
            margin: 20px 0 0 0;
        }
        form{
            display:flex;
            flex-direction:column;

        }

        button{
            position: static;
            background-color: #5CB646;
            margin: 2rem 0 2rem 0;
            width: 300px;
            height: 50px;
            padding: 10px;
            border: 1px solid #B8B8B8;
            border-radius: 6px;
            cursor: pointer;
            font-size: 25px;
        }

        @media screen and (max-device-width: 750px) {
            display: block;
            flex-direction: column;
            width: 100vw;
            margin-left: 8px;

            p{
                margin-top: 2px;
                margin-bottom: 15px;
            }

            input{
                display: block;
            }
        }

`;