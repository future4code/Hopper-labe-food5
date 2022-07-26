import styled from "styled-components";

export const Div = styled.div`
        display: grid;
        width: 1024px;
        flex-wrap:wrap;
        margin: 20px auto;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        p{
            margin: 5px auto;
            text-align: center;
        }

        input{
            position: static;
            border: 1px solid #B8B8B8;
            border-radius: 6px;
            width: 350px;
            height: 50px;
        }

        button{
            position: static;
            background-color: #5CB646;
            width: 360px;
            height: 50px;
            padding: 10px;
            border: 1px solid #B8B8B8;
            border-radius: 6px;
            cursor: pointer;
        }


        @media screen and (max-device-width: 750px) {
            display: block;
            flex-direction: column;
            width: 100vw;
            margin-left: 8px;

            p{
                margin-top: 25px;
                margin-bottom: 25px;
            }

            input{
                display: block;
            }
        }
`;