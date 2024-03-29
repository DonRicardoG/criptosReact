import React from "react";
import styled from "@emotion/styled";

const ResultadoDiv = styled.div`
  color: #fff;
  font-family: "Lato", sans-serif;
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 30px;
`;

const Imagen = styled.img`
  display: block;
  width: 120px;
`;

const Texto = styled.p`
  font-size: 24px;
  span {
    font-weight: 700;
  }
`;

const Precio = styled.p``;

const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;
  return (
    <ResultadoDiv>
      <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="" />
      <div>
        <p>
          EL Precio es de: <span>{PRICE}</span>
        </p>
        <Texto>
          Precio mas alto del dia: <span>{HIGHDAY}</span>
        </Texto>
        <Texto>
          Precio mas bajo del dia: <span>{LOWDAY}</span>
        </Texto>
        <Texto>
          Variación de precio: <span>{CHANGEPCT24HOUR}</span>
        </Texto>
        <Texto>
          Ultima actualización: <span>{LASTUPDATE}</span>
        </Texto>
      </div>
    </ResultadoDiv>
  );
};

export default Resultado;
