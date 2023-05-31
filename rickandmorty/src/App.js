import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import ListRight from './components/ListRight/ListRight';
import ListWrong from './components/ListWrong/ListWrong';
import Restart from './components/Restart/Restart';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import {globalContext as GlobalContext} from './contexts/globalContext';
import {useLocalStorage} from './hooks/useLS';


function App() {
  const initialState = {
    character: {},
    listRight: [],
    listWrong: [],
  };

  const [state, dispatch] = useLocalStorage('game', initialState);

  return (
    <>
      <GlobalContext.Provider value={{state, dispatch}}>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/right' element={<ListRight />} />
          <Route path='/wrong' element={<ListWrong />} />
        </Routes>
        <Restart />
      </GlobalContext.Provider>
    </>
  );
}

export default App;