import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './components/landingPage';
import Cards from './components/cards';
import Nav from './components/navBar';
import NewDog from './components/newDog';
import SideBarFilter from './components/sideBarFilter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../src/redux/actions';

function App() {
  const dispatch = useDispatch();
  const isRaiz = useLocation().pathname === '/';
  const isHome = useLocation().pathname === '/home';

  const handleOnClose = () => {

  }
  const handlerFilterDogs = (dataFilter) => {
    dispatch(actions.filter_dogs(dataFilter));
  }

  useEffect(() => {
    dispatch(actions.all_dogs());
    dispatch(actions.all_temperaments());
  }, [dispatch]);

  return (
    <div>
      {isRaiz ? null : <Nav />}
      {!isHome ? null : <SideBarFilter fnFilterDogs={handlerFilterDogs} />}
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<Cards onClose={handleOnClose} />} />
        <Route path='/newdog' element={<NewDog />} />
      </Routes>
    </div>
  );
}

export default App;
