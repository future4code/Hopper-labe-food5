import React from "react";
import './css/Componentes.css'

export default function Card() {
  return (
    <div>
      <div className="card-Externo">
        <div className="div-Card">
          <button class="btn-Card" tabindex="0" type="button">

            <img class="foto-Card" src='' alt="Habibs" title="Habibs" />
            <div class="div-Titulo">
              <p class="">HABIBS</p>
            </div>
            <div class="div-Detalhe">
              <div className="card-tempo">
                <p> 60 min </p>
              </div>
              <div  className="card-frete">
                <p> frete R$6.00 </p>
              </div>
            </div>
            <span class=""></span>
            <span class=""></span>
          </button>
        </div>

      </div>
    </div>



  );
}
