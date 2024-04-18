import Profile from  "/Profile.svg"

function Header() {
  return (
    <div className="pl-3 py-2 w-screen bg-gray-800 flex content-left absolute">
      <a className="px-1 py-1 border-2 border-solid ml-5 mt-2 font-bold font-shoulders text-slate-300 text-xl transition duration-700 hover:underline hover:decoration-slate-300" href=""> Home</a>  
      <a href="./" className="ml-4 mt-2 py-2 border-2 border-solid"><img src={Profile} alt="" /></a>
    </div>
  )
}

export default Header