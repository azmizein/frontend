import { createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from "./pages/home"
import Login from "./pages/login/login"
import Register from "./pages/register/register"



function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <Home/>
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/register",
      element: <Register/>,
    },
  ])

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App;