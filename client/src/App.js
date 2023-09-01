import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './components/landingPage';
import Cards from './components/cards';
import Nav from './components/navBar';
import BarraLateralFilter from './components/sideBarFilter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../src/redux/actions';

function App() {
  const dispatch = useDispatch();
  const isRaiz = useLocation().pathname === '/';

  const handleOnClose = () => {

  }
  const handlerFilterDogs = (id) => {
    dispatch(actions.filter_dogs(id));
  }

  useEffect(() => {
    dispatch(actions.all_dogs());
  }, [dispatch]);

  return (
    <div>
      {isRaiz ? null : <Nav/>}
      {isRaiz ? null : <BarraLateralFilter fnFilterDogs={handlerFilterDogs}/>}
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<Cards onClose={handleOnClose} />} />
      </Routes>
    </div>
  );
}

export default App;
