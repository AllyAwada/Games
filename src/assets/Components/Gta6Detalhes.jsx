import React, { useState } from 'react';
import Gtavidetalhes from "/Gtavidetalhes.jpg";
import Gtavi from "/Gtavi.jpg"

function Gta6Detalhes() {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="p-16 m-20 bg-gray-800 gap-10 rounded-3xl flex items-start">
      <div className="block w-screen ">
      <img className="h-48 w-64 rounded cursor-pointer" src={hovered ? Gtavi : Gtavidetalhes} alt={hovered ? "Grand Theft Auto 6" : "Grand Theft Auto VI"} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} />
      </div>
      <div className="block">
        <p className="text-slate-300 text-sm font-lexend font-semibold">A aguardada confirmação oficial da Rockstar Games sobre o desenvolvimento de GTA 6 veio após anos de especulações e rumores, intensificados pelo sucesso monumental de seu antecessor, GTA V. A expectativa aumentou com o anúncio de um trailer oficial programado para lançamento no início de dezembro de 2023, coincidindo com o 25º aniversário da Rockstar. Este próximo capítulo da série promete ser inovador, com a introdução de uma protagonista feminina hispânica, uma primeira na franquia, e a continuação do estilo narrativo de "Bonnie e Clyde" com uma trama centrada em ladrões de banco. </p><br />
        <p className="text-slate-300 text-sm font-lexend font-semibold">Detalhes sobre o enredo sugerem um mergulho profundo na sátira da sociedade moderna, evitando, no entanto, piadas de mau gosto ou estereótipos prejudiciais. Além disso, a promessa de atualizações regulares após o lançamento, potencialmente incluindo adições significativas ao jogo, mantém o interesse dos fãs após a estreia inicial. Enquanto o preço e as versões do jogo ainda não foram divulgados, é esperado que GTA 6 esteja disponível nas principais plataformas, incluindo PlayStation, Xbox e PC. </p><br />
        <p className="text-slate-300 text-sm font-lexend font-semibold">A localização principal do jogo parece ter mudado de "Project Americas" para Vice City e áreas adjacentes, com a possibilidade de múltiplos protagonistas jogáveis, um conceito já explorado com sucesso em GTA V. Embora nenhum vídeo de gameplay tenha sido lançado até o momento, a antecipação em torno do trailer inaugural é palpável, já que os fãs aguardam ansiosamente os primeiros vislumbres da jogabilidade e do ambiente do jogo. Com o mundo dos games aguardando com expectativa, GTA 6 está pronto para sacudir a indústria quando seu trailer for revelado em dezembro de 2023. </p>
      </div>
    </div>
  )
}

export default Gta6Detalhes 