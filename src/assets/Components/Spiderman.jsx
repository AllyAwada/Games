import Spider from "/Spider.jpg"

function Spiderman() {
  return (
    <div className="group cursor-default bg-gray-800 w-72 h-40 hover:h-auto shadow-md rounded-md overflow-hidden">
      <div className="h-40 relative overflow-hidden">
        <img src={Spider} className="absolute top-0 left-0 h-full w-full object-cover" />
      </div>
      <div className="p-5 opacity-0 group-hover:opacity-100 duration-[1s] -translate-y-6 group-hover:translate-y-0">
        <h4 className="font-semibold font-lexend text-2xl text-slate-300">Spider Man 2</h4>
        <p className="text-slate-300 pb-3"> Pendure-se, pule e plane com as novas Asas de Teia para percorrer a Nova York da Marvel. Alterne rapidamente entre Peter Parker e Miles Morales para jogar histórias diferentes e usar novos poderes épicos enquanto o infame vilão Venom ameaça a vida deles, das pessoas próximas a eles e toda a cidade.</p>
        <a className="py-2 px-5 bg-slate-300 mt-2 w-fit rounded-md text-sm font-semibold text-gray-800 hover:bg-gray-500 hover:text-slate-300 transition duration-700" href="https://www.playstation.com/pt-br/games/marvels-spider-man-2/"> Saiba mais</a>
      </div>
    </div>
  )
}

export default Spiderman