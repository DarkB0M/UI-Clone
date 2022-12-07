import {createBrowserRouter} from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'


export default createBrowserRouter([
{
    path:"/",
    element:<Home/>
},{
path:"/login",

element:<Login/>
}   
])