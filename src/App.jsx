import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './Pages/Login'
import Register from './Pages/Register'

function App() {

  const mainRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Route>
    )
  )


  return (
    <>
    <RouterProvider router={mainRouter}/>
    </>
  )
}

export default App
