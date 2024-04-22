import { createBrowserRouter, Link, RouterProvider} from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Gta6Detalhes from "./Pages/Gta6Detalhes.jsx";
import GodwarDetalhes from "./Pages/GodwarDetalhes.jsx";
import ThelastofDetalhes from "./Pages/ThelastofDetalhes.jsx";
import SpidermanDetalehs from "./Pages/SpidermanDetalhes.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/gta6",
    element: <Gta6Detalhes />,
  },
  {
    path: "/godofwar",
    element: <GodwarDetalhes />
  },
  {
    path: "/spiderMan",
    element: <SpidermanDetalehs />,
  },
  {
    path: "/thelastofus",
    element: <ThelastofDetalhes />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App