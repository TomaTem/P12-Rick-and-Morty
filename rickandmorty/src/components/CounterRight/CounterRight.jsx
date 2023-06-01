import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function CounterRight() {
  const {listRight} = useSelector((store) => store.mainStore)

  return (
    <>
    <div className='counter'>
      <div className='numberRight'>{listRight.length}</div>
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
