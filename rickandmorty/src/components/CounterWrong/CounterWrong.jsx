import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function CounterWrong() {
  const {listWrong} = useSelector((store) => store.mainStore)

  return (
    <>
      <div className='counter'>
      <div className='numberWrong'>{listWrong.length}</div>
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
