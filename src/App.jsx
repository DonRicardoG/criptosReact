import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import imagenCrypto from "./img/imagen-criptos.png";
import Formulario from "./Components/Formulario";
import Resultado from "./Components/Resultado";
import Spinner from "./Components/Spinner";

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`;

const Heading = styled.h1`
  font-family: "lato", sans-serif;
  color: #fff;
  font-size: 40px;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto auto;
  }
`;

function App() {
  const [monedas, setMonedas] = useState({});
  const [resultado, setResultado] = useState({});
  const [cargado, setCargando] = useState(false);

  useEffect(() => {
    if (Object.keys(monedas).length > 0) {
      const cotizarCripto = async () => {
        setCargando(true);
        setResultado({});
        const { moneda, criptoMoneda } = monedas;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        setResultado(resultado.DISPLAY[criptoMoneda][moneda]);

        setCargando(false);
      };

      cotizarCripto();
    }
  }, [monedas]);

  if (Object.keys(resultado).length > 0) {
    console.log(resultado);
  }

  return (
    <Contenedor>
      <Imagen src={imagenCrypto} alt="Imagene Cripto" />
      <div>
        <Heading>Cotiza criptnonedas al instante</Heading>
        <Formulario setMonedas={setMonedas} />
        {cargado && <Spinner />}
        {resultado.PRICE && <Resultado resultado={resultado} />}
      </div>
    </Contenedor>
  );
}

export default App;