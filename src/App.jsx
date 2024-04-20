import { createBrowserRouter, Link, } from "react-router-dom";

import Header from "./assets/Components/Header.jsx"
import Home from "./assets/Components/Home.jsx";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
  ]);
  return (
    <main>
      <header>
        <Header />
      </header>
      <div className="h-screen w-screen bg-slate-300 fixed z-0">
        <Home />
      </div>
    </main>
  )
}

export default App