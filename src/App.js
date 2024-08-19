import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRoutes } from './routes';
import { DefaultLayout } from './components/Layout';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.components;

            let Layout = DefaultLayout;
            if(route.layout){
              Layout = route.layout;
            }else if(route.layout === null){
              Layout = Fragment;
            }
           // const Layout = route.layout === null? Fragment : DefaultLayout; // Sử dụng DefaultLayout nếu không có layout riêng

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
