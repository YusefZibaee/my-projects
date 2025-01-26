import UserList from './pages/User/UserList'
import Home from './pages/Home'
import NewUser from './pages/NewUser/NewUser'
import Products from './pages/Products/Products'
import Product from './pages/Product/Product'
let routes = [
    {path: '/' , element : <Home/> } , 
    {path: '/user' , element : <UserList/> } , 
    {path: '/newUser' , element : <NewUser/> } , 
    {path: '/products' , element : <Products/> } , 
    {path: '/product/:productID' , element : <Product/> } , 
]


export default routes