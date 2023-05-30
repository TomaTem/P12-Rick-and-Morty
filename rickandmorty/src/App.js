import {useState} from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Cards from './components/Cards/Cards'
import './App.css';

function App() {
  const [moreUsers, setMoreUsers] = useState(10);

  return (
    <>
        <Header />
        {/* <Main /> */}
        <Cards />
    </>
  );
}

export default App;