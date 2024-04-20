import Profile from "/Profile.svg"

function Header() {
  return (
      <div className="z-40 w-screen bg-gray-800 flex justify-between top-0 left-0 fixed">
        <a className="ml-5 my-3 px-5 py-2 text-slate-300 text-base font-lexend transition duration-700 border-2 border-transparent rounded-3xl hover:border-slate-300 cursor-pointer" href="/">Home</a>
        <a className="mr-5 my-3 px-1 py-1 transition duration-700 border-2 border-transparent rounded-full hover:border-slate-300 cursor-pointer" href="/"><img className="h-8" src={Profile} alt="" /></a>
      </div>
  )
}

export default Header