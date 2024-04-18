import { createBrowserRouter, RouterProvider } from "react-router-dom";

function GtaVI() {
  const router = createBrowserRouter([ {
      path: "/",
      element: <div>Hello world!</div>,
    },
  ]);
  return (
    <div>GtaVI</div>
  )
}

export default GtaVI