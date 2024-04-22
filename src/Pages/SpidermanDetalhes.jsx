import React, { useState } from 'react';
import SpiderDetalhes from "/SpiderDetalhes.jpg";
import Spider from "/Spider.jpg";
import Header from "../assets/Components/Header";

function SpidermanDetalhes() {
  const [hovered, setHovered] = useState(false);
  return (

    <main>
      <Header />
      <div className="p-16 m-20 bg-gray-800 gap-10 rounded-3xl flex items-start">
        <div className="block w-screen ">
          <img className="h-48 w-64 rounded cursor-pointer" src={hovered ? Spider : SpiderDetalhes} alt="Spider Man" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} />
        </div>
        <div className="block">
          <p className="text-slate-300 text-sm font-lexend font-semibold">"Spider-Man 2" oferece uma experiência emocionante e empolgante ao colocar os jogadores na pele do icônico super-herói aracnídeo, balançando-se pela cidade de Nova York em uma jornada cheia de ação e aventura. Com gráficos impressionantes e uma jogabilidade fluida, os jogadores se encontram imersos em um mundo aberto vibrante, repleto de atividades e desafios para enfrentar. A narrativa envolvente apresenta uma nova e emocionante história do Homem-Aranha, repleta de vilões clássicos e momentos emocionantes.</p><br />
          <p className="text-slate-300 text-sm font-lexend font-semibold">Ao longo do jogo, os jogadores exploram a vasta cidade de Nova York, enfrentando ameaças criminosas e protegendo os cidadãos como o amigável vizinho do bairro. O balanço pelas ruas da cidade é uma experiência emocionante por si só, proporcionando uma sensação de liberdade e adrenalina enquanto o Homem-Aranha se move graciosamente entre os arranha-céus. A jogabilidade é diversificada, com combates intensos, quebra-cabeças desafiadores e missões emocionantes que mantêm os jogadores entretidos por horas a fio.</p><br />
          <p className="text-slate-300 text-sm font-lexend font-semibold">Além disso, "Spider-Man 2" é elogiado por capturar perfeitamente o espírito do herói aracnídeo, apresentando uma narrativa cativante que explora temas de responsabilidade, heroísmo e sacrifício. Os jogadores são levados a uma jornada emocionante enquanto o Homem-Aranha enfrenta seus inimigos mais perigosos e luta para proteger a cidade que jurou defender. Com uma mistura de ação eletrizante e momentos emocionantes, "Spider-Man 2" oferece uma experiência inesquecível que certamente deixará os fãs do herói aracnídeo ansiosos por mais.</p>
        </div>
      </div>
    </main>
  )
}

export default SpidermanDetalhes 