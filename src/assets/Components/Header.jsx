import Profile from  "/Profile.svg"

function Header() {
  return (
    <div className="h-14 w-screen bg-gray-800 flex absolute gap-5">
      <a className="px-1 py-1 ml-16 my-2 font-bold font-shoulders text-slate-300 text-xl transition duration-700 border-2 border-transparent rounded-md hover:border-slate-300" href="/"> Home</a>  
      <a className="px-1 pt-2 my-2 transition duration-700 border-2 border-transparent rounded-md hover:border-slate-300 cursor-pointer" href="/"><img src={Profile} alt="" /></a>
    </div>
  )
}

export default Header