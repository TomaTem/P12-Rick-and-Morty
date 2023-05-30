import React from 'react';

export default function CounterRight() {
  return (
    <>
    <div className='counter'>
      <div className='numberRight'>15</div>
      <button
        type='button'
        className='btn showmoreBtn'>
        {/* onClick={() => checkAnswer('Female')}> */}
        Посмотреть угаданных персонажей
      </button>
    </div>
    </>
  );
}
