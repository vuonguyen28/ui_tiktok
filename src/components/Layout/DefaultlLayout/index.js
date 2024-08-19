import Header from "../components/Header/header";
import SideBar from "./SideBar/SideBar";

function DefaultLayout({children}) {
    return <div>
        <Header />
            <div className="container">
                {children}
            </div>
        <SideBar />
    </div>;
}

export default DefaultLayout;