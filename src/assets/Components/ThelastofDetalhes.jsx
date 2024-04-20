import React, { useState } from 'react';
import ThelastDetalhes from "/ThelastDetalhes.jpg";
import Thelast from "/Thelast.jpg"

function ThelastofDetalhes() {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="p-16 m-20 bg-gray-800 gap-10 rounded-3xl flex items-start">
      <div className="block w-screen ">
      <img className="h-48 w-64 rounded cursor-pointer" src={hovered ? Thelast : ThelastDetalhes} alt="Spider Man" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} />
      </div>
      <div className="block">
        <p className="text-slate-300 text-sm font-lexend font-semibold">"The Last of Us" proporciona uma experiência intensamente emocional e envolvente, mergulhando os jogadores em um mundo pós-apocalíptico assolado por uma praga mortal. Com visuais deslumbrantes e uma trilha sonora arrebatadora, o jogo imerge os jogadores em uma atmosfera sombria e imersiva, onde cada decisão tem consequências profundas. A narrativa cativante segue Joel, um sobrevivente endurecido, e Ellie, uma jovem corajosa, em uma jornada desesperada pela sobrevivência e redenção em meio ao caos e à desolação.</p><br />
        <p className="text-slate-300 text-sm font-lexend font-semibold">Enquanto exploram os ambientes devastados pelos efeitos da praga, os jogadores enfrentam desafios brutais, tanto de inimigos humanos quanto de infectados, exigindo estratégia e astúcia para sobreviver. A jogabilidade é hábil e envolvente, combinando elementos de ação furtiva, combate intenso e resolução de quebra-cabeças, mantendo os jogadores constantemente no limite de suas habilidades. A relação entre Joel e Ellie é o ponto central da narrativa, evoluindo de uma parceria forçada para um laço emocional profundo, enquanto enfrentam adversidades inimagináveis juntos.</p><br />
        <p className="text-slate-300 text-sm font-lexend font-semibold">Além disso, "The Last of Us" é elogiado por sua narrativa madura e complexa, que aborda temas profundos como amor, perda, moralidade e sobrevivência. A história profundamente comovente e os personagens ricamente desenvolvidos criam uma conexão emocional com os jogadores, levando-os a uma jornada emocionante e inesquecível. Com uma combinação de storytelling magistral e jogabilidade envolvente, "The Last of Us" é muito mais do que apenas um jogo - é uma experiência emocional que ressoa muito além da tela.</p>
      </div>
    </div>
  )
}

export default ThelastofDetalhes 