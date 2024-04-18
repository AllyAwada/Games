import God from "/God.jpg"

function Godwar() {
  return (
    <div className="group bg-gray-800 w-72 h-40 hover:h-auto shadow-md rounded-md overflow-hidden">
      <div className="h-40 relative overflow-hidden">
        <img src={God} className="absolute top-0 left-0 h-full w-full object-cover" />
      </div>
      <div className="p-5 opacity-0 group-hover:opacity-100 duration-[1s] -translate-y-6 group-hover:translate-y-0">
        <h4 className="font-semibold font-lexend text-2xl text-slate-300">God Of War</h4>
        <p className="text-slate-300 pb-3">Com a vingança contra os deuses do Olimpo em um passado distante, Kratos agora vive como um mortal no reino dos deuses e monstros nórdicos. É nesse mundo duro e implacável que ele deve lutar para sobreviver... e ensinar seu filho a fazer o mesmo</p>
        <a className="py-2 px-5 bg-slate-300 mt-2 w-fit rounded-md text-sm font-semibold text-gray-800 hover:bg-gray-500 hover:text-slate-300 transition duration-700" href="https://www.playstation.com/pt-br/games/god-of-war/"> Saiba Mais</a>
      </div>
    </div>
  )
}

export default Godwar