import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { SWAPI_ROOT } from '../../constants/api';
import { getApiResource } from '../../utils/network';
import PeoplePage from '../PeoplePage/PeoplePage';
import HomePage from '../HomePage/HomePage';
import { routesConfig } from '../../routes/routesConfig';
import Header from '../../components/Header/Header';
import styles from './App.module.css'

function App() {
  return (
    <>
    <BrowserRouter>
      <div className={styles.wrapper}>
        <Header/>
        <Routes>
          {routesConfig.map((route, index) => {
            return <Route path={route.path} element={route.element} key={index}/>
          })}
        </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
