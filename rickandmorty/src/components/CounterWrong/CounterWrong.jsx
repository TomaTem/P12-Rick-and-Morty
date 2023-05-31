import React from 'react';
import {Link} from 'react-router-dom';
import {useContext} from 'react';
import {globalContext} from '../../contexts/globalContext';

export default function CounterWrong() {
  const {state} = useContext(globalContext);

  return (
    <>
      <div className='counter'>
      <div className='numberWrong'>{state.listWrong.length}</div>
      <Link to='/wrong'>
      <button
        type='button'
        className='btn showmoreBtn'>
        Посмотреть неугаданных персонажей
      </button>
      </Link>
    </div>
    </>
  );
}
