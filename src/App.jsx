import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./assets/Components/Header.jsx"
import Home from "./assets/Components/Home.jsx";
import Gta6Detalhes from "./assets/Components/Gta6Detalhes.jsx";


function App() {
  return (
    <main>
      <header>
        <Header />
      </header>
      <div className="h-screen w-screen bg-slate-300 flex items-center">
        <Gta6Detalhes />
      </div>
    </main>
  )
}

export default App