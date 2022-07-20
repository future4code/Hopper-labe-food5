import React from "react";
import {AiOutlineHome} from 'react-icons/ai'
import {BsCart3, BsPerson} from 'react-icons/bs'
import { useNavigate } from "react-router-dom";


export default function Footer() {

  const navigate = useNavigate()

  return (
    <div>
      <button className="" onClick={() => navigate('/')}>
        <AiOutlineHome/>
      </button>
      <button className="" onClick={() => navigate('/carrinho')}>
        <BsCart3/>
      </button>
      <button className="" onClick={() => navigate('/perfil')}>
       <BsPerson/>
      </button>
    </div>
  );
}
