import Gta6 from "../assets/Components/Gta6.jsx"
import Godwar from "../assets/Components/Godwar.jsx"
import Spiderman from "../assets/Components/Spiderman.jsx"
import Thelastof from "../assets/Components/Thelastof.jsx"
import Header from "../assets/Components/Header.jsx"

function Home() {
  return (
    <main>
      <Header />
      <div className="h-screen flex items-center justify-center flex-wrap gap-5 pt-20 mx-5">
        <Gta6 />
        <Godwar />
        <Spiderman />
        <Thelastof />
      </div>
    </main>
  )
}

export default Home