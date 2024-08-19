import Header from "../components/Header/header";

function DefaultLayout({children}) {
    return <div>
        <Header />
            <div className="container">
                {children}
            </div>
    </div>;
}

export default DefaultLayout;