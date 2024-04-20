import Gtavi from "/Gtavi.jpg";

function Gta6() {
  return (
    <div className="group cursor-default bg-gray-800 w-72 h-40 hover:h-auto shadow-md rounded-md overflow-hidden">
      <div className="h-40 relative overflow-hidden">
        <img src={Gtavi} className="absolute top-0 left-0 h-full w-full object-cover" />
      </div>
      <div className="p-5 opacity-0 group-hover:opacity-100 duration-[1s] -translate-y-6 group-hover:translate-y-0">
        <h4 className="font-semibold font-lexend text-2xl text-slate-300">GTA 6</h4>
        <p className="text-slate-300 pb-3">Grand Theft Auto VI vai para o estado de Leonida, que abriga as ruas iluminadas pelas luzes neon de Vice City e arredores, na maior e mais imersiva evolução da franquia Grand Theft Auto. Disponível em 2025 para PlayStation 5 e Xbox Series X|S.</p>
        <a className="py-2 px-5 bg-slate-300 mt-2 w-fit rounded-md text-sm font-semibold text-gray-800 hover:bg-gray-500 hover:text-slate-300 transition duration-700" href="https://www.rockstargames.com/br/VI"> Saiba mais</a>
      </div>
    </div>
  )
}

export default Gta6