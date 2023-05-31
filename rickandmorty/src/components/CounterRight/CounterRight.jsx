import React from 'react';
import {Link} from 'react-router-dom';
import {useContext} from 'react';
import {globalContext} from '../../contexts/globalContext';

export default function CounterRight() {
  const {state} = useContext(globalContext);

  return (
    <>
    <div className='counter'>
      <div className='numberRight'>{state.listRight.length}</div>
      <Link to='/right'>
      <button
        type='button'
        className='btn showmoreBtn'>
        Посмотреть угаданных персонажей
      </button>
      </Link>
    </div>
    </>
  );
}
