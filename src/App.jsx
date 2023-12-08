import React, { useState, useRef, useEffect } from "react";
import './App.css'

function App() {

  const [Peso, setPeso] = useState(0);
  const [Altura, setAltura] = useState(0);

  const calculoIMC = () => {
    return Peso / (Altura * Altura);
  }

  const IMC = () => {
    let calculo = Peso / (Altura * Altura);
    let Magreza = 'reset';
    let Normal = 'reset';
    let SobrePeso = 'reset';
    let Obesidade = 'reset';
    let ObesidadeGrave = 'reset';

    if (calculo < 18.5) {
      Magreza = 'Magreza';
    } else if (calculo >= 18.5 && calculo < 24.9) {
      Normal = 'Normal';
    } else if (calculo >= 25 && calculo < 29.9) {
      SobrePeso = 'SobrePeso';
    } else if (calculo >= 30 && calculo < 39.9) {
      Obesidade = 'Obesidade';
    } else if (calculo > 40) {
      ObesidadeGrave = 'ObesidadeGrave';
    }

    return { Magreza, Normal, SobrePeso, Obesidade, ObesidadeGrave };
  };

  const { Magreza, Normal, SobrePeso, Obesidade, ObesidadeGrave } = IMC();

  return (
    <div>
      <h1>Tabela do IMC</h1>
      <form>
        <input type="number" placeholder="Digite o seu Peso" onChange={({ target }) => setPeso(parseFloat(target.value))} />
        <input type="number" placeholder="Digite a sua Altura em 0.00" onChange={({ target }) => setAltura(parseFloat(target.value))} />
      </form>
      <div>
        <table>
          <thead>
            <tr>
              <th>Altura</th>
              <th>Peso</th>
              <th>IMC</th>
            </tr>
          </thead>
          <tbody>
            <tr className={Magreza}>
              <td>MENOR QUE 18,5</td>
              <td>MAGREZA</td>
              <td className="IMCindice">0</td>
            </tr>
            <tr className={Normal}>
              <td>ENTRE QUE 18,5 e 24,9</td>
              <td>NORMAL</td>
              <td className="IMCindice">0</td>
            </tr>
            <tr className={SobrePeso}>
              <td>ENTRE QUE 25 E 29,9</td>
              <td>SOBREPESO</td>
              <td className="IMCindice">I</td>
            </tr>
            <tr className={Obesidade}>
              <td>ENTRE QUE 30,0 e 39,9</td>
              <td>OBESIDADE</td>
              <td className="IMCindice">II</td>
            </tr>
            <tr className={ObesidadeGrave}>
              <td>MAIOR QUE 40</td>
              <td>OBESIDADE GRAVE</td>
              <td className="IMCindice">III</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h2>O seu IMC é: {calculoIMC().toFixed(2)}</h2>
      </div>
    </div>
  )
}

export default App;