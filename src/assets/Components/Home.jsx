import Gta6 from "./Gta6.jsx"
import Godwar from "./Godwar.jsx"
import Spiderman from "./Spiderman.jsx"
import Thelastof from "./Thelastof.jsx"

function Home() {
  return (
    <div className="h-screen flex items-center justify-center gap-5">
      <Gta6 />
      <Godwar />
      <Spiderman />
      <Thelastof />
    </div>
  )
}

export default Home