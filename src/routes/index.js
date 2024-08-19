import { HeaderOnly } from "../components/Layout";
import Home from "../page/Home";
import Following from "../page/Following";
import Profile from "../page/Profile";
import UpLoad from "../page/UpLoad";

// public router
const publicRoutes = [
    {path: '/', components:Home},
    {path: '/following', components:Following},
    {path: '/profile', components:Profile},
    {path: '/upload', components:UpLoad , layout: null},
    {path: '/headeronly', components:UpLoad , layout: HeaderOnly},


];

// private router
const privateRoutes = [

]

export { publicRoutes, privateRoutes}