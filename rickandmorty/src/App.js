import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import ListRight from './components/ListRight/ListRight';
import ListWrong from './components/ListWrong/ListWrong';
import Restart from './components/Restart/Restart';
import './App.css';
import {Routes, Route} from 'react-router-dom';
// import {useLocalStorage} from './hooks/useLS';
import { Provider } from 'react-redux';
import { store } from './store/store';


function App() {
  return (
    <>
      <Provider store = {store}>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/right' element={<ListRight />} />
          <Route path='/wrong' element={<ListWrong />} />
        </Routes>
        <Restart />
      </Provider>
    </>
  );
}

export default App;