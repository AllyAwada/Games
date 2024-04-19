import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./assets/Components/Header.jsx"
import Home from "./assets/Components/Home.jsx";


function App() {
  return (
    <main>
      <header>
        <Header />
      </header>
        <div className="h-screen flex items-center justify-center bg-slate-300">
          <Home />
        </div>
    </main>
  )
}

export default App