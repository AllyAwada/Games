import React, { useState } from 'react';
import GodDetalhes from "/GodDetalhes.jpg";
import God from "/God.jpg";
import Header from "../assets/Components/Header.jsx";

function GodwarDetalhes() {
  const [hovered, setHovered] = useState(false);
  return (
    <main>
      <Header />
      <div className="p-16 m-20 bg-gray-800 gap-10 rounded-3xl flex items-start">
        <div className="block w-screen ">
          <img className="min-h-48 min-w-64 rounded cursor-pointer" src={hovered ? God : GodDetalhes} alt="God of war" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} />
        </div>
        <div className="block">
          <p className="text-slate-300 text-sm font-lexend font-semibold"> "God of War" oferece uma experiência imersiva e emocionante, mergulhando os jogadores em um mundo mitológico nórdico repleto de desafios épicos. Com gráficos deslumbrantes e uma trilha sonora envolvente, o jogo cativa os jogadores desde o primeiro momento. A narrativa é rica e complexa, explorando temas de redenção, paternidade e poder enquanto o protagonista Kratos embarca em uma jornada com seu filho, Atreus. A jogabilidade é fluida e gratificante, combinando combate visceral com quebra-cabeças inteligentes, resultando em uma experiência que prende a atenção do jogador do início ao fim. </p><br />
          <p className="text-slate-300 text-sm font-lexend font-semibold">Ao longo da jornada, os jogadores testemunham a transformação de Kratos de um guerreiro impiedoso para um pai protetor, enquanto ele enfrenta seus próprios demônios internos e os perigos que o cercam. O relacionamento entre Kratos e Atreus é o coração do jogo, com diálogos emocionantes e momentos de vínculo que adicionam profundidade à narrativa. A exploração do mundo aberto é recompensadora, com segredos para descobrir e chefes desafiadores para derrotar, mantendo os jogadores engajados em cada passo da jornada.</p><br />
          <p className="text-slate-300 text-sm font-lexend font-semibold">Além disso, "God of War" é aclamado por sua cinematografia, apresentando uma narrativa contínua sem cortes perceptíveis, criando uma imersão cinematográfica única. Com uma mistura perfeita de ação, história e personagens envolventes, o jogo oferece uma experiência inesquecível que eleva o gênero dos jogos de ação e aventura a novos patamares.</p>
          
        </div>
      </div>
    </main>
  )
}

export default GodwarDetalhes 