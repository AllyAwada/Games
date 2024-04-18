import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./assets/Components/Header.jsx"
import Gta6 from "./assets/Components/Gta6.jsx"
import Godwar from "./assets/Components/Godwar.jsx"
import Spiderman from "./assets/Components/Spiderman.jsx"
import Thelastof from "./assets/Components/Thelastof.jsx"

function App() {
  return (
    <main>
      <header>
        <Header />
      </header>
      <body>
        <div className="h-screen flex items-center justify-center bg-slate-300">
          <div id="meuElemento" className="flex items-center gap-5">
            <Gta6 />
            <Godwar />
            <Spiderman />
            <Thelastof />
          </div>
        </div>
      </body>
    </main>
  )
}

export default App