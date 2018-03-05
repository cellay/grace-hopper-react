import React from 'react';
import ReactDOM from 'react-dom';

// practice of lists

let parf1 = <p><b>Grace Murray Hopper</b>(Nueva York, 9 de diciembre de 1906 - Condado de Arlington, 1 de enero de 1992) fue una científica de la computación y militar estadounidense con grado de contraalmirante. Es pionera en el mundo de las ciencias de la computación y fue la primera programadora que utilizó el Mark I. Entre las décadas de los 50 y 60 desarrolló el primer compilador para un lenguaje de programación así como también propició métodos de validación.</p>;
let parf2 = <p>Popularizó la idea de una máquina independiente de los lenguajes de programación, lo que derivó en el desarrollo de COBOL, un lenguaje de alto nivel de programación que aún se utiliza. Hopper intentó enlistarse en la marina estadounidense durante la Segunda Guerra Mundial, pero debió unirse a las reservas de la armada porque era adulta para sus 34 años. Era conocida por sus amistades como <em>Amazing Grace</em>.</p>;

const paraf = [parf1, parf2];
const listParf = paraf.map(paraf => (paraf));

let Career = () => {
  return  <article>
  <h3>Carrera</h3>
  <ol>
    <li>World War II</li>
    <li>UNIVAC</li>
    <li>COBOL</li>
    <li>Standards</li>
  </ol>
  </article>
}

let Quote = () => {
  return <article>
    <h3>Frase</h3>
    <blockquote cite="https://es.wikiquote.org/wiki/Grace_Hopper">
      Para mí la programación es más que un importante arte práctico. También es un desafío gigantesco en los fundamentos del conocimiento
     </blockquote>
  </article>
}

ReactDOM.render(
  <main className = 'biography'>{listParf}
  <Career />
  <Quote />
  </main>, 
  document.getElementById('main')
);