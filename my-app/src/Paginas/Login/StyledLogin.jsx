import styled from "styled-components";

export const Container = styled.div `
        p{
            text-align: center;
            cursor: pointer;
        }

        img{
            position: static;
            width: 100px;
            margin: 60px 128px 16px;
            object-fit: contain;
            margin-top: 10vH;
        }

        div{
            display: grid;
            width: 1024px;
            flex-wrap:wrap;
            margin: 50px auto;
            justify-content: center;
            align-items: center;
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
            margin-top: 1rem;
            width: 360px;
            height: 50px;
            padding: 10px;
            border: 1px solid #B8B8B8;
            border-radius: 6px;
            cursor: pointer;
        }

        @media screen and (max-device-width: 750px) {
            margin: 0px 8px;
            display: flex;
            align-items: flex-start;

}
`;
