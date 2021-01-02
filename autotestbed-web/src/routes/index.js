import Login from "../page/Login";
import Error from "../page/err";
import Index from "../page/admin/Index";

export const mainRoutes=[{
    path:"/login",
    component: Login
},{
    path:"/err",
    component: Error
}]

export const adminRoutes=[{
    path: "/admin/index",
    component: Index
}]