import React from 'react';
import './App.css';

function App() {

  // Ejercicio 2
  const matrix = [
    [1, 2, -1],
    [6, 5, 4],
    [-9, 8, 9]
  ]

  function getDiagonalsDifference (matrix) {

    var sumFirstDiagonal = 0;
    var sumSecondDiagonal = 0;
    
    //Diagonal Descendente
    for (let i=0; i<matrix.length; i++ ){
      console.log(matrix[i]);

      let num = matrix[i][i];
      //console.log("Diagonal Descendente: "+ num);
      sumFirstDiagonal = sumFirstDiagonal + num;
    }

    console.log("------------------");

    //Diagonal Ascendente
    for (let n=matrix.length-1; n>=0; n-- ){
      //console.log(matrix[n]);
      matrix.reverse();

      let num2 = matrix[n][n];
      //console.log("Diagonal Ascendente: "+ num2);
      sumSecondDiagonal = sumSecondDiagonal + num2;
    }

    //El resultado correcto tendría que ser 15
    console.log("Suma de la Diagonal Descendente: "+ sumFirstDiagonal);

    //El resultado correcto tendría que ser -5
    console.log("Suma de la Diagonal Ascendente: "+ sumSecondDiagonal);

    //El resultado correcto tendría que ser -20
    let resultadoFinal = sumSecondDiagonal - sumFirstDiagonal
    console.log("Resultado: |(" + sumSecondDiagonal + ") - (" + sumFirstDiagonal + ")| = |" + resultadoFinal + "|");

    //El resultado correcto tendría que ser 20
    let valorAbsoluto = Math.abs(resultadoFinal)
    console.log("Valor Absoluto: " + valorAbsoluto);

  }

  getDiagonalsDifference(matrix)

  // Ejecicio 3
  let _ = require("lodash");

  const cliente = {
    Nombre: 'Jorge Rodriguez',
    Edad: 35,
    DireccionOficina: 'Oaxaca 96 Roma Norte',
    DireccionCasa: 'Salamanca 15',
    HistorialDeLentesComprados: {
      Notorious: {
        Color: 'negro',
        TipoDeMica: 'bluelight',
        Graduacion: {
          OjoDerecho: 3,
          OjoIzquierdo: 2
        }
      },
      Air: {
        Color: 'plata',
        TipoDeMica: 'Sencilla',
        Graduacion: {
          OjoDerecho: 3,
          OjoIzquierdo: 2
        }
      }
    }
  }


  function lowerCamelCaseObject (object) {
    for (let key in object){
      let keyInCamel = _.camelCase(key)
      let value = object[key]
      console.log( keyInCamel + ": " + value);
      if(ifObject(value)){
        lowerCamelCaseObject(value)
      }
    }
    function ifObject(val) {
      return val instanceof Object; 
    }
  }

  lowerCamelCaseObject (cliente)


// Ejercicio 1
  return (
    <div>
      <div className="header">Header</div>
      <div className="content">
        <p className="aside">Aside</p>
        <div className="section">
          <section className="container">
            <p className="item1">Item 1</p>
            <p className="item2">Item 2</p>
            <p className="item3">Item 3</p>
            <p className="item4">Item 4</p>
            <p className="item5">Item 5</p>
          </section>
        </div>
      </div>
      <footer className="footer">Footer</footer>
    </div>
  );
}



export default App;
