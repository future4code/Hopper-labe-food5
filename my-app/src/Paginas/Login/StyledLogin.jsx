import styled from "styled-components";

export const Container = styled.div `
        p{
            text-align: center;
            cursor: pointer;
            font-size: 30px;
        }
        .cadastro{
            text-align: center;
            cursor: pointer;
            font-size: 20px;
        }
        img{
            position: static;
            width: 150px;
            margin: 60px 60px 60px 100px;
            object-fit: contain;
            margin-top: 10vH;
            
        }

        div{
            display: grid;
            width: 1024px;
            flex-wrap:wrap;
            
            justify-content: center;
            align-items: center;
        }
        form{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

        }
        input{
            position: static;
            border: 1px solid #B8B8B8;
            border-radius: 6px;
            width: 300px;
            height: 50px;
            margin: 20px 0 0 0;
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
            margin: 0px 8px;
            display: flex;
            align-items: flex-start;

}
`;
