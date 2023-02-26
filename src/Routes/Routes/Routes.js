import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Catagory from "../../Pages/Catagory/Catagory/Catagory";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Loginuser/Login";
import Register from "../../Pages/Loginuser/Register";
import News from "../../Pages/Newses/News/News";
import Tarmsandcon from "../../Pages/Other/Tarms@Condition/Tarmsandcon";
import Privateroute from "../PrivateRoute/Privateroute";

export const routes= createBrowserRouter([

{
    path:'/',element:<Main></Main>,children:[
        {
            path:'/',element:<Home></Home>,
            loader: ()=>fetch(' https://dragon-news-server-azure.vercel.app/news')

        },
        {
            path:"/catagory/:id?",element:<Catagory></Catagory>,
            loader:({params})=>fetch(` https://dragon-news-server-azure.vercel.app/catagories/${params.id}`)

        },
        {
            path:"/news/:id",element:<Privateroute><News></News></Privateroute>,
            loader:({params})=>fetch(` https://dragon-news-server-azure.vercel.app/news/${params.id}`)

        },
        {
            path:"/login",element:<Login></Login>,
            

        },
        {
            path:"/register",element:<Register></Register>
            

        },
        {
            path:"/tarms",element:<Tarmsandcon></Tarmsandcon>
            

        }



    ]
}
])